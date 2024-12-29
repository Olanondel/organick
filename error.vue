<template>
  <CResize class="error">
    <LayoutHeader />

    <div class="error__view error-page">
      <UiPicture src="/images/error/bg.jpg" class="error-page__bg" />

      <div class="container container--md">
        <div class="error-page__content">
          <img
            src="/icons/404.svg"
            alt="404 error code"
            class="error-page__image error-page__image--code"
          />

          <h2 class="error-page__title">
            <span class="error-page__font error-page__font--title">
              Page not found
            </span>
          </h2>

          <p class="error-page__text">
            <span class="error-page__font error-page__font--text">
              The page you are looking for doesn't exist or has been moved
            </span>
          </p>

          <UiButton to="/" has-icon>Go to Homepage</UiButton>
        </div>
      </div>
    </div>

    <LayoutFooter />
  </CResize>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.error {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  &__view {
    flex-grow: 1;
  }
}

.error-page {
  position: relative;
  padding: em(214) 0;
  margin-bottom: em(130);

  &__bg {
    position: absolute;
    inset: 0;
    object-fit: cover;
  }

  &__content {
    position: relative;
    margin-left: auto;
    max-width: em(533);
  }

  &__image {
    &--code {
      width: em(502);
      height: em(219);
      margin: 0 auto;
    }
  }

  &__title {
    color: $color-blue-1;
    text-align: center;
  }

  &__font {
    &--title {
      font-size: em(70);
      line-height: em(82, 70);
      font-family: $font-family-roboto;
      font-weight: $font-weight-extra-bold;
    }

    &--text {
      font-size: em(18);
      line-height: em(30, 18);
      font-weight: $font-weight-semi-bold;
    }
  }

  &__text {
    color: $color-grey-1;
    margin-bottom: em(30);
    text-align: center;
  }
}
</style>
