// DraggableCard.test.ts
import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import DraggableCard from './DraggableCard.vue'

// makeDraggable touches the DOM in ways jsdom can't handle,
// so we mock the entire library and replace it with a no-op
vi.mock('@vue-dnd-kit/core', () => ({
  makeDraggable: vi.fn(),
}))

const mockCard = { id: 'oats', name: 'Overnight Oats', emoji: '🥣' }

describe('DraggableCard — sideboard origin', () => {
  it('renders the card name and emoji', () => {
    const wrapper = mount(DraggableCard, {
      props: { card: mockCard, origin: 'sideboard' }
    })

    expect(wrapper.text()).toContain('Overnight Oats')
    expect(wrapper.text()).toContain('🥣')
  })

  it('shows the Add button when origin is sideboard', () => {
    const wrapper = mount(DraggableCard, {
      props: { card: mockCard, origin: 'sideboard' }
    })

    expect(wrapper.find('button').text()).toContain('Add')
  })

  it('emits click when the Add button is clicked', async () => {
    const wrapper = mount(DraggableCard, {
      props: { card: mockCard, origin: 'sideboard' }
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
  })
})

describe('DraggableCard — planner origin', () => {
  it('shows the remove button when origin is planner', () => {
    const wrapper = mount(DraggableCard, {
      props: { card: mockCard, origin: 'planner' }
    })

    expect(wrapper.find('button').text()).toContain('x')
  })

  it('emits remove when the x button is clicked', async () => {
    const wrapper = mount(DraggableCard, {
      props: { card: mockCard, origin: 'planner' }
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted('remove')).toBeTruthy()
  })

  it('does not emit remove when the card body is clicked', async () => {
    const wrapper = mount(DraggableCard, {
      props: { card: mockCard, origin: 'planner' }
    })

    // clicking the span (card body) should not trigger remove
    await wrapper.find('span').trigger('click')

    expect(wrapper.emitted('remove')).toBeFalsy()
  })
})