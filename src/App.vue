<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()
 onMounted(()=>{
  const token = localStorage.getItem("token");
  const path = localStorage.getItem("path");
  const redirectTo = token ? "/admin/dashboard" : path ? path : "/";
  router.push(redirectTo);
 })
</script>
<template>
   <router-view/>
</template>
