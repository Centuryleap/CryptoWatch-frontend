<template>
  <component
    :is="href ? 'a' : 'NuxtLink'"
    :to="to"
    :href="href"
    :target="target"
    class="text-primary-3 cursor-pointer font-light"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "Link",
  props: {
    to: {
      type: String,
    },

    href: {
      type: String,
    },

    target: {
      type: String,
      default: "_self",
    },
  },
};
</script>
