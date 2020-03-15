<template>
  <div class="personal-info">
    <!-- <section class="personal-info__languages">
      <span>Español</span>
      <span>Francés</span>
      <span>Inglés</span>
    </section> -->
    <section class="personal-info__data">
      <h1
        v-if="showGreeting"
        class="personal-info__data--greeting"
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-duration="3000"
      >
        ¡Hola!
      </h1>
      <p
        v-if="showDescription"
        class="personal-info__data--description"
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-duration="3000"
      >
        Mi nombre es <b>Diego Martínez Ayuso</b>, desarrollador fullstack en
        <i>España, Alicante</i>. Programar es mi pasión. Este es mi portfolio y
        CV.
      </p>
      <div class="personal-info__data--quotes">
        <span
          v-if="showQuote"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="3000"
        >
          ¡Hazlo fácil!
        </span>
        <span
          v-if="showQuote"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="3000"
        >
          Make it easy!
        </span>
        <span
          v-if="showQuote"
          data-aos="zoom-in"
          data-aos-delay="700"
          data-aos-duration="3000"
        >
          Rendez-le facile!
        </span>
      </div>
    </section>
    <img
      v-if="showPic"
      class="personal-info__pic"
      data-aos="zoom-out"
      data-aos-delay="400"
      data-aos-duration="3000"
      src="../assets/images/my-photo-removebg.png"
    />
  </div>
</template>

<script>
export default {
  name: `PersonalInfo`,
  data: function() {
    return {
      showGreeting: false,
      showDescription: false,
      showQuote: false,
      showPic: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.showGreeting = true;
    }, 1000);

    setTimeout(() => {
      this.showDescription = true;
    }, 2000);

    setTimeout(() => {
      this.showQuote = true;
    }, 3000);

    setTimeout(() => {
      this.showPic = true;
    }, 4000);
  }
};
</script>

<style lang="scss">
.personal-info {
  height: 100vh;
  display: flex;
  flex: 2 1 auto;
  flex-direction: row;

  &__data {
    width: 40vw;
    display: flex;
    margin-left: 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    z-index: 100;

    &--greeting {
      font-size: 10rem;
      color: var(--blue-soft-tint);
    }
    &--description {
      font-size: 4rem;
      b {
        font-size: 5rem;
      }
    }
    &--quotes {
      font-size: 4rem;
      color: var(--blue-soft);
    }
  }
  &__pic {
    right: 0;
    min-height: 100vh;
    max-height: 100vh;
    position: absolute;
    z-index: 1;
  }
}
</style>
