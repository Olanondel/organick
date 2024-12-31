<script setup></script>

<template>
  <section class="section-why-choose">
    <div class="container container--md">
      <div class="section-why-choose__content">
        <div class="section-why-choose__about">
          <PartsHead
            subtitle="Why Choose us?"
            title="We do not buy from the open market & traders."
            class="section-why-choose__head"
          />

          <p class="section-why-choose__text">
            <span
              class="section-why-choose__font section-why-choose__font--text"
            >
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard the 1500s, when an
              unknown
            </span>
          </p>

          <ul class="section-why-choose__benefits">
            <li
              class="section-why-choose__item section-why-choose__item--benefit"
            >
              <div class="section-why-choose__benefit">
                <h4 class="section-why-choose__name">
                  <span
                    class="section-why-choose__font section-why-choose__font--name"
                  >
                    100% Natural Product
                  </span>
                </h4>

                <p class="section-why-choose__description">
                  <span
                    class="section-why-choose__font section-why-choose__font--description"
                  >
                    Simply dummy text of the printing and typesetting industry
                    Lorem Ipsum
                  </span>
                </p>
              </div>
            </li>

            <li
              class="section-why-choose__item section-why-choose__item--benefit"
            >
              <div class="section-why-choose__benefit">
                <h4 class="section-why-choose__name">
                  <span
                    class="section-why-choose__font section-why-choose__font--name"
                  >
                    Increases resistance
                  </span>
                </h4>

                <p class="section-why-choose__description">
                  <span
                    class="section-why-choose__font section-why-choose__font--description"
                  >
                    Filling, and temptingly healthy, our Biona Organic Granola
                    with Wild Berries is just the thing
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>

        <UiPicture
          src="/images/sections/why-choose/image.jpg"
          class="section-why-choose__image"
          width="678"
          height="579"
          alt="vegetable sudoku"
        />
      </div>

      <div class="section-why-choose__cards"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-why-choose {
  background-color: $color-white-2;
  padding: em(190) 0;

  &__content {
    display: flex;
    align-items: center;
    gap: em(51);
  }

  &__about {
    max-width: em(671);
  }

  &__head {
    margin-bottom: em(25);
  }

  &__text {
    margin-bottom: em(36);
    color: $color-grey-1;
  }

  &__font {
    &--text {
      font-size: em(18);
      line-height: em(30, 18);
    }

    &--name {
      font-size: em(20);
      line-height: em(24, 20);
      font-weight: $font-weight-medium;
      font-family: $font-family-roboto;
    }

    &--description {
      font-size: em(18);
      line-height: em(30, 18);
    }
  }

  &__benefits {
    max-width: em(486);
  }

  &__item {
    &--benefit {
      & + & {
        margin-top: em(24);
      }
    }
  }

  &__name {
    color: $color-blue-1;
    margin-bottom: em(12);
    padding: em(29) em(91) em(29) em(53);
    border-radius: em(49);
    background-color: #ececec;
    display: inline-block;
    position: relative;

    &::before {
      position: absolute;
      content: '';
      @include box(em(19));
      border-radius: 50%;
      border: 3px solid $color-green-1;
      left: em(27);
      top: em(31);
    }
  }

  &__description {
    color: $color-grey-1;
    padding-left: em(60);
  }

  &__image {
    border-radius: em(30);
    overflow: hidden;
  }

  &__cards {
  }
}
</style>
