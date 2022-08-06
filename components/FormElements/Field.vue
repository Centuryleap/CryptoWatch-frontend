<template>
  <ValidationProvider :name="name" :rules="rules" v-slot="{ errors }">
    <div class="field">
      <slot></slot>
      <div class="text-red-500 text-xs mt-2 ml-4 text-right">
        {{ errors[0] }}
      </div>
    </div>
  </ValidationProvider>
</template>

<script>
export default {
  props: {
    name: String,
    rules: String,
  },
};
</script>

<style lang="postcss" scoped>
.field {
  @apply mb-4 lg:mb-5
}
</style>
