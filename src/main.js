import DefaultLayout from '~/layouts/Default.vue'
import HomepageLayout from '~/layouts/Homepage.vue'
require('~/assets/css/style.sass')
require('typeface-pacifico')

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('Homepage', HomepageLayout)

  head.bodyAttrs = { class: 'font-sans' }
}
