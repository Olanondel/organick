<script setup>
const experts = [
  {
    name: 'Giovani Bacardo',
    job: 'Farmer',
    photo: '/images/experts/1/1.jpg',
    socials: [
      {
        icon: '/icons/social/fb.svg',
        name: 'facebook',
        href: 'https://www.facebook.com/',
      },
      {
        icon: '/icons/social/twitter.svg',
        name: 'twitter',
        href: 'https://twitter.com',
      },
    ],
  },
  {
    name: 'Marianne Loreno',
    job: 'Designer',
    photo: '/images/experts/2/expert.jpg',
    socials: [
      {
        icon: '/icons/social/inst.svg',
        name: 'instagram',
        href: 'https://www.instagram.com/',
      },
      {
        icon: '/icons/social/fb.svg',
        name: 'facebook',
        href: 'https://www.facebook.com/',
      },
      {
        icon: '/icons/social/twitter.svg',
        name: 'twitter',
        href: 'https://twitter.com',
      },
    ],
  },
  {
    name: 'Riga Pelore',
    job: 'Farmer',
    photo: '/images/experts/3/1.png',
    socials: [
      {
        icon: '/icons/social/fb.svg',
        name: 'facebook',
        href: 'https://www.facebook.com/',
      },
      {
        icon: '/icons/social/twitter.svg',
        name: 'twitter',
        href: 'https://twitter.com',
      },
    ],
  },
  {
    name: 'Keira Knightley',
    job: 'Farmer',
    photo: '/images/experts/4/1.jpg',
    socials: [
      {
        icon: '/icons/social/inst.svg',
        name: 'instagram',
        href: 'https://www.instagram.com/',
      },
      {
        icon: '/icons/social/fb.svg',
        name: 'facebook',
        href: 'https://www.facebook.com/',
      },
    ],
  },
  {
    name: 'Scott Lawrence',
    job: 'Designer',
    photo: '/images/experts/5/1.jpg',
    socials: [
      {
        icon: '/icons/social/inst.svg',
        name: 'instagram',
        href: 'https://www.instagram.com/',
      },
      {
        icon: '/icons/social/twitter.svg',
        name: 'twitter',
        href: 'https://twitter.com',
      },
    ],
  },
  {
    name: 'Karen Allen',
    job: 'Farmer',
    photo: '/images/experts/6/1.jpg',
    socials: [
      {
        icon: '/icons/social/fb.svg',
        name: 'facebook',
        href: 'https://www.facebook.com/',
      },
      {
        icon: '/icons/social/twitter.svg',
        name: 'twitter',
        href: 'https://twitter.com',
      },
    ],
  },
];
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

  &__content {
  }

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
