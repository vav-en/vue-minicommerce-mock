import { shallowMount } from '@vue/test-utils'
import store from "@/store";
import ProductList from '@/components/ProductList.vue'

describe('ProductList.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'helloo propss'
    const wrapper = shallowMount(ProductList, {
      propsData: { msg },
      stubs: ['router-link']
    })
    expect(wrapper.text()).toMatch(msg)
  })
  
})
