<template>
  <footer class="py-12 text-lighter text-center leading-loose">
    <p>Copyright &copy; {{ year }} Ken Wilson. All rights reserved.</p>

		<p>
			Site by <a class="text-light no-underline hover:text-dark" href="http://functionfirst.co.uk">functionfirst.co.uk</a>
		</p>
  </footer>
</template>

<script>
export default {
	computed: {
		year() {
			return new Date().getFullYear();
		}
	}

}
</script>
