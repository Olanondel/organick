<script setup>
definePageMeta({
  pageHeader: {
    title: 'Recent  News',
    image: '/images/page-header/news/news.jpg',
  },
});

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
  {
    date: '25 Nov',
    title: 'The Benefits of Vitamin D & How to Get It',
    admin: 'By Rachi Card',
    text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    image: '/images/news/image-3.jpg',
  },

  {
    date: '25 Nov',
    title: 'Our Favourite Summertime Tommeto',
    admin: 'By Rachi Card',
    text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    image: '/images/news/image-4.jpg',
  },
  {
    date: '25 Nov',
    title: 'The Benefits of Vitamin D & How to Get It',
    admin: 'By Rachi Card',
    text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    image: '/images/news/image-5.jpg',
  },

  {
    date: '25 Nov',
    title: 'Our Favourite Summertime Tommeto',
    admin: 'By Rachi Card',
    text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    image: '/images/news/image-6.jpg',
  },
];
</script>

<template>
  <section class="pages-news">
    <div class="container container--md">
      <ul class="pages-news__cards">
        <li
          v-for="(item, index) in news"
          :key="index"
          class="pages-news__item pages-news__item--card"
        >
          <CardNews v-bind="item" class="pages-news__card" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.pages-news {
  padding: em(120) 0;

  &__cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: em(46) em(50);
  }

  &__card {
    height: 100%;
  }
}
</style>
