<script setup>
import Performance from "./Performance.vue";
import PortFolio from "./PortFolio.vue";
import Note from "./NoteClient.vue";
import TransactionList from "./TransactionLists.vue"
import PropretyList from "./PropretyList.vue"
</script>
<template>
  <div class="flex flex-col space-y-4 min-h-[calc(100vh-12rem)]">
    <div class="flex flex-wrap w-full justify-between">
      <Performance />
      <PortFolio />
      <Note />
    </div>
    <div class="flex flex-wrap w-full justify-between">
        <TransactionList/>
        <PropretyList/>
    </div>
  </div>
</template>
