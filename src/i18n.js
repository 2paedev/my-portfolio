import getBrowserLocale from '@/shared/util/i18n/get-browser-locale';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { supportedLocalesInclude } from './shared/util/i18n/supported-locales';

Vue.use(VueI18n);

function getStartingLocale() {
  const browserLocale = getBrowserLocale({ countryCodeOnly: true });

  if (supportedLocalesInclude(browserLocale)) {
    return browserLocale;
  } else {
    return process.env.VUE_APP_I18N_LOCALE || 'es';
  }
}

const i18n = new VueI18n({
  locale: getStartingLocale(),
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: {}
});

export function loadLocaleMessagesAsync(locale) {
  const loadedLanguages = [];

  if (loadedLanguages.length > 0 && i18n.locale === locale) {
    return Promise.resolve(locale);
  }

  if (loadedLanguages.includes(locale)) {
    i18n.locale = locale;
    return Promise.resolve(locale);
  }

  // If the language hasn't been loaded yet
  return import(
    /* webpackChunkName: "locale-[request]" */ `@/locales/${locale}.json`
  ).then(messages => {
    i18n.setLocaleMessage(locale, messages.default);
    loadedLanguages.push(locale);
    i18n.locale = locale;
    return Promise.resolve(locale);
  });
}

export default i18n;
