<script setup>
defineProps({
  subtitle: {
    type: String,
    default: undefined,
  },

  title: {
    type: String,
    default: undefined,
  },

  theme: {
    type: String,
    default: 'default',
  },
});
</script>

<template>
  <div class="parts-head" :class="`parts-head--theme--${theme}`">
    <h3 v-if="subtitle" class="parts-head__subtitle">
      <span
        class="parts-head__font parts-head__font--subtitle"
        v-html="subtitle"
      />
    </h3>

    <h2 v-if="title" class="parts-head__title">
      <span class="parts-head__font parts-head__font--title" v-html="title" />
    </h2>
  </div>
</template>

<style scoped lang="scss">
.parts-head {
  $parent: &;

  &__title {
    color: $color-blue-1;
  }

  &__subtitle {
    color: $color-green-1;

    &:not(:last-child) {
      margin-bottom: em(8);
    }
  }

  &__font {
    &--subtitle {
      font-family: $font-family-yellowtail;
      font-size: em(36);
      line-height: em(49, 36);
    }

    &--title {
      font-family: $font-family-roboto;
      font-size: em(50);
      line-height: em(59, 50);
      font-weight: $font-weight-extra-bold;
    }
  }

  &--theme {
    &--default {
      #{$parent} {
        &__title {
          color: $color-blue-1;
        }

        &__subtitle {
          color: $color-green-1;
        }
      }
    }

    &--white {
      #{$parent} {
        &__title {
          color: $color-white;
        }
      }
    }
  }
}
</style>
