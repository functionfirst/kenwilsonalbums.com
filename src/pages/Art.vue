<template>
  <Layout>
    <h1 class="leading-loose font-normal">Art</h1>

    <h2 class="leading-normal font-normal my-4">Canvas Sizes &amp; Costs</h2>

    <table class="border border-dark w-full">
        <thead>
            <tr class="bg-darker text-lighter border border-darker">
                <td class="p-2">Size</td>
                <td class="p-2">Dimensions</td>
                <td class="p-2">Type</td>
                <td class="p-2">Price</td>
                <td class="p-2">Orientation</td>
            </tr>
        </thead>
        <tbody>
            <tr class="border border-dark bg-base">
                <td class="p-2">A4</td>
                <td class="p-2">12" x 8"</td>
                <td class="p-2">Poster Print</td>
                <td class="p-2">(£15) + P&amp;P </td>
                <td class="p-2">Portrait &amp; Landscape</td>
            </tr>
            <tr class="border border-dark">
                <td class="p-2">A3</td>
                <td class="p-2">16" x 12"</td>
                <td class="p-2">Poster Print</td>
                <td class="p-2">£25 + P&amp;P</td>
                <td class="p-2">Portrait &amp; Landscape</td>
            </tr>
            <tr class="border border-dark">
                <td class="p-2">A3</td>
                <td class="p-2">16" x 12"</td>
                <td class="p-2">Canvas Print</td>
                <td class="p-2">£50 + P&amp;P</td>
                <td class="p-2">Portrait &amp; Landscape</td>
            </tr>
            <tr class="border border-dark">
                <td class="p-2"></td>
                <td class="p-2">30" x 20"</td>
                <td class="p-2">Canvas Print</td>
                <td class="p-2">£85 + P&amp;P</td>
                <td class="p-2">Portrait &amp; Landscape</td>
            </tr>
        </tbody>
    </table>
    
    <p class="mt-4">
        P&amp;P – UK, EU, USA+CAN, AUS 
    </p>

  </Layout>
</template>


<script>
export default {
  metaInfo: {
    title: 'Pencil Art and Portraits by Ken Wilson'
  }
}
</script>
