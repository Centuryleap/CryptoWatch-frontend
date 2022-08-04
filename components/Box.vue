<template>
  <div class="space-y-3 lg:space-y-4">
    <div class="top between">
      <h5 :class="{ big }">
        {{ title }}
      </h5>

      <Link :to="to" v-show="link"> {{ link }} </Link>
    </div>

    <slot></slot>
  </div>
</template>

<script>
import Link from "./Link.vue";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    big: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: "/",
    },
    link: {
      type: String,
      default: "",
    },
  },

  components: { Link },
};
</script>

<style lang="postcss" scoped>
h5 {
  @apply font-light text-sm lg:text-base lg:leading-[24px] text-[#01071D];

  &.big {
    @apply font-normal text-base lg:text-xl;
  }
}

a {
  @apply text-sm lg:text-base font-light text-primary-2 lg:mr-5 xl:mr-8;
}
</style>
