<script setup></script>

<template>
  <button type="button" class="button-cart">
    <div class="button-cart__wrapper button-cart__wrapper--icon">
      <img
        src="/icons/cart.svg"
        alt="cart icon"
        class="button-cart__icon button-cart__icon--cart"
      />
    </div>

    <span class="button-cart__font button-cart__font--cart"> Cart (0) </span>
  </button>
</template>

<style scoped lang="scss">
.button-cart {
  display: flex;
  align-items: center;
  gap: em(12);
  border: 1px solid #e0e0e0;
  border-radius: em(33);
  min-width: 159px;
  padding: em(5);

  &__wrapper {
    &--icon {
      @include box(em(56));
      background-color: $color-blue-1;
      border-radius: 50%;
      display: flex;
      flex-shrink: 0;
    }
  }

  &__icon {
    &--cart {
      width: em(24);
      height: em(22);
      margin: auto;
    }
  }

  &__font {
    &--cart {
      font-size: em(18);
      line-height: em(21, 18);
      font-weight: $font-weight-semi-bold;
      color: $color-blue-1;
      white-space: nowrap;
      font-family: $font-family-roboto;
    }
  }
}
</style>
