<template>
  <div>
    <!-- <Navigation />
    <Header />
    <Application />
    <OurTeam />
    <Nuxt />
    <FAQs />
    <ContactUs />
    <Footer /> -->
  </div>
</template>

<script>

import Navigation from '../components/Navigation.vue';
import Header from '../components/Inc/Header.vue';
import Application from '../components/Inc/Application.vue';
import OurTeam from '../components/Inc/OurTeam.vue'
import FAQs from '../components/Inc/FAQs.vue';
import ContactUs from '../components/Inc/ContactUs.vue'
import Footer from '../components/Inc/Footer.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Navigation,
    Header,
    Application,
    OurTeam,
    FAQs,
    ContactUs,
    Footer,
  }
}
</script>
