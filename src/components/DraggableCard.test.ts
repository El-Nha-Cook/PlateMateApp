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
      props: { card: mockCard, origin: 'planner', nudgeDown: vi.fn() }
    })

    expect(wrapper.find('button').text()).toContain('x')
  })

  it('emits remove when the x button is clicked', async () => {
    const wrapper = mount(DraggableCard, {
      props: { card: mockCard, origin: 'planner', nudgeDown: vi.fn() }
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted('remove')).toBeTruthy()
  })

  it('does not emit remove when the card body is clicked', async () => {
    const wrapper = mount(DraggableCard, {
      props: { card: mockCard, origin: 'planner', nudgeDown: vi.fn() }
    })

    // clicking the span (card body) should not trigger remove
    await wrapper.find('span').trigger('click')

    expect(wrapper.emitted('remove')).toBeFalsy()
  })
})

describe('DraggableCard — nudge down', () => {
  it('renders the nudge down button when origin is planner', () => {
    const wrapper = mount(DraggableCard, {
      props: { card: mockCard, origin: 'planner', nudgeDown: vi.fn() }
    })

    const buttons = wrapper.findAll('button')
    const labels = buttons.map(b => b.text())
    expect(labels).toContain('↓')
  })

  it('calls nudgeDown with the card id when ↓ is clicked', async () => {
    const nudgeDown = vi.fn()
    const wrapper = mount(DraggableCard, {
      props: { card: mockCard, origin: 'planner', nudgeDown }
    })

    const nudgeBtn = wrapper.findAll('button').find(b => b.text() === '↓')
    await nudgeBtn.trigger('click')

    expect(nudgeDown).toHaveBeenCalledWith('oats')
  })

  it('does not render the nudge down button when origin is sideboard', () => {
    const wrapper = mount(DraggableCard, {
      props: { card: mockCard, origin: 'sideboard', nudgeDown: vi.fn() }
    })

    const labels = wrapper.findAll('button').map(b => b.text())
    expect(labels).not.toContain('↓')
  })
})