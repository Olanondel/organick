<script setup>
defineProps({
  tag: {
    type: String,
    default: undefined,
  },
  title: {
    type: String,
    default: undefined,
  },
  price: {
    type: String,
    default: undefined,
  },
  oldPrice: {
    type: String,
    default: undefined,
  },
  rating: {
    type: Number,
    default: undefined,
  },
  image: {
    type: String,
    default: undefined,
  },
});
</script>

<template>
  <div class="card-product">
    <img :src="image" :alt="title" class="card-product__image" />

    <div class="card-product__tag">
      <span class="card-product__font card-product__font--tag">
        {{ tag }}
      </span>
    </div>

    <div class="card-product__content">
      <h4 class="card-product__title">
        <span class="card-product__font card-product__font--title">
          {{ title }}
        </span>
      </h4>

      <div class="card-product__footer">
        <div class="card-product__price">
          <span class="card-product__font card-product__font--price-old">
            {{ oldPrice }}
          </span>
          <span class="card-product__font card-product__font--price">
            {{ price }}
          </span>
        </div>

        <ul class="card-product__rating">
          <li v-for="n in rating" :key="n">
            <img src="/icons/star.svg" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-product {
  background-color: $color-white-2;
  border-radius: em(30);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  min-height: em(483);
  padding: em(29) em(30) em(17);

  &__image {
    position: absolute;
    inset: 0;
    max-width: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: auto;
  }

  &__tag {
    border-radius: 8px;
    padding: 5px 12px 6px 12px;
    background: $color-blue-1;
    color: $color-white;
    position: absolute;
    top: em(30);
    left: em(30);
  }

  &__font {
    &--tag {
      font-size: em(15);
      line-height: em(20, 15);
      font-weight: $font-weight-semi-bold;
    }

    &--title {
      font-size: em(20);
      line-height: em(23, 20);
      font-weight: $font-weight-semi-bold;
      font-family: $font-family-roboto;
    }

    &--price-old {
      font-size: em(15);
      line-height: em(20, 15);
      font-weight: $font-weight-semi-bold;
      text-decoration: line-through;
      color: #b8b8b8;
    }

    &--price {
      font-size: em(18);
      line-height: em(25, 18);
      font-weight: $font-weight-bold;
    }
  }

  &__middle {
    flex-grow: 1;
  }

  &__title {
    margin-bottom: em(13);
    color: $color-blue-1;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: em(6);
    border-top: 1px solid #dedddd;
  }

  &__price {
    color: $color-blue-1;
    display: flex;
    gap: em(8);
    align-items: center;
  }

  &__rating {
    display: flex;
    gap: em(3);
  }
}
</style>
