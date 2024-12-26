<script setup></script>

<template>
  <div class="pages-picture">
    <div class="container">
      <h1 class="pages-picture__title">
        <span class="pages-picture__font pages-picture__font--picture">
          Picture component ex:
        </span>
      </h1>

      <div class="pages-picture__wrapper pages-picture__wrapper--image">
        <UiPicture />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pages-picture {
  &__title {
  }

  &__font {
    &--picture {
    }
  }

  &__wrapper {
    &--image {
      width: 800px;
      height: 950px;
    }
  }
}
</style>
