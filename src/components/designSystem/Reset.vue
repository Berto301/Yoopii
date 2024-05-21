<script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    disable:{
        type:Boolean,
        default:false
    },
    show:{
        type:Boolean,
        default:false
    }
  });
  </script>
  
<template>
    <div
      v-if="show"
      :class="`absolute top-1/2 right-2.5 flex -translate-y-1/2 -mt-[0.5px] cursor-pointer  items-center justify-center rounded-full w-4 h-4 p-1 hover:bg-gray-200 hover:text-black ${disable ?'pointer-events-none':'cursor-pointer'} `"
    >
      <span class="text-base mt-[1.5px]">  
      x
      </span>
    </div>
</template>