<template>
  <ValidationProvider :name="name" :rules="rules" v-slot="{ errors }">
    <slot></slot>
    <div class="text-red-500 text-xs mt-2 ml-4">
      {{ errors[0] }}
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

<style></style>
