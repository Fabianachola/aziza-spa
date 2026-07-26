<template>
  <picture>
    <source 
      v-if="webpSrc" 
      :srcset="webpSrc" 
      type="image/webp"
    />
    <source 
      v-if="avifSrc" 
      :srcset="avifSrc" 
      type="image/avif"
    />
    <img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
      :decoding="decoding"
      :fetchpriority="fetchpriority"
      :class="className"
      draggable="false"
      @error="handleError"
    />
  </picture>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ResponsiveImage',
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    width: { type: [String, Number], default: null },
    height: { type: [String, Number], default: null },
    loading: { type: String, default: 'lazy' },
    decoding: { type: String, default: 'async' },
    fetchpriority: { type: String, default: 'auto' },
    className: { type: String, default: '' },
    webp: { type: Boolean, default: true },
    avif: { type: Boolean, default: true }
  },
  setup(props) {
    const webpSrc = computed(() => {
      if (!props.webp) return null
      return props.src.replace(/\.(jpg|jpeg|png)$/, '.webp')
    })
    
    const avifSrc = computed(() => {
      if (!props.avif) return null
      return props.src.replace(/\.(jpg|jpeg|png)$/, '.avif')
    })
    
    const handleError = (e) => {
      // Fallback to original if webp/avif fails
      if (e.target.src !== props.src) {
        e.target.src = props.src
      }
    }
    
    return { webpSrc, avifSrc, handleError }
  }
}
</script>
