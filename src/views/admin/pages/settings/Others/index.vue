<script setup>
import ListBox from "@/components/designSystem/ListBox.vue";
import Label from "@/components/designSystem/Label.vue";
import Input from "@/components/designSystem/Input.vue";
const DEVISE_LIST = [
  {
    _id: "MGA",
    name: "MGA",
  },
  {
    _id: "EU",
    name: "EURO",
  },
  {
    _id: "USD",
    name: "USD",
  },
];

const TIMEZONE = [
  {
    _id: "utc+1",
    name: "utc+1",
  },
  {
    _id: "utc+2",
    name: "utc+2",
  },
  {
    _id: "utc+3",
    name: "utc+3",
  },
];
const FORMAT = [
  {
    _id: "dd/mm/yyyy",
    name: "jour/mois/annee",
  },
  {
    _id: "dd-mm-yyyy",
    name: "jour mois annee",
  },
  {
    _id: "yyyy, dd mm",
    name: "Annee, jour mois",
  },
];
</script>
<template>
  <div class="w-full flex flex-col space-y-3 rounded-md shadow-lg p-4 bg-white">
    <div class="font-medium text-blackgray text-2xl">Configuration de base</div>
    <div class="flex">
      <div class="flex flex-col space-y-1 w-56 mr-3">
        <Label value="Devise" />
        <ListBox 
        :lists="DEVISE_LIST"
        :selected="DEVISE_LIST[0]"
        />
      </div>
      <div class="flex flex-col space-y-1 w-56 mr-3">
        <Label value="Timezone" />
        <ListBox 
        :lists="TIMEZONE"
        :selected="TIMEZONE[0]"
        />
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
        <ListBox 
        :lists="FORMAT"
        :selected="FORMAT[0]"
        />
      </div>
    </div>
  </div>
</template>
