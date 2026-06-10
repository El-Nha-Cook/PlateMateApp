// MenuPlanner.test.ts
import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import DailyMenuPlanner from './DailyMenuPlanner.vue'

// We need to stub the child components so the test doesn't have to
// care about DnDProvider, DraggableCard, etc. — we're only testing
// MenuPlanner's own logic here
const stubs = {
  MenuDashboard: true,
  RecipeCardsSideboard: true,
  DnDProvider: true,
}

function mountWithPinia() {
  return mount(DailyMenuPlanner, {
    global: {
      stubs,
      plugins: [
        createTestingPinia({
          initialState: {
            // the string here must match your defineStore id
            sideboard: {
              sideboardCards: [
                { id: 'oats',    name: 'Overnight Oats',  emoji: '🥣' },
                { id: 'chicken', name: 'Grilled Chicken', emoji: '🍗' },
                { id: 'salad',   name: 'Garden Salad',    emoji: '🥗' },
              ]
            }
          }
        })
      ]
    }
  })
}

describe('MenuPlanner — moveToDashboard', () => {
  it('moves a card from sideboardCards into the correct bucket', async () => {
    const wrapper = mountWithPinia()
    const vm = wrapper.vm as any

    // confirm the card starts in the sideboard
    expect(vm.sideboardCards.some(c => c.id === 'oats')).toBe(true)

    // call the function directly
    vm.moveToDashboard('oats', 'morning')

    // card should now be in the morning bucket
    expect(vm.plannerCards.morning.some(c => c.id === 'oats')).toBe(true)

    // card should no longer be in the sideboard
    expect(vm.sideboardCards.some(c => c.id === 'oats')).toBe(false)
  })

  it('does nothing if the cardId does not exist', () => {
    const wrapper = mountWithPinia()
    const vm = wrapper.vm as any
    const beforeLength = vm.sideboardCards.length

    vm.moveToDashboard('nonexistent', 'morning')

    // sideboard should be unchanged
    expect(vm.sideboardCards.length).toBe(beforeLength)
  })
})

describe('MenuPlanner — moveToSideboard', () => {
  it('moves a card from a bucket back to the sideboard', () => {
    const wrapper = mountWithPinia()
    const vm = wrapper.vm as any

    // first put a card into a bucket
    vm.moveToDashboard('oats', 'evening')
    expect(vm.plannerCards.evening.some(c => c.id === 'oats')).toBe(true)

    // now move it back
    vm.moveToSideboard('oats')

    expect(vm.sideboardCards.some(c => c.id === 'oats')).toBe(true)
    expect(vm.plannerCards.evening.some(c => c.id === 'oats')).toBe(false)
  })

  it('finds a card regardless of which bucket it is in', () => {
    const wrapper = mountWithPinia()
    const vm = wrapper.vm as any

    vm.moveToDashboard('chicken', 'nightowl')
    vm.moveToSideboard('chicken')

    expect(vm.sideboardCards.some(c => c.id === 'chicken')).toBe(true)
    expect(vm.plannerCards.nightowl.some(c => c.id === 'chicken')).toBe(false)
  })
})

describe('MenuPlanner — moveBetweenBuckets', () => {
  it('moves a card from one bucket to another', () => {
    const wrapper = mountWithPinia()
    const vm = wrapper.vm as any

    // put a card in morning first
    vm.moveToDashboard('salad', 'morning')
    expect(vm.plannerCards.morning.some(c => c.id === 'salad')).toBe(true)

    // move it to afternoon
    vm.moveBetweenBuckets('salad', 'afternoon')

    expect(vm.plannerCards.afternoon.some(c => c.id === 'salad')).toBe(true)
    expect(vm.plannerCards.morning.some(c => c.id === 'salad')).toBe(false)
  })

  it('does not duplicate the card', () => {
    const wrapper = mountWithPinia()
    const vm = wrapper.vm as any

    vm.moveToDashboard('oats', 'morning')
    vm.moveBetweenBuckets('oats', 'midday')

    // count total appearances across all buckets
    const total = Object.values(vm.plannerCards)
      .flat()
      .filter((c: any) => c.id === 'oats')
      .length

    expect(total).toBe(1)
  })
})