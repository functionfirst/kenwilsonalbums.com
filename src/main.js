import DefaultLayout from '~/layouts/Default.vue'
import HomepageLayout from '~/layouts/Homepage.vue'
import 'typeface-pacifico'
import '~/assets/css/style.sass'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('Homepage', HomepageLayout)

  head.bodyAttrs = { class: 'font-sans' }
}
