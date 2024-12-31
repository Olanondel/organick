<script setup></script>

<template>
  <section class="sections-about">
    <UiPicture
      src="/images/sections/about-us/image.png"
      alt="plate with vegetables"
      class="sections-about__image"
      width="1021"
      height="764"
    />

    <div class="container container--md">
      <div class="sections-about__content">
        <PartsHead
          subtitle="About Us"
          title="We do Creative<br /> Things for Success"
          class="sections-about__head"
        />

        <p class="sections-about__text">
          <span class="sections-about__font sections-about__font--text">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </span>
        </p>

        <p class="sections-about__text">
          <span class="sections-about__font sections-about__font--text">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </span>
        </p>

        <ul class="sections-about__benefits">
          <li class="sections-about__item sections-about__item--benefit">
            <div class="sections-about__benefit">
              <img
                src="/icons/tractor.svg"
                alt=""
                class="sections-about__icon sections-about__icon--benefit"
              />

              <span class="sections-about__font sections-about__font--benefit">
                Modern Agriculture Equipment
              </span>
            </div>
          </li>

          <li class="sections-about__item sections-about__item--benefit">
            <div class="sections-about__benefit">
              <img
                src="/icons/factory.svg"
                alt=""
                class="sections-about__icon sections-about__icon--benefit"
              />

              <span class="sections-about__font sections-about__font--benefit">
                No growth<br />
                hormones are used
              </span>
            </div>
          </li>
        </ul>

        <UiButton has-icon class="sections-about__button">
          Explore More
        </UiButton>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.sections-about {
  position: relative;
  padding: em(209) 0 em(143);

  &__image {
    width: em(1021);
    height: em(764);
    position: absolute;
    left: em(33);
    top: em(163);
  }

  &__content {
    max-width: em(675);
    margin-left: auto;
    position: relative;
  }

  &__head {
    margin-bottom: em(14);
  }

  &__text {
    color: $color-grey-1;

    & + & {
      margin-top: em(30);
    }
  }

  &__font {
    &--text {
      font-size: em(18);
      line-height: em(30, 18);
    }

    &--benefit {
      font-family: $font-family-roboto;
      font-weight: $font-weight-medium;
      font-size: em(25);
      line-height: em(31, 25);
    }
  }

  &__benefits {
    margin-top: em(48);
    display: flex;
    justify-content: space-between;
    gap: em(20);
  }

  &__item {
    &--benefit {
      flex: 1;
    }
  }

  &__benefit {
    display: flex;
    gap: em(15);
    color: $color-blue-1;
  }

  &__icon {
    &--benefit {
      width: em(51);
      height: em(48);
    }
  }

  &__button {
    margin-top: em(58);
  }
}
</style>
