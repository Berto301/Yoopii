<script setup>
import { defineProps, ref, watch, defineEmits } from "vue";
import Modal from "@/components/designSystem/Modal.vue";
import {  useNotification, useUser,useErrors } from "@/stores";

const props = defineProps({
  team:Object,
  isOpen: Boolean,
});
const agentStore = useUser();
const { showError, showSuccess } = useNotification();
const errors = useErrors();
const userData = ref({

});
const $emit = defineEmits(["clickCancel","deleteAgent"]);

const onClickDelete = async () => {
  try {
    agentStore.deleteAgent(props?.team._id)
    
    showSuccess('Agent deleted succesfully')
    $emit('deleteAgent',props?.team)
    $emit('clickCancel')
  } catch (error) {
    console.log("Error on Delete agent - Global:", error);
    showError('An error occured')
  }
};
</script>
<template>
  <Modal
    :isOpen="isOpen"
    submitText="Delete"
    submitColor="danger"
    @clickSave="onClickDelete"
    @clickCancel="$emit('clickCancel')"
  >
    <template #forms>
      <div class="text-blackgray text-2xl font-medium p-2"> 
           Are you sure to delete this agent?
      </div>
    </template>
  </Modal>
</template>
