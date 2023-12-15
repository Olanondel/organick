<template>
  <pre>{{ error }}</pre>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
};
</script>
