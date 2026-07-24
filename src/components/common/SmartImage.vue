<!-- src/components/common/SmartImage.vue -->
<template>
  <img
    :src="resolvedSrc"
    :alt="alt"
    :width="width"
    :height="height"
    :loading="eager ? 'eager' : 'lazy'"
    :decoding="eager ? 'sync' : 'async'"
    :fetchpriority="eager ? 'high' : 'auto'"
    :draggable="draggable"
    class="smart-img"
    @error="onError"
  />
</template>

<script>
import { img } from '@/utils/imagePath';

export default {
  name: 'SmartImage',
  props: {
    src:        { type: String, required: true },
    alt:        { type: String, default: '' },
    width:      { type: [String, Number], default: null },
    height:     { type: [String, Number], default: null },
    eager:      { type: Boolean, default: false },   // set true for logos / above-the-fold
    draggable:  { type: Boolean, default: false },
    fallback:   { type: String, default: '/images/backgrounds/marble-texture.jpg' },
  },
  computed: {
    resolvedSrc() { return img(this.src); },
  },
  methods: {
    onError(e) {
      const fb = img(this.fallback);
      if (e.target.src !== fb) e.target.src = fb;
    },
  },
};
</script>

<style scoped>
.smart-img {
  display: block;
  max-width: 100%;
  height: auto;
  /* Keep raster images sharp when scaled down — critical for Chrome */
  image-rendering: -webkit-optimize-contrast;
  image-rendering: auto;
  /* Avoid subpixel blur on transformed images */
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
