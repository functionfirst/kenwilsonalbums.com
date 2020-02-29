<template>
  <Layout>
    <h1 class="font-thin leading-loose text-6xl">Voice of the Tees</h1>

    <div class="md:flex">
      <div class="leading-normal flex-1 mr-8">
        <p class="mb-4 text-xl font-medium">
          Two icons of Teesside
          <em>Vin Garbutt</em> and the
          <em>Transporter Bridge</em>.
        </p>

        <p class="text-xl italic">
          I have merged two of my sketches together to create this 24 x 16 (61cm x 41cm) canvas print -
          <em>Voice of the Tees</em>
        </p>

        <p class="my-4">
          I have spoken to Vin's wife Pat, and with her blessing we have agreed to make this available as a
          <span
            class="font-bold"
          >Limited edition</span> of 250 copies! On a
          <em>first come first served basis</em>.
        </p>

        <p class="my-4">
          Lots of you will know that Vin spent a lot of time, being looked after by our wonderful NHS nurses, doctors
          and staff, at the Cardiology Department of James Cook Hospital in Middlesbrough. Over the past couple years,
          I have also needed the services of these wonderful people. So, again with Pats blessing I will be
          donating 50% of all profits from the sale of these prints, to the
          <em>Cardiology Department</em> of the James Cook Hospital!
        </p>

        <p class="my-4">
          If, or hopefully
          <em>when</em> we reach the 250th copy - I will produce 1 no. Larger copy of the print with a card
          of all the names of the 250 people who purchased a copy, and along with a Cheque, Pat and I will present
          it to the Cardiology Department of the James Cook Hospital.
        </p>

        <p
          class="my-4"
        >Please allow Two – Three weeks for delivery, from the day you order your copy.</p>

        <p class="my-4">
          Thank you,
          <br />
          <em>Ken Wilson</em>
        </p>
      </div>
      <div class="md:w-1/2">
        <slider :images="images" />

        <paypal-art-button :products="products" :types="types" :item="item" />
      </div>
    </div>
  </Layout>
</template>

<script>
import products from "~/data/vin";
import types from "~/data/vinTypes";
import PaypalArtButton from "~/components/PaypalArtButton";
import Slider from "~/components/Slider";

export default {
  components: {
    PaypalArtButton,
    Slider
  },

  data() {
    return {
      item: {
        title: "Voice of the Tees"
      },

      images: [
        "~/images/voiceofthetees.jpg",
        "~/images/voiceofthetees_framed.jpg"
      ],

      products,
      types
    };
  }
};
</script>
