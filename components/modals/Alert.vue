<template>
  <VueFinalModal
    class="modals-alert"
    overlay-class="modals-alert__overlay"
    content-class="modals-alert__content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    @update:model-value="updateModelValue"
  >
    Alert!
    <button type="button" @click="updateModelValue(false)">Ok</button>
  </VueFinalModal>
</template>

<script>
import { VueFinalModal } from 'vue-final-modal';

export default {
  components: {
    VueFinalModal,
  },
  emits: ['update:modelValue'],
  methods: {
    updateModelValue(value) {
      this.$emit('update:modelValue', value);
    },
  },
};
</script>

<style lang="scss">
.modals-alert {
  display: flex;
  justify-content: center;
  align-items: center;

  &__overlay {
    background-color: rgba($color-black, 0.5);
  }

  &__content {
    background-color: $color-white;
    padding: 20px;
  }
}
</style>
