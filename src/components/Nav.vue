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
      linkCss: 'rounded p-2 block text-base no-underline hover:text-lighter no-underline ml-4 md:ml-8 hover:underline'
    }
  }
}
</script>

