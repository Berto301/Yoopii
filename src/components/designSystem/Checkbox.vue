<script setup>
defineProps({
    id: String,
    label: String,
    value: String,
    // checked:{
    //     type: Boolean,
    //     default:false
    // }
});
</script>

<template>
    <div class="flex items-center space-x-2"> 
        <input
             :id="id"
             :value="value"
             type="checkbox"
             class="relative  h-6 w-6 shrink-0 appearance-none border border-solid bg-white before:absolute before:left-1/2 before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-transparent before:content-[''] rounded-md before:rounded-md"
           />
        <label v-if="label" class="text-blackgray font-medium text-base"> 
           {{ label }}
        </label>
    </div>
</template>
<style scoped>
/* styles for :checked pseudo-element */
input[type="checkbox"].checked:checked + .before {
  background-color: #9D5D43;
}
</style>
