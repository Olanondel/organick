<template>
  <div class="pages-index">
    Index page

    <button type="button" @click="alertModal.open">Open alert modal</button>

    <button type="button" @click="toggleContent">Toggle content</button>
    <Collapse :when="showContent">Toggleable content</Collapse>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { useModal } from 'vue-final-modal';
import { Collapse } from 'vue-collapsed';

import ModalsAlert from '@/components/modals/ModalsAlert.vue';

const alertModal = useModal({ component: ModalsAlert });

const showContent = ref(false);
function toggleContent() {
  showContent.value = !showContent.value;
}
</script>

<style scoped lang="scss">
.pages-index {
}
</style>
