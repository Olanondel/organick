<template>
  <picture :aria-hidden="ariaHidden">
    <template
      v-for="(format, formatIndex) in formats"
      :key="`format-${formatIndex}`"
    >
      <source
        v-for="(breakpoint, mediaIndex) in media"
        :key="`source-${formatIndex}-${mediaIndex}`"
        :srcset="generateSrcSet(format, breakpoint)"
        :type="`image/${format}`"
        :media="generateMediaQuery(breakpoint)"
      />
    </template>

    <template
      v-for="(format, formatIndex) in formats"
      :key="`default-${formatIndex}`"
    >
      <source :srcset="generateSrcSet(format)" :type="`image/${format}`" />
    </template>

    <img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
    />
  </picture>
</template>

<script>
import breakpointsConfig from '@/configs/breakpoints';

export default {
  name: 'UiPicture',
  props: {
    src: {
      type: String,
      required: true,
    },
    formats: {
      type: Array,
      default: () => ['avif', 'webp'],
    },
    resolutions: {
      type: Array,
      default: () => ['2x', '3x'],
    },
    media: {
      type: Array,
      default: () => ['sm'],
    },
    width: {
      type: [String, Number],
      default: undefined,
    },
    height: {
      type: [String, Number],
      default: undefined,
    },
    breakpoints: {
      type: Object,
      default: () => breakpointsConfig,
    },
    alt: {
      type: String,
      default: '',
    },
    loading: {
      type: String,
      default: 'lazy',
      validator: (value) => ['lazy', 'eager'].includes(value),
    },
    ariaHidden: {
      type: Boolean,
      default: undefined,
    },
  },
  computed: {
    baseSrc() {
      return this.src.replace(/\.[a-zA-Z]+$/, ''); // Удаляет расширение из src
    },

    calcResolutions() {
      return !this.resolutions.length ? ['1x'] : ['1x', ...this.resolutions];
    },
  },
  methods: {
    generateSrcSet(format, breakpoint) {
      const suffix = breakpoint ? `-${breakpoint}` : '';
      return this.calcResolutions
        .map(
          (res) =>
            `${this.baseSrc}${suffix}${res !== '1x' ? `@${res}` : ''}.${format} ${res}`,
        )
        .join(', ');
    },

    generateMediaQuery(breakpoint) {
      const maxWidth = this.breakpoints[breakpoint];

      if (maxWidth) {
        const adjustedMaxWidth = (maxWidth - 0.02).toFixed(2); // Уменьшаем на 0.02px
        return `(max-width: ${adjustedMaxWidth}px)`;
      }

      return maxWidth ? `(max-width: ${maxWidth}px)` : null;
    },
  },
};
</script>
