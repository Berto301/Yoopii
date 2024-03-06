<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()
 onMounted(()=>{
   router.push(localStorage.getItem("token") ? "/admin/dashboard":"sign-in")
 })
</script>
<template>
   <router-view/>
</template>
