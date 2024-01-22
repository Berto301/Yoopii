<script setup>
import ListBox from "../../components/designSystem/ListBox.vue"
import Button from "../../components/designSystem/Button.vue"
import Input from "../../components/designSystem/Input.vue"
</script>

<template>
  <div class="flex space-x-4 items-center justify-between bg-lightbrown mt-4 p-4 m-8">
    <Input placeholder="keywords" />
    <ListBox />
    <ListBox />
    <Button type="button" color="black">
      Search
    </Button>
  </div>
</template>