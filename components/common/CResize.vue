<template>
  <div class="resize">
    <slot />
  </div>
</template>

<style scoped lang="scss">
$design-width: 1920;
$design-height: 1080;
$default-size: 16;
$minWidth: 768px;
$minHeight: 600px;

.resize {
  font-size: min(
    calc($default-size * max($minWidth, 100vw) / $design-width),
    calc($default-size * max($minHeight, 100vh) / $design-height)
  );

  @include media-breakpoint-down(sm) {
    font-size: em($default-size);
  }
}
</style>
