<template>
  <button @click="click" :type="type" :disabled="disabled || loading">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    to: {
      type: String,
    },
  },

  computed: {
    type() {
      return this.submit ? "submit" : this.reset ? "reset" : "button";
    },
  },

  methods: {
    click() {
      if (this.to) this.$router.push(this.to);
      else this.$emit("click");
    },
  },
};
</script>

<style lang="postcss" scoped>
button {
  @apply py-4 lg:py-[18px] px-2.5 lg:px-3.5 rounded-2xl w-full focus:outline-none font-light bg-primary-2 text-white text-sm;
}
</style>
