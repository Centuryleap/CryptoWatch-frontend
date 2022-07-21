<template>
  <div class="max-w-[1020px]">
    <div class="card">
      <h4>Get even faster notification <br class="hidden md:block"> with the mobile app Get the app</h4>

      <button class="bg-primary-3 rounded-full text-xs lg:text-sm font-medium font-white lg:leading-[24px] py-2.5 lg:py-[11px] px-4 lg:px-[18.5px] mt-8 lg:mt-10">
        Get the app
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardSettings",
  title: "Settings",
  layout: "dashboard",
};
</script>

<style lang="postcss" scoped>
.card {
  @apply rounded-3xl bg-[#010923] px-6 md:px-7 lg:px-8 pt-7 md:pt-8 lg:pt-10 pb-6 lg:pb-8 font-medium text-lg xl:text-2xl xl:leading-[36px] text-white
}
</style>
