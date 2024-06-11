<template>
  <div id="app" class="error">
    Error

    <NuxtLayout v-slot="{ className }" class="error__layout">
      <div :class="className">
        <pre>{{ error }}</pre>
      </div>
    </NuxtLayout>

    <ModalsContainer />
  </div>
</template>

<script setup>
import { ModalsContainer } from 'vue-final-modal';

defineProps({
  error: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.error {
  $parent: &;

  display: flex;
  flex-direction: column;

  &:deep(#{$parent}__layout) {
    flex-grow: 1;
  }
}
</style>
