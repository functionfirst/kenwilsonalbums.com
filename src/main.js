import DefaultLayout from '~/layouts/Default.vue'
import PartialLayout from '~/layouts/Partial.vue'
require('~/assets/css/style.sass')

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('Partial', PartialLayout)

  head.bodyAttrs = { class: 'font-sans' }
}