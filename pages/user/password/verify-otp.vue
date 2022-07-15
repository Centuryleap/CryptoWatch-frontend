<template>
  <Modal
    title="Enter OTP"
    description="Enter the one time password (OTP) sent to your email address"
  >
    <div class="inputs w-full mt-12 lg:mt-16">
      <InputField otp />
    </div>

    <ActionButton class="mt-8 lg:mt-10" to="/user/password/reset"> Verify </ActionButton>

    <div class="hint">
      <Link to="/user/password/recover">Back</Link>
    </div>
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
  @apply mt-3 lg:mt-4 text-xs lg:text-sm font-light text-text-3 mb-6 lg:mb-9;
}
</style>
