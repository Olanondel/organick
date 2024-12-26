<!--<template>-->
<!--  <div class="pages-index">-->
<!--    <button type="button" @click="alertModal.open">Open alert modal</button>-->

<!--    <button type="button" @click="toggleContent">Toggle content</button>-->
<!--    <Collapse :when="showContent">Toggleable content</Collapse>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div class="pages-index">
    <SectionHomeExploreNow />

    <SectionHomeCards />

    <SectionHomeAboutUs />

    <SectionHomeProducts />

    <SectionHomeReviews />

    <SectionHomeOfferOrganic />

    <SectionHomeEcoFriendly />

    <SectionHomeGallery />

    <SectionHomeNews />
  </div>
</template>

<script setup>
import { useModal } from 'vue-final-modal';
import { Collapse } from 'vue-collapsed';

/**
 * @see https://vue-final-modal.org/
 */
const alertModal = useModal({ component: resolveComponent('LazyModalsAlert') });

/**
 * @see https://github.com/smastrom/vue-collapsed
 */
const showContent = ref(false);
function toggleContent() {
  showContent.value = !showContent.value;
}
</script>

<style scoped lang="scss">
.pages-index {
  @include box(200);
}
</style>
