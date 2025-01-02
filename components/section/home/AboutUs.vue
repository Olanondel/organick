<script setup></script>

<template>
  <div class="section-about-us">
    <img
      src="/images/about-us/image@2x.png"
      alt=""
      class="section-about-us__image"
    />

    <div class="container container--md">
      <div class="section-about-us__content">
        <PartsHead
          title="We Believe in Working Accredited Farmers"
          subtitle="About Us"
          class="section-about-us__head"
        />

        <p class="section-about-us__description">
          <span
            class="section-about-us__font section-about-us__font--description"
          >
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </span>
        </p>

        <ul class="benefits section-about-us__benefits">
          <li class="benefits__item">
            <div class="benefit">
              <div class="benefit__wrapper benefit__wrapper--icon">
                <img
                  src="/icons/leaf-in-plate.svg"
                  alt=""
                  class="benefit__icon benefit__icon--1"
                />
              </div>

              <div class="benefit__info">
                <h4 class="benefit__title">
                  <span class="benefit__font benefit__font--title">
                    Organic Foods Only
                  </span>
                </h4>

                <div class="benefit__text">
                  <span class="benefit__font benefit__font--text">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </span>
                </div>
              </div>
            </div>
          </li>

          <li class="benefits__item">
            <div class="benefit">
              <div class="benefit__wrapper benefit__wrapper--icon">
                <img
                  src="/icons/quality-standart.svg"
                  alt=""
                  class="benefit__icon benefit__icon--2"
                />
              </div>

              <div class="benefit__info">
                <h4 class="benefit__title">
                  <span class="benefit__font benefit__font--title">
                    Quality Standards
                  </span>
                </h4>

                <div class="benefit__text">
                  <span class="benefit__font benefit__font--text">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <UiButton to="/shop" has-icon>Shop Now</UiButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-about-us {
  position: relative;
  background-color: $color-white-2;
  padding: em(186) 0 em(199);

  &__image {
    position: absolute;
    width: em(911);
    height: em(867);
    left: em(100);
    top: em(87);
  }

  &__content {
    position: relative;
    max-width: em(702);
    margin-left: auto;
  }

  &__head {
    margin-bottom: em(14);
  }

  &__font {
    &--description {
      font-size: em(18);
      line-height: em(30, 18);
    }
  }

  &__description {
    color: $color-grey-1;
    margin-bottom: em(46);
  }

  &__benefits {
    margin-bottom: em(46);
  }
}

.benefits {
  &__item {
    & + & {
      margin-top: em(30);
    }
  }
}

.benefit {
  display: flex;
  align-items: center;
  gap: em(19);

  &__wrapper {
    &--icon {
      @include box(em(101));
      background-color: $color-white;
      border-radius: em(20);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &__icon {
    &--1 {
      width: em(53);
      height: em(46);
    }

    &--2 {
      width: em(56);
      height: em(52);
    }
  }

  &__title {
    color: $color-blue-1;
    margin-bottom: em(7);
  }

  &__font {
    &--title {
      font-size: em(25);
      line-height: em(29, 25);
      font-family: $font-family-roboto;
      font-weight: $font-weight-extra-bold;
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
