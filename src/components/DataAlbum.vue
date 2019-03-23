<script>
import Albums from '~/data/Albums.yml'

export default {
  computed: {
    albums() {
      return Albums.items
    },
    album() {
      return Albums.items.find(item => item.url == this.$route.fullPath)
    }
  },
  render() {
    return this.$scopedSlots.default({
      album: this.album,
      albums: this.albums
    })
  } 
}
</script>
