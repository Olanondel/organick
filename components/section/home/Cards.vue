<script setup></script>

<template>
  <div class="section-cards">
    <div class="container container--md">
      <div class="section-cards__content">
        <div class="card-simple">
          <img
            src="/images/cards/card-1.jpg"
            alt=""
            class="card-simple__image"
          />

          <div class="card-simple__content">
            <div class="card-simple__subtitle card-simple__subtitle--1">
              <span class="card-simple__font card-simple__font--subtitle">
                Natural!!
              </span>
            </div>

            <h3 class="card-simple__title card-simple__title--1">
              <span class="card-simple__font card-simple__font--title">
                Get Garden<br />
                Fresh Fruits
              </span>
            </h3>
          </div>
        </div>

        <div class="card-simple">
          <img
            src="/images/cards/card-2.jpg"
            alt=""
            class="card-simple__image"
          />

          <div class="card-simple__content">
            <div class="card-simple__subtitle card-simple__subtitle--2">
              <span class="card-simple__font card-simple__font--subtitle">
                Offer!!
              </span>
            </div>

            <h3 class="card-simple__title card-simple__title--2">
              <span class="card-simple__font card-simple__font--title">
                Get 10% off<br />
                on Vegetables
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-cards {
  padding: em(154) 0 em(190);

  &__content {
    display: flex;
    gap: em(36);
  }
}

.card-simple {
  padding: em(109) em(55) em(110);
  width: 100%;
  overflow: hidden;
  border-radius: em(30);
  position: relative;

  &__image {
    position: absolute;
    inset: 0;
    max-width: 100%;
  }

  &__content {
    position: relative;
  }

  &__subtitle {
    margin-bottom: em(5);

    &--1 {
      color: $color-white;
    }

    &--2 {
      color: $color-green-1;
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
      font-size: em(40);
      line-height: em(47, 40);
    }
  }

  &__title {
    &--1 {
      color: $color-white;
    }
    &--2 {
      color: $color-blue-1;
    }
  }
}
</style>
