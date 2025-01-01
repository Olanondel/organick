<script setup>
definePageMeta({
  pageHeader: {
    title: 'About Us',
    image: '/images/page-header/about-us/about-us.jpg',
  },
});
</script>

<template>
  <section class="pages-about">
    <SectionAbout />

    <SectionAboutWhyChoose />

    <SectionAboutExperts />

    <SectionAboutOffer />
  </section>
</template>

<style scoped lang="scss">
.pages-about {
  padding-bottom: em(141);
}
</style>
