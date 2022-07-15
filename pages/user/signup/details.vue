<template>
  <Modal
    title="Create an account"
    description="Create an account to get started started"
  >
    <div class="inputs w-full mt-9 lg:mt-12 space-y-5">
      <InputField type="email" placeholder="Email address" />
      <InputField type="password" placeholder="Password" />
      <InputField type="password" placeholder="Confirm password" />
    </div>

    <ActionButton class="mt-8 lg:mt-10"> Continue </ActionButton>
  </Modal>
</template>

<script>
import InputField from "~/components/FormElements/InputField.vue";
import ActionButton from "~/components/FormElements/ActionButton.vue";
import Modal from "~/components/Modals/Modal.vue";
export default {
  components: { Modal, InputField, ActionButton },
};
</script>

<style></style>
