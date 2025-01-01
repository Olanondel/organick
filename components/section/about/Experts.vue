<script setup>
import { experts } from '@/configs/experts';
</script>

<template>
  <div class="section-experts">
    <div class="container container--md">
      <div class="section-experts__content">
        <div class="section-experts__header">
          <PartsHead subtitle="Team" title="Our Organic Experts" />

          <p class="section-experts__description">
            <span
              class="section-experts__font section-experts__font--description"
            >
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </span>
          </p>
        </div>

        <ul class="section-experts__cards">
          <li
            v-for="(item, index) in experts.slice(0, 3)"
            :key="index"
            class="section-experts__item section-experts__item--card"
          >
            <CardExpert class="section-experts__card" v-bind="item" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-experts {
  padding: em(177) 0 em(202);

  &__header {
    text-align: center;
    max-width: em(852);
    margin: 0 auto em(42);
  }

  &__description {
    margin-top: em(16);
    color: #525c60;
  }

  &__font {
    &--description {
      font-size: em(18);
      line-height: em(30, 18);
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: em(42) em(27);
  }

  &__card {
    height: 100%;
  }
}
</style>
