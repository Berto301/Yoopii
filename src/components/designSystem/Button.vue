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
    primary:"bg-gray-800 hover:bg-gray-700 border-transparent text-white",
    secondary:"bg-[#6c757d] hover:bg-[#51575d] focus:bg-[#51575d] active:bg-[#51575d] focus:outline-none focus:ring-2  focus:ring-offset-2 border-transparent text-white",
    danger:"bg-[#dc3545] hover:bg-[#c82333] active:bg-[#c82333] focus:outline-none focus:ring-2 focus:ring-[#c82333] focus:ring-offset-2 border-transparent text-white",
    success:"bg-[#49c5b6] hover:bg-[#27b9a9] focus:bg-[#27b9a9] active:bg-[#27b9a9] focus:outline-none focus:ring-2  focus:ring-offset-2 border-transparent text-white",
    light:"bg-[#9D5D43] hover:bg-[#a3543b] focus:bg-[#a3543b] active:bg-[#a3543b] focus:outline-none focus:ring-2  focus:ring-offset-2 border-transparent text-white",
    black:"bg-[#000000] hover:bg-[#191617] focus:bg-[#191617] active:bg-[#191617] focus:outline-none focus:ring-2  focus:ring-offset-2 border-transparent text-white ",
    white: "bg-white text-[#9D5D43] border-[#9D5D43]"
}
</script>


<template>
    <button :type="type" :class="'items-center px-4 py-2  border  rounded-md font-semibold text-[14px]  outline-none  tracking-widest transition ease-in-out duration-150 '+COLORS[color]">
        <slot />
    </button>
</template>
