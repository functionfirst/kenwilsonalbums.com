<template>
  <Layout>
    <h1 class="font-serif font-thin leading-loose text-6xl">Voice of the Tees</h1>

    <p class="mb-4 text-lg">
      Two icons of Teesside <em>Vin Garbutt</em> and the <em>Transporter Bridge</em>.
    </p>

    <div class="flex">
      <div class="mb-4 w-1/3">
        <g-image
          src="/assets/static/voiceofthetees.jpg"
          width="350"
        />
      </div>
      <div class="leading-normal w-2/3">
        <p class="my-4">
          I have merged two of my sketches together to create this 18 x 16 (46cm x 41cm) canvas print - <em>Voice of the Tees</em>
        </p>

        <p class="my-4">
          I have spoken to Vin's wife Pat, and with her blessing we have agreed to make this available as a
          <span class="font-bold">Limited edition</span> of 250 copies! On a <em>first come first served basis</em>.
        </p>

        <p class="my-4">
          Lots of you will know that Vin spent a lot of time, being looked after by our wonderful NHS nurses, doctors
          and staff, at the Cardiology Department of James Cook Hospital in Middlesbrough. Over the past couple years,
          I have also needed the services of these wonderful people. So, again with Pats blessing I have decided to
          donate 50% of all profits from the sale of these prints, to the <em>Cardiology Department</em> of the James Cook Hospital!
        </p>

        <p class="my-4">
          If, or hopefully when we reach the 250th copy – I will produce 1 no. Larger copy of the print with a card
          of all the names of the 250 people who purchased a copy, and along with a Cheque, Pat and I will present
          it to the Cardiology Department of the James Cook Hospital.
        </p>

        <p class="my-4">
          Please allow Two – Three weeks for delivery, from the day you order your copy. Thank you,<br>
          Ken Wilson
        </p>

        <paypal-tees-button />
      </div>
    </div>
  </Layout>
</template>

<script>
import PaypalTeesButton from '~/components/PaypalTeesButton'

export default {
  components: {
    PaypalTeesButton
  }
}
</script>
