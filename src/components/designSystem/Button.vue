<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
    color:{
        type:String,
        default:"primary"
    }
});
const COLORS={
    primary:"bg-gray-800 hover:bg-gray-700",
    secondary:"bg-[#6c757d] hover:bg-[#51575d] focus:bg-[#51575d] active:bg-[#51575d] focus:outline-none focus:ring-2  focus:ring-offset-2",
    danger:"bg-[#dc3545] hover:bg-[#c82333] active:bg-[#c82333] focus:outline-none focus:ring-2 focus:ring-[#c82333] focus:ring-offset-2",
    success:"bg-[#49c5b6] hover:bg-[#27b9a9] focus:bg-[#27b9a9] active:bg-[#27b9a9] focus:outline-none focus:ring-2  focus:ring-offset-2"
}
</script>


<template>
    <button :type="type" :class="'items-center px-4 py-2  border border-transparent rounded-md font-semibold text-[14px] text-white  w-full tracking-widest transition ease-in-out duration-150 '+COLORS[color]">
        <slot />
    </button>
</template>
