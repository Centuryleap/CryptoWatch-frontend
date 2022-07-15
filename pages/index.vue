<template>
  <div></div>
</template>

<script>
export default {
  name: 'IndexPage',

  middleware({ app, redirect }) {
    redirect(app.$dashboard("home"));
  }
}
</script>
