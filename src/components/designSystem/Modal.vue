<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
                v-if="title"
              >
                {{ title }}
              </DialogTitle>
              <div class="mt-2">
                <slot name="forms"></slot>
              </div>

              <div class="mt-4 flex justify-end space-x-2">
                <Button
                  type="button"
                  color="primary"
                  class="px-4 py-2"
                  @click="$emit('clickCancel')"
                >
                  {{ cancelText }}
                </Button>
                <Button
                  type="button"
                  :color="submitColor"
                  class="px-4 py-2"
                  @click="$emit('clickSave')"
                >
                  {{ submitText }}
                </Button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, defineProps } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import Button from "./Button.vue";

defineProps({
  cancelText: {
    type: String,
    default: "Cancel",
  },
  title: {
    type: String,
    default: "",
  },
  submitText: {
    type: String,
    default: "Save"
  },
  submitColor: {
    type: String,
    default: "success",
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
});
const $emit = defineEmits(["clickSave", "clickCancel"]);
</script>
