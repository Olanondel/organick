<template>
  <div id="app" class="app">
    <CResize>
      <NuxtLayout v-slot="{ className }" class="app__layout">
        <NuxtPage :class="className" />
      </NuxtLayout>

      <ModalsContainer />
    </CResize>
  </div>
</template>

<script setup>
import { ModalsContainer } from 'vue-final-modal';
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
