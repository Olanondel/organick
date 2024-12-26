<script setup>
const achievements = [
  { count: '100%', text: 'Organic' },
  { count: '285', text: 'Active Product' },
  { count: '350+', text: 'Organic Orchads' },
  { count: '25+', text: 'Years of Farming' },
];
</script>

<template>
  <section class="section-reviews">
    <img
      src="/images/reviews/review-bg-left.png"
      alt=""
      class="section-reviews__bg section-reviews__bg--left"
    />
    <img
      src="/images/reviews/review-bg-right.png"
      alt=""
      class="section-reviews__bg section-reviews__bg--right"
    />

    <div class="container container--sm">
      <div class="section-reviews__content">
        <PartsHead
          title="What Our Customer Saying?"
          subtitle="Testimonial"
          class="section-reviews__head"
        />

        <div class="section-reviews__slider">
          <UiSlider :items="[1, 2, 3]">
            <CardReview />
          </UiSlider>
        </div>
      </div>

      <div class="section-reviews__footer">
        <ul class="achievements">
          <li
            v-for="(achievement, index) in achievements"
            :key="index"
            class="achievements__item"
          >
            <div class="achievement">
              <div class="achievement__content">
                <div class="achievement__count">
                  <span class="achievement__font achievement__font--count">
                    {{ achievement.count }}
                  </span>
                </div>

                <div class="achievement__name">
                  <span class="achievement__font achievement__font--name">
                    {{ achievement.text }}
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-reviews {
  padding: em(164) 0;
  background-color: #fcfcfc;
  position: relative;
  overflow: hidden;

  &__bg {
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100%;
    object-fit: cover;
    object-position: top right;

    &--left {
      left: 0;
      width: em(550);
    }
    &--right {
      right: 0;
      width: em(451);
    }
  }

  &__content {
    padding: 0 em(164) em(102);
  }

  &__head {
    margin-bottom: em(60);
    text-align: center;
  }

  &__footer {
    padding-top: em(102);
    border-top: 1px solid #e0e0e0;
  }
}

.achievements {
  display: flex;
  justify-content: center;
  gap: em(62);
}

.achievement {
  border: em(4) solid $color-green-1;
  border-radius: 50%;
  padding: em(5);
  @include box(em(211));

  &__content {
    background-color: #f1f1f1;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &__count {
    color: $color-blue-1;
  }

  &__font {
    &--count {
      font-size: em(50);
      line-height: em(59, 50);
      font-family: $font-family-roboto;
      font-weight: $font-weight-extra-bold;
    }

    &--name {
      font-size: em(18);
      font-weight: $font-weight-semi-bold;
    }
  }

  &__name {
    color: $color-blue-1;
  }
}
</style>
