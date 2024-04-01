<template>
  <pre>{{ error }}</pre>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    required: true,
  },
});
</script>
