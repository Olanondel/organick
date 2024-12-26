<script setup></script>

<template>
  <div class="card-review">
    <img src="/images/customer.png" alt="" class="card-review__image" />

    <ul class="card-review__rating">
      <li
        v-for="num in 5"
        :key="num"
        class="card-review__item card-review__item--rating"
      >
        <img src="/icons/star.svg" alt="" />
      </li>
    </ul>

    <p class="card-review__comment">
      <span class="card-review__font card-review__font--comment">
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been.
      </span>
    </p>

    <div class="card-review__name">
      <span class="card-review__font card-review__font--name">
        Sara Taylor
      </span>
    </div>

    <div class="card-review__position">
      <span class="card-review__font card-review__font--position">
        Consumer
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-review {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fcfcfc;

  &__image {
    @include box(em(115));
    margin-bottom: em(20);
  }

  &__rating {
    display: flex;
    gap: em(3);
    margin-bottom: em(25);
  }

  &__comment {
    margin-bottom: em(20);
    color: $color-grey-1;
  }

  &__font {
    &--comment {
      font-size: em(18);
      line-height: em(30, 18);
    }

    &--name {
      font-family: $font-family-roboto;
      font-size: em(25);
      line-height: em(29, 25);
      font-weight: $font-weight-semi-bold;
    }

    &--position {
      font-size: em(15);
      line-height: em(25, 15);
    }
  }

  &__name {
    color: $color-blue-1;
  }

  &__position {
    color: $color-grey-1;
  }
}
</style>
