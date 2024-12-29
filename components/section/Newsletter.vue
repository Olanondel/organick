<script setup></script>

<template>
  <section class="section-newsletter">
    <div class="container container--md">
      <div class="section-newsletter__poster">
        <UiPicture
          src="images/newsletter/newsletter.jpg"
          class="section-newsletter__bg"
          width="1400"
          height="323"
          aria-hidden
        />

        <div class="section-newsletter__content">
          <h2 class="section-newsletter__title">
            <span
              class="section-newsletter__font section-newsletter__font--title"
            >
              Subscribe to our Newsletter
            </span>
          </h2>

          <form class="section-newsletter__form" @submit.prevent>
            <input
              type="email"
              placeholder="Your Email Address"
              class="section-newsletter__field"
            />

            <UiButton type="submit">Subscribe</UiButton>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-newsletter {
  &__poster {
    position: relative;
    border-radius: em(30);
    overflow: hidden;
    padding: em(105) em(71);
  }

  &__bg {
    position: absolute;
    inset: 0;
    object-fit: cover;
    object-position: center;
  }

  &__content {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    max-width: em(357);
    color: $color-white;
  }

  &__font {
    &--title {
      font-family: $font-family-roboto;
      font-size: em(50);
      line-height: em(56, 50);
      font-weight: $font-weight-extra-bold;
    }
  }

  &__form {
    display: flex;
    gap: em(6);
  }

  &__field {
    background-color: $color-white;
    padding: em(28, 18) em(23, 18) em(31, 18);
    border-radius: em(16, 18);
    font-family: $font-family-roboto;
    font-size: em(18);
    line-height: em(21, 18);
    font-style: italic;

    @include media-breakpoint-up(sm) {
      min-width: em(349);
    }

    &::placeholder {
      color: #ababab;
    }
  }
}
</style>
