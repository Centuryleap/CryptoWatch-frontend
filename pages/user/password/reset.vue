<template>
  <Modal
    title="Reset password"
    description="Create a new password to sign into your account"
  >
    <div class="inputs w-full mt-9 lg:mt-12 space-y-4 lg:space-y-5">
      <InputField type="password" placeholder="Enter password" />
      <InputField type="password" placeholder="Confirm password" />
    </div>

    <ActionButton class="mt-10 lg:mt-14 mb-5" to="/user/login"> Continue </ActionButton>
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

<style lang="postcss" scoped>
.hint {
  @apply mt-3 lg:mt-4 text-xs lg:text-sm font-light text-text-3;
}
</style>
