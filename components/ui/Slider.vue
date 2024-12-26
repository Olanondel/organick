<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay, Parallax } from 'swiper/modules';

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});

const config = {
  modules: [Pagination, Autoplay],
  pagination: {
    el: '.slider__pagination',
    bulletClass: 'slider__bullet',
    bulletActiveClass: 'slider__bullet--active',
    bulletElement: 'li',
  },
  autoplay: {
    delay: 2500,
  },
  speed: 1000,
  loop: true,
};
</script>

<template>
  <div class="slider">
    <Swiper v-bind="config" class="slider__element">
      <SwiperSlide v-for="(item, index) in items" :key="index">
        <slot :item="item" />
      </SwiperSlide>
    </Swiper>

    <ul class="slider__pagination" />
  </div>
</template>

<style scoped lang="scss">
.slider {
  position: relative;

  &__pagination {
    display: flex;
    justify-content: center;
    gap: em(6);
    position: absolute;
    top: calc(100% + #{em(19)});
  }

  :deep(.slider__bullet) {
    @include box(em(8));
    background-color: #c4c4c4;
    border-radius: 50%;
  }

  :deep(.slider__bullet--active) {
    background-color: $color-green-1;
  }
}
</style>
