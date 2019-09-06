<template>
  <div>
    <template v-for="({ node }, index) in $static.gigs.edges">
      <h2
        class="leading-loose font-thin"
        v-if="index === 0" :key="`title${node.id}`"
      >
        {{ format(node.dateStart, 'YYYY') }}
      </h2>

      <template v-if="$static.gigs.edges[index - 1]">
        <h2
          v-if="format($static.gigs.edges[index - 1].node.dateStart, 'YYYY') !== format(node.dateStart, 'YYYY')"
          class="leading-loose font-thin" :key="`title${node.id}`"
        >
          {{ format(node.dateStart, 'YYYY') }}
        </h2>
      </template>

      <div
        :key="node.id"
        class="md:flex block border-b border-base p-4 justify-between items-center"
      >
        <div>
          <span class="font-bold">{{ node.title }}</span>
          <span class="font-thin" v-if="node.location">, {{ node.location }}</span>
        </div>

        <div class="mt-2 md:m-0 text-right" v-if="node.dateEnd">
          {{ format(node.dateStart, 'dddd, Do') }}
          to
          {{ format(node.dateEnd, 'dddd, Do MMMM')}}<br>

          <GigType :type="node.type" />
        </div>
        <div class="mt-2 md:m-0 text-right" v-else>
          {{ format(node.dateStart, 'dddd, Do MMMM') }}<br>

          <GigType :type="node.type" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { format } from 'date-fns'
import GigType from '~/components/GigType'

export default {
  components: {
    GigType
  },
  methods: {
    format(d, str) {
      return format(d, str);
    }
  }
}
</script>

<static-query>
  query Gigs {
    gigs: allGigsPost(sortBy: "dateStart", order: ASC) {
      edges {
        node {
          id
          location
          title
          dateStart
          dateEnd
          type
        }
      }
    }
  }
</static-query>
