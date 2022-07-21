<template>
  <div class="dashboard">
    <Sidenav />

    <section class="">
      <TopBar class="lg:sticky top-0 z-50 px-6 lg:pr-0 lg:pl-7 xl:pl-8" />

      <main class="px-6 lg:pr-0 lg:pl-7 xl:pl-8">
        <div class="flex-grow min-h-full pt-6 pb-24 lg:pb-6">
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
  @apply lg:ml-24 lg:mr-6;

  main {
    min-height: calc(100vh - 85px);

    @screen lg {
    min-height: calc(100vh - 100px);
    }

    @screen xl {
    min-height: calc(100vh - 104px);
    }
  }
}
</style>
