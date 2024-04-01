<template>
  <VueFinalModal
    v-slot="{ close }"
    class="modals-alert"
    overlay-class="modals-alert__overlay"
    content-class="modals-alert__content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    Alert!
    <button type="button" @click="close">Ok</button>
  </VueFinalModal>
</template>

<script setup>
import { VueFinalModal } from 'vue-final-modal';
</script>

<style lang="scss">
// not scoped!
.modals-alert {
  display: flex;
  align-items: center;
  justify-content: center;

  &__overlay {
    background-color: rgba($color-black, 0.5);
  }

  &__content {
    padding: 20px;
    background-color: $color-white;
  }
}
</style>
