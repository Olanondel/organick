<template>
  <VueFinalModal
    v-slot="{ close }"
    class="modals-alert"
    overlay-class="modals-alert__overlay"
    content-class="modals-alert__content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    :teleport-to="false"
  >
    Alert!
    <button type="button" @click="close">Ok</button>
  </VueFinalModal>
</template>

<script setup>
/**
 * @see https://vue-final-modal.org/
 */
import { VueFinalModal } from 'vue-final-modal';
</script>

<style lang="scss">
/**
<VueFinalModal> doesn't have scoped id
 */
.modals-alert {
  display: flex;
  align-items: center;
  justify-content: center;

  &__overlay {
    background-color: rgba($color-black, 0.5);
  }

  &__content {
    padding: em(20);
    background-color: $color-white;
  }
}
</style>
