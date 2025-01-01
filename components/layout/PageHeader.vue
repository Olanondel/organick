<script setup>
const route = useRoute();

const data = computed(() => {
  return route.meta.pageHeader || {};
});
</script>

<template>
  <div class="layout-page-header">
    <UiPicture
      :src="data.image"
      class="layout-page-header__bg"
      width="1920"
      height="450"
      loading="eager"
      aria-hidden
    />

    <div class="layout-page-header__content">
      <h1 class="layout-page-header__title">
        <span class="layout-page-header__font layout-page-header__font--title">
          {{ data.title }}
        </span>
      </h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-page-header {
  padding: em(184) 0;
  position: relative;

  &__bg {
    position: absolute;
    inset: 0;
  }

  &__content {
    text-align: center;
    position: relative;
  }

  &__title {
    color: $color-blue-1;
  }

  &__font {
    &--title {
      font-size: em(70);
      line-height: em(82, 70);
      font-family: $font-family-roboto;
      font-weight: $font-weight-extra-bold;
    }
  }
}
</style>
