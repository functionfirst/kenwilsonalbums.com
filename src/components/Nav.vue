<template>
  <ul class="md:flex list-reset border-t border-dark md:border-none">
    <li v-for="(link, index) in links" :key="index">
      <g-link :to="link.url" :class="linkCss">{{ link.title }}</g-link>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      links: [{
        url: '/about/',
        title: 'About'
      },{
        url: '/albums/',
        title: 'Albums'
      },{
        url: '/gigs/',
        title: 'Gigs'
      },{
        url: '/art/',
        title: 'Art'
      },{
        url: '/commissions/',
        title: 'Commissions'
      },{
        url: '/contact',
        title: 'Contact'
      }],
      linkCss: 'md:rounded md:border-none p-3 border-b border-dark block text-base no-underline hover:text-lighter no-underline md:ml-4 md:ml-8 hover:underline'
    }
  }
}
</script>

