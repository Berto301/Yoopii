<template>
    <div v-if="error" class="flex flex-col space-y-1" v-for="item in error" :key="item.field">
              <div v-if="item?.message" class="text-invalidColor font-normal text-xs">{{ item?.message.toString() }}</div>
    </div>
</template>

<script setup>
defineProps(['error'])
</script>