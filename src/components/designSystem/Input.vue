<script setup>
import { defineProps, defineEmits, defineExpose, onMounted, onUpdated, ref, onBeforeMount, reactive } from 'vue';

// Define component props
const props = defineProps({
    modelValue: String,
    className: {
        type: String,
        default: "border-gray-300 rounded-md w-full shadow-sm py-[0.4rem] pl-3 pr-10"
    },
    invalid: {
        type: Boolean,
        default: false
    }
});

// Get a reference to the emit function
const emit = defineEmits(['update:modelValue']);

// Initialize references for the input field and the validity state
const inputRef = ref(null);
const state = reactive({
  invalid: props.invalid
});

onBeforeMount(() => {
    state.invalid = props.invalid;
});
 
onMounted(() => {
    if (inputRef.value.hasAttribute('autofocus')) {
        inputRef.value.focus();}
});

onUpdated(() => {
    state.invalid = props.invalid
});

const onUpdate = (event) => {
    state.invalid = false;
    emit('update:modelValue', event.target.value);
};

defineExpose({ focus: () => inputRef.value.focus() });
</script>

<template>
    <input
        ref="inputRef"
        :class="['border h-14 placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md w-full shadow-sm py-[0.4rem] pl-3 pr-10', state.invalid ? '!border-invalidColor placeholder:!text-invalidColor text-invalidColor' : '']"
        :value="props.modelValue"
        @input="onUpdate"
    >
</template>