<script setup>
  import { defineProps } from 'vue';

  import Reset from './Reset.vue'
  
  const props = defineProps({
    bgColor: {
      type: String,
      default: "#9D5D43"
    },
    text: String,
    showDelete:{
        type:Boolean,
        default:false
    }
  });
  </script>
  
<template>
    <div class="relative">
        <p
          :class="'text-base  flex justify-center  items-center mb-0 truncate rounded-full px-8 py-1 text-white   font-medium bg-['+bgColor+'] max-w-[150px]'"
        >
            {{ text }}
          
        </p>
        <Reset :show="showDelete"/>
    </div>
</template>
  
  