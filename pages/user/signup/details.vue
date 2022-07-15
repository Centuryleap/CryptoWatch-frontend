<template>
  <Modal
    title="Sign in to your account"
    description="Enter you details to sign in to your account "
  >
    <div class="inputs w-full">
      <InputField type="email" placeholder="Email address" />
    </div>
  </Modal>
</template>

<script>
import InputField from "~/components/FormElements/InputField.vue";
import Modal from "~/components/Modals/Modal.vue";
export default {
  components: { Modal, InputField },
};
</script>

<style></style>
