import { mount } from '@vue/test-utils'
import ToggleButton from '../index.vue'

const mountComponent = (overrides = {}) => {
  const defaultProps = {
    label: 'deseja confirmar?',
    value: false
  }

  const props = Object.assign(defaultProps, overrides)

  return mount(ToggleButton, {
    propsData: props
  })
}

describe('toggle-button - Unit', () => {
  it('Deve ser uma instancia Vue', () => {
    const wrapper = mountComponent()

    expect(wrapper.vm).toBeDefined()
  })

  it('Deve inicializar o componente com os valores padrão', () => {
    const wrapper = mountComponent()

    expect(wrapper.text()).toContain('deseja confirmar?')
  })

  it('Deve inicializar o componente com as props fornecidas', () => {
    const wrapper = mountComponent({ label: 'label customizado', value: true })

    expect(wrapper.text()).toContain('label customizado')
    expect(wrapper.vm.computedValue).toBe(true)
  })
})