<template>
  <Partial>
    <h1 class="leading-loose font-normal">Contact</h1>

    <div class="flex">
      <div class="max-w-xs leading-normal">
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

      <div class="ml-24 w-1/3">
        <p class="mb-2 leading-normal">
          Use the contact form below to send Ken a message.
        </p>

        <form 
          name="contact"
          method="post"
          v-on:submit.prevent="handleSubmit"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />

          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <label for="name" class="block mb-1 cursor-pointer">Your name</label>
          <input type="text" id="name" name="name" v-model="formData.name" class="border border-dark py-2 px-3 rounded w-full" />

          <label for="email" class="mt-4 block mb-1 cursor-pointer">Your email</label>
          <input type="email" id="email" name="email" v-model="formData.email" class="border border-dark py-2 px-3 rounded w-full" />

          <label for="telephone" class="mt-4 block mb-1 cursor-pointer">Telephone/Mobile</label>
          <input type="text" id="telephone" name="telephone" v-model="formData.telephone" class="border border-dark py-2 px-3 rounded w-full" />

          <div class="message-wrapper">
            <label for="message" class="mt-4 block mb-1 cursor-pointer">Message</label>
            <textarea name="message" class="border border-dark py-2 px-3 rounded w-full h-24" v-model="formData.message"></textarea>
          </div>

          <button type="submit" class="mt-8 inline-block border border-dark text-dark antialiased font-bold text-sm px-8 py-3 no-underline rounded-full">Send Message</button>
        </form>
      </div>
    </div>
  </Partial>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact Ken Wilson'
  },
  data() {
    return {
      formData: {},
    }
  },
  methods: {
  encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  },
  handleSubmit(e) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({
        'form-name': e.target.getAttribute('name'),
        ...this.formData,
      }),
    })
    .then(() => this.$router.push('/success'))
    .catch(error => alert(error))
  }
}
}
</script>
