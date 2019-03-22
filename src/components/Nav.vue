<template>
  <ul class="flex list-reset">
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
      linkCss: 'py-4 px-6 block text-lighter no-underline hover:text-dark'
    }
  }
}
</script>

