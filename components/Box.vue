<template>
  <div class="space-y-3 lg:space-y-4">
    <h5 class="font-light text-sm lg:text-base lg:leading-[24px] text-[#01071D]">
      {{ title }}
    </h5>

    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style></style>
