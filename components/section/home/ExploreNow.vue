<script setup>
const handleButtonClick = () => {
  const targetElement = document.querySelector('.section-products');

  targetElement.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <div class="section-explore-now">
    <picture class="section-explore-now__image">
      <source
        srcset="
          /images/explore-now/image.avif    1x,
          /images/explore-now/image@2x.avif 2x,
          /images/explore-now/image@3x.avif 3x
        "
        type="image/avif"
      />

      <source
        srcset="
          /images/explore-now/image.webp    1x,
          /images/explore-now/image@2x.webp 2x,
          /images/explore-now/image@3x.webp 3x
        "
        type="image/avif"
      />

      <img
        src="/images/explore-now/image.jpg"
        srcset="
          /images/explore-now/image.jpg    1x,
          /images/explore-now/image@2x.jpg 2x
        "
        alt="Served with fresh fruit and tea."
      />
    </picture>

    <img
      v-for="pattern in 5"
      :key="pattern"
      :src="`/images/explore-now/patterns/${pattern}.svg`"
      alt=""
      aria-hidden="true"
      :class="`section-explore-now__pattern section-explore-now__pattern--${pattern}`"
    />

    <div class="container container--md">
      <div class="section-explore-now__content">
        <div class="section-explore-now__subtitle">
          <span
            class="section-explore-now__font section-explore-now__font--subtitle"
          >
            100% Natural Food
          </span>
        </div>

        <h2 class="section-explore-now__title">
          <span
            class="section-explore-now__font section-explore-now__font--title"
          >
            Choose the best<br />
            healthier way<br />
            of life
          </span>
        </h2>

        <UiButton theme="yellow" @click="handleButtonClick"
          >Explore Now</UiButton
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-explore-now {
  padding: em(247) 0;
  background-color: #f1eff0;
  min-height: em(898);
  overflow: hidden;
  position: relative;

  &__content {
    position: relative;
  }

  &__subtitle {
    color: #68a47f;
    margin-bottom: em(8);
  }

  &__font {
    &--subtitle {
      font-family: $font-family-yellowtail;
      font-size: em(36);
      line-height: em(49, 36);
    }

    &--title {
      font-size: em(70);
      font-family: $font-family-roboto;
      font-weight: $font-weight-extra-bold;
    }
  }

  &__title {
    margin-bottom: em(23);
    color: $color-blue-1;
  }

  &__image {
    object-fit: cover;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  &__pattern {
    position: absolute;

    &--1 {
      width: em(254);
      height: em(290);
      top: em(19);
      left: em(-4);
    }

    &--2 {
      width: em(180);
      height: em(174);
      top: em(63);
      left: em(772);
    }

    &--3 {
      width: em(451);
      height: em(368);
      top: em(-77);
      right: em(-158);
    }

    &--4 {
      width: em(468);
      height: em(548);
      bottom: em(-208);
      left: em(-184);
    }

    &--5 {
      width: em(231);
      height: em(290);
      bottom: em(2);
      right: em(-14);
    }
  }
}
</style>
