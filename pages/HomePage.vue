<template>
  <Header />
  <Application />
  <OurTeam />
  <Footer />
</template>

<script>

import Header from '../components/Inc/Header.vue';
import Application from '../components/Inc/Application.vue';
import OurTeam from '../components/Inc/OurTeam.vue'

export default {
  name: 'HomePage',
  components: {
    Header,
    Application,
    OurTeam,
  }
}
</script>