<script setup>
defineProps({
  title: {
    type: String,
    default: undefined,
  },

  image: {
    type: String,
    default: undefined,
  },
});
</script>

<template>
  <div class="card-gallery">
    <img :src="image" alt="" class="card-gallery__image" />

    <div class="card-gallery__content">
      <h4 class="card-gallery__title">
        <span class="card-gallery__font card-gallery__font--title">
          {{ title }}
        </span>
      </h4>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-gallery {
  position: relative;
  padding: em(244) em(100);

  &__image {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
  }

  &__content {
    position: relative;
    padding: em(33) em(83);
    background-color: $color-white;
    text-align: center;
    border-radius: em(20);
  }

  &__title {
    color: $color-blue-1;
  }

  &__font {
    &--title {
      font-family: $font-family-roboto;
      font-weight: $font-weight-medium;
      font-size: em(25);
      line-height: em(29, 25);
    }
  }
}
</style>
