<template>
  <Layout>
    <h1 class="font-serif leading-loose font-normal">Contact</h1>

    <div class="md:flex">
      <div class="md:max-w-xs leading-normal">
        <p>
          Ken Wilson continues to perform throughout Britain and beyond.
          If you would like Ken to appear at one of your events please use the contact details below.
        </p>

        <p class="mt-6 font-bold">
          Facebook
        </p>
  
        <p class="ml-4">
          <a href="https://www.facebook.com/profile.php?id=100014788714532" class="text-darker no-underline hover:underline" target="_blank">Ken Wilson</a>
        </p>

        <p class="mt-6 font-bold">
          Telephone
        </p>

        <p class="ml-4">
          <a href="tel:+447905466907" class="text-darker no-underline hover:underline">07905 466 907</a>
        </p>

        <p class="mt-6 font-bold">
          Email
        </p>

        <p class="ml-4">
          <a href="mailto:info@kenwilsonalbums.com" class="text-darker no-underline hover:underline">info@kenwilsonalbums.com</a>
        </p>
      </div>

      <div class="md:ml-24 md:w-1/3">
        <p class="mt-4 md:mt-0 mb-2 leading-normal font-bold">
          Please use the contact form below to send Ken a message.
        </p>

        <form 
          method="post"
          v-on:submit.prevent="handleSubmit"
          action="/success/"
        >
          <p hidden>
            <label>
              Don’t fill this out: <input name="botField" />
            </label>
          </p>

          <label for="name" class="block mb-1 cursor-pointer">Your name</label>
          <input
            type="text"
            id="name"
            name="name"
            v-model="formData.name"
            class="border border-dark py-2 px-3 rounded w-full"
            required
          >
          <span class="hidden invalid mt-1 text-xs">Your Name is required</span>

          <label for="email" class="mt-4 block mb-1 cursor-pointer">Your email</label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="formData.email"
            class="border border-dark py-2 px-3 rounded w-full"
            required
          >
          <span class="hidden invalid mt-1 text-xs">Email is required</span>

          <label for="telephone" class="mt-4 block mb-1 cursor-pointer">Telephone/Mobile</label>
          <input
            type="text"
            id="telephone"
            name="telephone"
            v-model="formData.telephone"
            class="border border-dark py-2 px-3 rounded w-full"
            required
          >
          <span class="hidden invalid mt-1 text-xs">Telephone is required</span>

          <div class="message-wrapper">
            <label for="message" class="mt-4 block mb-1 cursor-pointer">Message</label>
            <textarea
              name="message"
              class="border border-dark py-2 px-3 rounded w-full h-24"
              v-model="formData.message"
              required
            />
            <span class="hidden invalid mt-1 text-xs">Message is required</span>
          </div>

          <button type="submit" class="mt-4 btn hover:border-dark hover:text-dark">Send Message</button>
        </form>
      </div>
    </div>
  </Layout>
</template>

<style scoped>
label ~ input:invalid,
input:invalid,
textarea:invalid {
  color: salmon;
  border: 1px solid salmon
}

input:invalid + .invalid,
textarea:invalid + .invalid {
  color: salmon;
  display: block;
}

</style>

<script>
export default {
  metaInfo: {
    title: 'Contact Ken Wilson'
  },

  data() {
    return {
      validate: false,
      formData: {},
    }
  },

  methods: {
    // encode(data) {
    //   return Object.keys(data)
    //     .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    //     .join('&')
    // },

    handleSubmit(e) {
      fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: {
          ...this.formData,
        },
      })
      .then(() => this.$router.push('/success'))
      .catch(error => alert(error))
    }
  }
}
</script>
