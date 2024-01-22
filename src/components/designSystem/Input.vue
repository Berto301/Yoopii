<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: String,
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <input
        ref="input"
        class="border-gray-300 rounded-md w-full shadow-sm py-[0.4rem] pl-3 pr-10"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >
</template>
