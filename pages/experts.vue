<script setup>
import { experts } from '@/configs/experts';

definePageMeta({
  pageHeader: {
    title: 'Our Team',
    image: '/images/page-header/team/team.jpg',
  },
});
</script>

<template>
  <section class="pages-experts">
    <div class="container container--md">
      <div class="pages-experts__content">
        <div class="pages-experts__header">
          <PartsHead subtitle="Team" title="Our Organic Experts" />

          <p class="pages-experts__description">
            <span class="pages-experts__font pages-experts__font--description">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </span>
          </p>
        </div>

        <ul class="pages-experts__cards">
          <li
            v-for="(item, index) in experts"
            :key="index"
            class="pages-experts__item pages-experts__item--card"
          >
            <CardExpert class="pages-experts__card" v-bind="item" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.pages-experts {
  padding: em(150) 0 em(120);

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
