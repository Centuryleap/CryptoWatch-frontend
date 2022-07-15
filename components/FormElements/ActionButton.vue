<template>
  <button
    @click="click"
    :type="type"
    :disabled="disabled || loading"
  >
    <slot></slot>

    <div
      v-if="loading"
      class="bg-white/5 end absolute top-0 bottom-0 left-0 right-0 -mr-1"
    >
      <Loader />
    </div>
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
