<template>
  <navigation/>
  <Header />
  <Application />
  <OurTeam />
  <FAQs />
  <ContactUs />
  <footer/>
</template>

<script>

import Header from '../components/Inc/Header.vue';
import Application from '../components/Inc/Application.vue';
import OurTeam from '../components/Inc/OurTeam.vue'
import FAQs from '~~/components/Inc/FAQs.vue';
import ContactUs from '~~/components/Inc/ContactUs.vue';
import Footer from '~~/components/Inc/Footer.vue';
import Navigation from '~~/components/Navigation.vue';

export default {
  name: 'HomePage',
  components: {
    Header,
    Application,
    OurTeam,
    FAQs,
    ContactUs,
    Footer,
    Navigation,
  }
}
</script>