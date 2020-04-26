import { mount } from '@vue/test-utils'
import RestaurantCard from '~/components/RestaurantCard'

describe('RestaurantCard', () => {
  const props = {
    id: 0,
    name: 'nombre',
    description: 'descripcion',
    text: 'Texto',
    slug: 'slug',
    category: 'category',
    city: 'Ciudad',
    address: 'direccion',
    likes: 0,
    image: 'imagen.jpg'
  }

  const wrapper = mount(RestaurantCard, { propsData: props })
    test('is mounted', () => {
      expect(wrapper.isVueInstance()).toBe(true)
    })

    test('is rendering a restaurant', () => {
      expect(wrapper.props().name).toBe('nombre')
      expect(wrapper.props().description).toBe('descripcion')
    })
})
