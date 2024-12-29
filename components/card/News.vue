<script setup>
defineProps({
  image: {
    type: String,
    default: undefined,
  },

  title: {
    type: String,
    default: undefined,
  },

  date: {
    type: String,
    default: undefined,
  },

  admin: {
    type: String,
    default: undefined,
  },

  text: {
    type: String,
    default: undefined,
  },
});
</script>

<template>
  <div class="card-news">
    <img :src="image" alt="" class="card-news__image" loading="lazy" />

    <div class="card-news__date">
      <span class="card-news__font card-news__font--date"> {{ date }} </span>
    </div>

    <div class="card-news__content">
      <div class="card-news__admin">
        <img
          src="/icons/user.svg"
          alt=""
          class="card-news__icon card-news__icon--admin"
        />

        <span class="card-news__font card-news__font--admin">
          {{ admin }}
        </span>
      </div>

      <h4 class="card-news__title">
        <span class="card-news__font card-news__font--title">
          {{ title }}
        </span>
      </h4>

      <p class="card-news__text">
        <span class="card-news__font card-news__font--text">
          {{ text }}
        </span>
      </p>

      <UiButton theme="yellow" has-icon>Read More</UiButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-news {
  position: relative;
  padding: em(306) em(32) 0;
  border-radius: em(30);

  &__image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: calc(100% - #{em(65)});
    object-fit: cover;
    border-radius: em(30);
  }

  &__date {
    position: absolute;
    top: em(43);
    left: em(32);
    border-radius: 50%;
    background-color: $color-white;
    @include box(em(82));
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: $color-blue-1;
  }

  &__font {
    &--date {
      font-family: $font-family-roboto;
      font-size: em(25);
      line-height: em(25, 25);
      font-weight: $font-weight-extra-bold;
    }

    &--admin {
      font-size: em(18);
      font-family: $font-family-roboto;
      line-height: em(21, 18);
    }

    &--title {
      font-size: em(25);
      line-height: em(29, 25);
      font-weight: $font-weight-extra-bold;
      font-family: $font-family-roboto;
    }

    &--text {
      font-size: em(18);
      line-height: em(31, 18);
    }
  }

  &__content {
    background-color: $color-white;
    border-radius: em(31) em(34) em(30) em(30);
    position: relative;
    padding: em(46) em(57) em(60) em(57);
    box-shadow: 0 20px 35px 0 rgba(167, 167, 167, 0.25);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
  }

  &__admin {
    display: flex;
    align-items: center;
    gap: em(8);
    margin-bottom: em(16);
    color: $color-blue-1;
  }

  &__icon {
    &--admin {
    }
  }

  &__title {
    margin-bottom: em(2);
    color: $color-blue-1;
  }

  &__text {
    color: $color-grey-1;
    margin-bottom: em(15);
    flex-grow: 1;
  }
}
</style>
