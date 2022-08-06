<template>
  <button
    @click="click"
    :type="type"
    :class="{ rounded }"
    :disabled="loading"
  >
    <slot></slot>

    <div v-if="loading" class="spinner end">
      <LineSpinFadeLoader color="white" scale="0.35" />
    </div>
  </button>
</template>

<script>
import 'vue-loaders/dist/vue-loaders.css'
import LineSpinFadeLoader from "vue-loaders/dist/loaders/line-spin-fade-loader";
export default {
  name: "ActionButton",

  components: {LineSpinFadeLoader: LineSpinFadeLoader.component},
  props: {
    to: {
      type: String,
    },
    rounded: Boolean,
    submit: Boolean,
    reset: Boolean,
    loading: Boolean
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
  @apply py-4 lg:py-[18px] px-2.5 lg:px-3.5 rounded-2xl w-full focus:outline-none font-light bg-primary-2 text-white text-sm relative;

  &.rounded {
    @apply rounded-full py-3 px-[25px];
  }

  &:disabled {
    @apply bg-opacity-50 cursor-not-allowed;
  }

  > .spinner {
    @apply absolute top-0 bottom-0 left-0 right-0;
  }
}
</style>
