<template>
  <div class="app">
    App

    <NuxtLayout v-slot="{ className }" class="app__layout">
      <NuxtPage :class="className" />
    </NuxtLayout>

    <ModalsContainer />
  </div>
</template>

<script>
import { ModalsContainer } from 'vue-final-modal';

export default {
  components: {
    ModalsContainer,
  },
};
</script>

<style scoped lang="scss">
.app {
  $parent: &;

  display: flex;
  flex-direction: column;

  &:deep(#{$parent}__layout) {
    flex-grow: 1;
  }
}
</style>
