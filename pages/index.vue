<template>
  <div class="pages-index">
    Index page

    <button type="button" @click="openAlertModal">Open alert modal</button>

    <ClientOnly>
      <button type="button" @click="toggleContent">Toggle content</button>
      <Collapse :when="showContent">Toggleable content</Collapse>
    </ClientOnly>
  </div>
</template>

<script>
import { useModal } from 'vue-final-modal';
import ModalsAlert from '@/components/modals/Alert.vue';

import { Collapse } from 'vue-collapsed';

export default {
  components: {
    Collapse,
  },
  setup() {
    const alertModal = useModal({ component: ModalsAlert });

    return { alertModal };
  },
  data() {
    return {
      showContent: false,
    };
  },
  methods: {
    openAlertModal() {
      this.alertModal.open();
    },
    toggleContent() {
      this.showContent = !this.showContent;
    },
  },
};
</script>

<style scoped lang="scss">
.pages-index {
}
</style>
