<template>
  <Layout>
    <h1
      class="font-normal leading-tight mb-4"
    >Icons of Teesside, Vin Garbutt and the Transporter Bridge</h1>

    <div class="md:flex">
      <div class="leading-normal flex-1 md:mr-8">
        <g-image class="w-full" src="~/images/transporter-landscape.jpg" width="600" />

        <p class="text-xl italic my-4">
          It is a year ago that I merged two of my sketches together.
          <strong>Vin Garbutt</strong> and the
          <strong>Transporter Bridge</strong>, both icons of Teesside and created a canvas print entitled
          <strong>Voice of the Tees</strong>.
        </p>

        <p
          class="my-4"
        >I produced the print and made it available to purchase, to help raise money for the Cardiology Department of James Cook Hospital in Middlesbrough.</p>

        <p
          class="my-4"
        >Vin spent a lot of time, being looked after by our wonderful NHS nurses, doctors and staff, at James Cook Hospital, and over the past couple years, I have also required the services of these wonderful people.</p>

        <h2>South Cleveland Heart Fund Presentation</h2>

        <p class="my-4">
          On September 4th 2020, Pat Garbutt, Chris and I, met with Dr Adrian Davies (chairman) and other members of the
          <em>South Cleveland Heart Fund</em>,
          to present them with a cheque for
          <strong>£2,064.45</strong>, from the sale of the
          <strong>Voice of the Tees</strong> canvas prints.
          <em>Thank you all!</em>
        </p>

        <p
          class="my-4"
        >The presentation took place in the shadow of the Transporter Bridge, due to the ongoing restrictions in place at James Cook Hospital.</p>

        <p class="my-4">
          Thank you,
          <br />
          <em>Ken</em>
        </p>
      </div>
      <div class="md:w-2/5 bg-white p-4 md:p-8 shadow-md">
        <h3 class="mb-4 font-semibold">Voice of the Tees</h3>
        <g-image class="w-full" src="~/images/voiceofthetees.jpg" width="400" />

        <p
          class="my-4 leading-tight"
        >Voice of the Tees is available for you to purchase in a variety of formats below.</p>

        <paypal-art-button :products="products" :types="types" :item="item" />
      </div>
    </div>
  </Layout>
</template>

<script>
import products from "~/data/vin";
import types from "~/data/vinTypes";
import PaypalArtButton from "~/components/PaypalArtButton";

export default {
  components: {
    PaypalArtButton,
  },

  data() {
    return {
      item: {
        title: "Voice of the Tees",
      },

      images: [
        "~/images/voiceofthetees.jpg",
        "~/images/voiceofthetees_framed.jpg",
      ],

      products,
      types,
    };
  },
};
</script>
