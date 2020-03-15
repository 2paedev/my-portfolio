<template>
  <div class="app">
    <section class="app__block--no-margin">
      <personal-info></personal-info>
    </section>

    <section
      class="app__block"
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="150"
      data-aos-duration="1300"
    >
      <skills></skills>
    </section>

    <section
      class="app__block"
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="150"
      data-aos-duration="1300"
    >
      <projects></projects>
    </section>

    <section
      class="app__block"
      data-aos="slide-up"
      data-aos-offset="300"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <hobbies></hobbies>
    </section>
  </div>
</template>

<script>
import PersonalInfo from './components/PersonalInfo.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Hobbies from './components/Hobbies.vue';

export default {
  name: `App`,
  components: {
    PersonalInfo,
    Skills,
    Projects,
    Hobbies
  }
};
</script>

<style lang="scss" scoped>
.app {
  &__block {
    margin: 15rem;
    &--no-margin {
      margin: 0;
    }
  }
}
</style>
