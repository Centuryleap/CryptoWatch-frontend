<template>
  <component :is="src ? 'img' : 'span'" :src="`/svg/${src}.svg`" :class="{ circle }">
    <i v-if="name" :class="`isax isax-${name}`"></i>
  </component>
</template>

<script>
export default {
  name: "Icon",
  props: {
    src: {
      type: String,
    },

    name: {
      type: String,
    },

    circle: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
.circle {
  @apply w-11 h-11 rounded-full inline-flex justify-center items-center;
}
</style>
