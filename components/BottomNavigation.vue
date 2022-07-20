<template>
  <nav>
    <div class="nav-container between">
      <template v-for="menuitem in $store.getters.menu">
        <NuxtLink :key="menuitem.title" :to="menuitem.route" class="col-center">
          <Icon
            :src="
              isCurrentRoute(menuitem.route)
                ? menuitem.iconActive
                : menuitem.iconInactive
            "
            width="24px"
          />
          <span>
            {{ menuitem.title }}
          </span>
        </NuxtLink>
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    isCurrentRoute(route) {
      /**
       * We're using the startsWith() method so the selection
       * can work for nested routes.
       *
       * We also use the replace() method to remove trailing forward-slashes.
       */
      return this.$route.path.startsWith(route.replace(/\/$/, ""));
    },
  },
};
</script>

<style lang="postcss" scoped>
nav {
  @apply fixed bottom-0 right-0 left-0 bg-white px-10 py-[18px] lg:hidden;
  box-shadow: 0px -2px 16px rgba(0, 0, 0, 0.08);
}

a {
  span {
    @apply text-text-3 text-[10px] mt-[5px];
  }
  &.nuxt-link-exact-active {
    > span {
      @apply text-primary-2;
    }
  }
}
</style>
