<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  socials: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="card-expert">
    <UiPicture
      v-if="photo"
      :src="photo"
      :alt="`${name} expert`"
      class="card-expert__image"
      width="449"
      height="485"
    />

    <div class="card-expert__footer">
      <div class="card-expert__about">
        <h3 v-if="name" class="card-expert__title">
          <span class="card-expert__font card-expert__font--title">
            {{ name }}
          </span>
        </h3>

        <div v-if="job" class="card-expert__job">
          <span class="card-expert__font card-expert__font--job">
            {{ job }}
          </span>
        </div>
      </div>

      <ul v-if="socials.length" class="card-expert__socials">
        <li
          v-for="(item, index) in socials"
          :key="index"
          class="card-expert__social"
        >
          <a
            :href="item.href"
            target="_blank"
            :aria-label="`${item.name} link`"
          >
            <img :src="item.icon" alt="" class="card-expert__icon" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-expert {
  border-radius: em(30);
  display: flex;
  flex-direction: column;

  &__image {
    height: em(485);
    object-fit: cover;
    object-position: top center;
    border-top-right-radius: em(30);
    border-top-left-radius: em(30);
    overflow: hidden;
  }

  &__footer {
    padding: em(35) em(28);
    box-shadow: 0 29px 44px 0 rgba(150, 150, 150, 0.25);
    border-bottom-right-radius: em(30);
    border-bottom-left-radius: em(30);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: em(30);
    flex-grow: 1;
  }

  &__about {
  }

  &__title {
    color: #274c5b;
    margin-bottom: em(2);

    @include line-clamp(2);
  }

  &__font {
    &--title {
      font-family: $font-family-roboto;
      font-size: em(25);
      line-height: em(29, 25);
      font-weight: $font-weight-extra-bold;
    }

    &--job {
      font-size: em(22);
      line-height: em(30, 22);
      font-family: $font-family-yellowtail;
    }
  }

  &__job {
    color: $color-green-1;
  }

  &__socials {
    display: flex;
    gap: em(17);
    flex-shrink: 0;
  }

  &__social {
  }

  &__icon {
  }
}
</style>
