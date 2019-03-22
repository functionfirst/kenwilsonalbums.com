<template>
  <Layout>
    <h1 class="leading-loose font-normal">About Ken Wilson</h1>

    <div class="md:flex" v-for="(item, index) in About.items" :key="index">
        <div class="md:w-32">
            <h2
                v-if="item.title"
                class="leading-normal font-normal mr-12 leading-normal my-2 text-dark"
            >
                {{ item.title }}
            </h2>
        </div>
        <div>
            <p class="leading-normal my-4 max-w-sm">
                <span v-html="item.description"/>
            </p>
        </div>
    </div>
<!-- 
    <div class="md:flex">
        <div class="md:w-32">
            <h2 class="leading-normal font-normal mr-12 leading-normal my-2 text-dark">Music</h2>
        </div>
        <div>
            <p class="leading-normal my-4 max-w-sm">
                Born in Billingham Teesside in nineteen sixty, one of eight siblings, five brothers and three sisters. Sadly
                one of our sisters died in infancy. I attended school in Billingham, where I developed a passion for sports
                and art, which continued until my early twenties. I became involved in the folk scene in the mid 1970`s
                and along with my siblings, The Wilson Family, frequented folk clubs and festivals throughout Great
                Britain and Europe, producing several albums on the way. Due to this and my work and family
                commitments art work took a back seat at this point.
            </p>
        
            <p class="leading-normal my-4 max-w-sm">
                I have thoroughly enjoyed being part of the folk scene for the past forty years, both within the family
                group and also as a solo performer. During that time I/we have performed at The Royal Albert Hall in
                2011 as part of the BBC Proms. We have also worked and performed with Sting on “The Last Ship” project, which included a trip to New York to launch the CD and perform at eleven shows at the Public
                Theatre. In 2017 The Wilson Family were awarded the prestigious English Folk Dance and Song
                Society`s Gold Badge for services to the folk scene. In 2017 I also released an album named "Here`s a
                Health to the Company" with my close friend and collaberator Jim McFarland, whom I had been singing
                with since 2013. I have released 2 solo albums, the first being "Not Before Time" in 2007, in 2018 I
                released my CD "Portraits" which has been well received, with great reviews.
            </p>
        </div>
    </div>

    <div class="md:flex">
        <div class="md:w-32">
            <h2 class="leading-normal font-normal mr-12 leading-normal my-2 text-dark">Artwork</h2>
        </div>
        <div>
            <p class="leading-normal my-4 max-w-sm">
                In 2012 I began to have health problems, which resulted in me having a pacemaker fitted in 2013.
                However, my health continued to deteriorate, resulting in my having to spend some time on sick leave
                from work. <span class="italic">A further operation in 2018 has led to an improvement in my health.</span>
            </p>

            <p class="leading-normal my-4 max-w-sm">
                It was during this period that I began to sketch again after thirty five years. At first, drawing family
                members, then portraits of people on the folk scene. I have carried on doing this, and have now started to
                sketch a wide range of subjects, including specific comissions, all of which have been very well
                received. Most of my past and future artwork can be found on this site and is available to purchase.
            </p>

            <p>
                Cheers,
            </p>

            <p>
                Ken.
            </p>
        </div>
    </div> -->
  </Layout>
</template>

<script>
import About from '~/data/About.yml'

export default {
    computed: {
    About() {
        return About
    }
    },
  metaInfo: {
    title: 'About Ken Wilson'
  }
}
</script>
