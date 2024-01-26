<script setup>
import IconSales from "./icons/IconSales.vue"
defineProps({
    details:Object
})
</script>
<template>
    <div class="px-4 py-6 w-1/5 bg-white shadow-lg rounded-lg flex flex-col space-y-4">
        <div class="flex flex-col space-y-1">
            <span class="text-sm font-medium text-greyColor">{{ details?.description }}</span>
            <span class="text-lg font-semibold text-black">{{ details?.value }}</span>
        </div>
        <div class="flex items-center justify-center">
            <span class="w-12 h-12"> 
                <slot name="image"></slot>
            </span>
        </div>
    </div>
</template>