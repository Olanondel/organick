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
  <div class="card-offer-simple">
    <img
      :src="image"
      alt=""
      class="card-offer-simple__image"
      width="335"
      height="314"
    />

    <h4 class="card-offer-simple__title">
      <span class="card-offer-simple__font card-offer-simple__font--title">
        {{ title }}
      </span>
    </h4>
  </div>
</template>

<style scoped lang="scss">
.card-offer-simple {
  &__image {
    max-width: 100%;
    height: auto;
    margin-bottom: em(24);
    border-radius: em(30);
    overflow: hidden;
  }

  &__title {
    color: $color-white;
    text-align: center;
  }

  &__font {
    &--title {
      font-size: em(25);
      line-height: em(30, 25);
      font-family: $font-family-roboto;
      font-weight: $font-weight-medium;
    }
  }
}
</style>
