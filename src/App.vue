<template>
  <div class="app">
    <div class="locale-switcher">
      <select :value="$i18n.locale" @change.prevent="changeLocale">
        <option
          :value="locale.code"
          v-for="locale in locales"
          :key="locale.code"
          >{{ locale.name }}</option
        >
      </select>
    </div>
    <h1 v-t="'app.title'" />
    <h1>{{ $t('about.title') }}</h1>
    <i18n path="footer" tag="p" class="footer"></i18n>
    <p class="user-greeting">{{ $t('user_greeting', { name: 'Adam' }) }}</p>
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
import { getSupportedLocales } from '@/shared/util/i18n/supported-locales';
import i18n, { loadLocaleMessagesAsync } from '@/i18n';
import { setDocumentLang, setDocumentTitle } from '@/shared/util/i18n/document';
import { globalConstants } from '@/shared/constants/index';

export default {
  name: `App`,
  components: {
    PersonalInfo,
    Skills,
    Projects,
    Hobbies
  },
  mounted() {
    const locale = globalConstants.DEFAULT_LANG;
    this.loadLocale(locale);
  },
  data: () => ({ locales: getSupportedLocales() }),
  methods: {
    changeLocale(e) {
      const locale = e.target.value;
      this.loadLocale(locale);
    },
    loadLocale(locale) {
      loadLocaleMessagesAsync(locale).then(() => {
        setDocumentLang(locale);
        setDocumentTitle(i18n.t('app.title'));
      });
    }
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
