<script setup>
const news = [
  {
    date: '25 Nov',
    title: 'The Benefits of Vitamin D & How to Get It',
    admin: 'By Rachi Card',
    text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    image: '/images/news/image-1.jpg',
  },

  {
    date: '25 Nov',
    title: 'Our Favourite Summertime Tommeto',
    admin: 'By Rachi Card',
    text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    image: '/images/news/image-2.jpg',
  },
];
</script>

<template>
  <div class="section-news">
    <div class="container container--md">
      <div class="section-news__header">
        <PartsHead
          subtitle="News"
          title="Discover weekly content about organic food, & more"
          class="section-news__head"
        />

        <UiButton has-icon theme="transparent">More News</UiButton>
      </div>

      <div class="section-news__cards">
        <CardNews v-for="(item, index) in news" :key="index" v-bind="item" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-news {
  padding: em(177) 0 em(185);

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: em(48);
  }

  &__head {
    max-width: em(702);
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: em(46);
  }
}
</style>
