<template>
  <div class="dashboard">
    <Sidenav />

    <section class="">
      <TopBar class="lg:sticky top-0 z-50 px-6 lg:pr-0 lg:pl-7 xl:pl-8" />

      <main class="px-6 lg:pr-0 lg:pl-7 xl:pl-8">
        <div class="flex-grow min-h-full pt-6">
          <nuxt />
        </div>
      </main>
    </section>
    <BottomNavigation class="lg:hidden" />
  </div>
</template>

<script>
// import TopBar from "../components/TopBar.vue";
export default {
  // components: { TopBar },
};
</script>

<style lang="postcss" scoped>
.dashboard {
  background-image: #FAFAFA;
}

section {
  @apply lg:ml-[108px] xl:ml-[124px] lg:mr-10 xl:mr-[50px] 2xl:mr-[60px];

  main {
    min-height: calc(100vh - 80px);

    @screen lg {
    min-height: calc(100vh - 92px);
    }

    @screen xl {
    min-height: calc(100vh - 100px);
    }
  }
}
</style>
