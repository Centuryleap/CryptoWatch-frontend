<template>
  <nav>
    <div class="nav-container divide-y divide-[#CCCCCC]">
      <div class="top px-[15px]">
        <div class="logo pb-[25px]">
          <Icon src="logo" />
        </div>
      </div>

      <div class="bottom col-center space-y-14 pt-9">
        <template v-for="menuitem in $store.getters.menu">
          <NuxtLink :key="menuitem.title" :to="menuitem.route">
            <Icon
              :src="
                isCurrentRoute(menuitem.route)
                  ? menuitem.iconActive
                  : menuitem.iconInactive
              "
              width="24px"
            />
          </NuxtLink>
        </template>
      </div>
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
  @apply fixed top-0 bottom-0 left-0 bg-white px-[13px] pt-9;
  border-radius: 0px 24px 24px 0px;

  a {
    @apply relative;

    &::after {
      content: "";
      position: absolute;
      width: 0%;
      height: 2px;
      background-color: #072692;
      bottom: -8px;
      left: 0px;
      border-radius: 2px;
      transition: all 0.2s ease-in-out;
    }

    &.nuxt-link-exact-active {
      &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #072692;
      bottom: -8px;
      left: 0px;
      border-radius: 2px;
      transition: all 0.2s ease-in-out;
    }
    }
  }
}
</style>
