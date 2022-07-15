<template>
  <div class="text-3xl">
    Home!

    <Modal title="Sign in to your account" description="Enter you details to sign in to your account "></Modal>
  </div>
</template>

<script>
import Modal from "~/components/Modals/Modal.vue";
export default {
  name: "IndexPage",
  components: {
    Modal,
  },
}
</script>

<style>

</style>