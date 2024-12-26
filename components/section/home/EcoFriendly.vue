<script setup></script>

<template>
  <section class="eco-friendly">
    <img
      src="/images/eco-friendly/garden.jpg"
      alt=""
      class="eco-friendly__image"
    />

    <div class="container container--md">
      <div class="eco-friendly__content">
        <PartsHead
          subtitle="Eco Friendly"
          title="Econis is a Friendly Organic Store"
          class="eco-friendly__head"
        />

        <ul class="eco-friendly__list">
          <li class="eco-friendly__item">
            <h4 class="eco-friendly__title">
              <span class="eco-friendly__font eco-friendly__font--title">
                Start with Our Company First
              </span>
            </h4>

            <p class="eco-friendly__text">
              <span class="eco-friendly__font eco-friendly__font--text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </span>
            </p>
          </li>

          <li class="eco-friendly__item">
            <h4 class="eco-friendly__title">
              <span class="eco-friendly__font eco-friendly__font--title">
                Learn How to Grow Yourself
              </span>
            </h4>

            <p class="eco-friendly__text">
              <span class="eco-friendly__font eco-friendly__font--text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </span>
            </p>
          </li>

          <li class="eco-friendly__item">
            <h4 class="eco-friendly__title">
              <span class="eco-friendly__font eco-friendly__font--title">
                Farming Strategies of Today
              </span>
            </h4>

            <p class="eco-friendly__text">
              <span class="eco-friendly__font eco-friendly__font--text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.eco-friendly {
  position: relative;
  padding: em(100) 0 em(108);

  &__image {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    bottom: 0;
  }

  &__content {
    position: relative;
    padding: em(78) em(65) em(77) em(89);
    max-width: em(789);
    margin-left: auto;
    background-color: $color-white;
    border-radius: em(30);
  }

  &__head {
    margin-bottom: em(35);
  }

  &__list {
  }

  &__item {
    & + & {
      margin-top: em(35);
    }
  }

  &__title {
    margin-bottom: em(7);
    color: $color-blue-1;
  }

  &__font {
    &--title {
      font-size: em(25);
      line-height: em(29, 25);
      font-family: $font-family-roboto;
      font-weight: $font-weight-medium;
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
