<template>
  <Layout>
    <div class="leading-normal">
      <h1 class="font-serif leading-loose font-normal">Commissions</h1>

      <div class="flex-col-reverse flex md:flex-row">
        <div class="md:max-w-sm">
          <p class="my-2">I specialise in portratireu and am very happy to take on commission work and have availability to do so.</p>

          <p>
            Commission Work can be undertaken upon request (details of the work and costs to be agreed).
          </p>

          <p>
            Typical commission work might include:
          </p>
          
          <ul>
            <li>Anniversaries</li>
            <li>Family members</li>
          </ul>

          <p class="my-2">
            To commission you're own piece of art please get in touch below:
          </p>

          <p class="mt-4">
            <g-link to="/contact/" class="btn">Get in touch</g-link>
          </p>
        </div>
        <div class="md:ml-8">
          <g-image src="~/assets/images/commissions.jpg" width="620" alt="Samples of commissioned artwork" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Commission a piece of art by Ken Wilson'
  }
}
</script>
