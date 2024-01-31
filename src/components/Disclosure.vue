<template>
  <Disclosure v-slot="{ open }">
    <DisclosureButton
      class="flex w-full justify-between rounded-lg bg-white p-8 text-left text-sm font-medium"
    >
      <span class="font-medium text-blackgray text-2xl"> <slot name="title"></slot></span>
      <div
        :class="open ? 'rotate-90' : 'rotate-0'"
        class="h-10 w-10 cursor-pointer transform transition-transform duration-300"
      >
        <IconLeft />
      </div>
    </DisclosureButton>
    <DisclosurePanel class="px-10 py-8  bg-white rounded-md shadow-lg transform transition-transform duration-300">
      <slot name="content"></slot>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import IconLeft from "./icons/IconLeft.vue";
</script>
