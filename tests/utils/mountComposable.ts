import { mount, type VueWrapper } from '@vue/test-utils'
import { defineComponent } from 'vue'

export const mountComposable = <T>(
  composable: () => T
): { result: T; wrapper: VueWrapper } => {
  let result!: T

  const TestComponent = defineComponent({
    setup() {
      result = composable()

      return {}
    },

    template: '<div />',
  })

  const wrapper = mount(TestComponent)

  return {
    result,
    wrapper,
  }
}
