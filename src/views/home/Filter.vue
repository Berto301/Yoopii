<script setup>
import ListBox from "../../components/designSystem/ListBox.vue"
import Button from "../../components/designSystem/Button.vue"
import Input from "../../components/designSystem/Input.vue"
const KEYS = [
  {
    _id: "locatio",
    name: "Location 1",
  },
  {
    _id: "location 2",
    name: "Location 2",
  }
];
</script>

<template>
  <div class="flex space-x-4 items-center justify-between bg-lightbrown mt-4 p-4 m-8">
    <Input placeholder="keywords" />
    <ListBox 
      :lists="KEYS"
      :selected="KEYS[0]"
    />
    <ListBox :lists="KEYS"  :selected="KEYS[0]"/>
    <Button type="button" color="black">
      Search
    </Button>
  </div>
</template>