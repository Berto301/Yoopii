<script setup>
import ListBox from "@/components/designSystem/ListBox.vue";
import Label from "@/components/designSystem/Label.vue";
import Input from "@/components/designSystem/Input.vue";
</script>
<template>
  <div class="w-full flex flex-col space-y-3 rounded-md shadow-lg p-4 bg-white">
    <div class="font-medium text-blackgray text-2xl">Configuration de base</div>
    <div class="flex">
      <div class="flex flex-col space-y-1 w-56 mr-3">
        <Label value="Devise" />
        <ListBox />
      </div>
      <div class="flex flex-col space-y-1 w-56 mr-3">
        <Label value="Timezone" />
        <ListBox />
      </div>
    </div>
    <div class="flex">
      <div class="flex flex-col space-y-1 w-56 mr-3">
        <Label value="Taux" />
        <Input
          placeholder="Taux"
          class="h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md shadow-sm py-[0.4rem] pl-3 pr-10"
        />
      </div>
      <div class="flex flex-col space-y-1 w-56 mr-3">
        <Label value="Format d'affichage d'heure" />
        <ListBox />
      </div>
    </div>
  </div>
</template>
