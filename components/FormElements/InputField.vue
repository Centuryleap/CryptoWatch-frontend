<template>
  <Field class="input" :name="name" :rules="rules">
    <input
      :type="type"
      ref="input"
      :value="value"
      :placeholder="placeholder"
      @input.prevent="updateModel"
      :max="max"
    />
  </Field>
</template>

<script>
import Field from "./Field.vue";
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "--",
    },
    value: [String, Number],
    max: {
      // type: Number,
      default: null,
    },
    name: String,
    rules: String,
  },
  data() {
    return {
      model: 0,
    };
  },
  methods: {
    updateModel(e) {
      this.model = e.target.value;
      this.$emit("input", this.model);
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(value) {
        // Update our instance' model based on the value prop.
        // This will make this component pick
        if (value && value != this.model) this.model = value;
      },
    },
  },
  components: { Field },
};
</script>

<style lang="postcss" scoped>
.input {
  @apply border border-text-4 rounded-xl;
  @apply placeholder:text-text-4 text-primary-1 font-light text-sm w-full;
}

input {
  @apply py-3.5 lg:py-[17px] px-2.5 lg:px-3.5 rounded-xl w-full focus:outline-none;
}
</style>
