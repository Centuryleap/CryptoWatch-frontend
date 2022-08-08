<template>
  <div></div>
</template>

<script>
export default {
  middleware({ app, redirect }) {
    redirect(app.$dashboard("home"));
  }
}
</script>

<style>

</style>