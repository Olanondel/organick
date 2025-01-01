<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="card-benefit">
    <img :src="icon" alt="" class="card-benefit__icon" />

    <h4 class="card-benefit__title">
      <span class="card-benefit__font card-benefit__font--title">
        {{ title }}
      </span>
    </h4>

    <p class="card-benefit__text">
      <span class="card-benefit__font card-benefit__font--text">
        {{ text }}
      </span>
    </p>
  </div>
</template>

<style scoped lang="scss">
.card-benefit {
  background-color: $color-white;
  padding: em(50) em(20) em(19);
  text-align: center;
  border-radius: em(30);

  &__icon {
    @include box(em(95));
    margin: 0 auto em(15);
  }

  &__title {
    margin-bottom: em(12);
    color: $color-blue-1;
  }

  &__font {
    &--title {
      font-size: em(25);
      line-height: em(30, 25);
      font-family: $font-family-roboto;
      font-weight: $font-weight-extra-bold;
    }

    &--text {
      font-size: em(18);
      line-height: em(30, 18);
    }
  }

  &__text {
    color: $color-grey-1;
  }
}
</style>
