<script setup>
import ListBox from "@/components/designSystem/ListBox.vue";
import Label from "@/components/designSystem/Label.vue";
import Input from "@/components/designSystem/Input.vue";
import { onBeforeMount, ref } from "vue";
import Button from "@/components/designSystem/Button.vue";
import moment from "moment-timezone";
import {getUtcTimeZone,getDeviseLists} from "@/helpers/_functions"
import { useNotification,useConfiguration } from "@/stores";
import {FORMAT} from '@/helpers/_constants'


const timeZoneLists = ref()
const deviseLists = ref()
const {currentConfiguration} = useConfiguration()
const state = ref({
  format:FORMAT[0],
  taux:'',
  timezone:timeZoneLists[0],
  devise:deviseLists[0]
})

onBeforeMount(()=>{
  let timezoneList = moment.tz.names();
  let lists = timezoneList.map((timezone) => {
      const utcTimezone = getUtcTimeZone(timezone);
      const timezoneValue = {
        name: utcTimezone,
        _id: timezone
      };
      return timezoneValue;
  });
  timeZoneLists.value = lists
  if(currentConfiguration) {
  state.value.timezone = lists?.find((item)=>item._id === currentConfiguration.timezone)
 }
})

onBeforeMount( ()=>{
 const lists =  getDeviseLists()
 deviseLists.value = lists
 if(currentConfiguration) {
  state.value.devise = lists?.find((item)=>item._id === currentConfiguration.devise)
 }
})

onBeforeMount( ()=>{
  if(currentConfiguration.taux) state.value.taux = currentConfiguration.taux
  if(currentConfiguration.format) state.value.format = FORMAT?.find((item)=>item._id === currentConfiguration.format)
})

// onBeforeMount(()=>{
 
// })
const _useConfiguration =useConfiguration()
const {showSuccess} = useNotification()
const getSelected = (params, key) => {
  state.value[key] = params
}
const onUpdate = ()=> {
  _useConfiguration.update({
    _id:currentConfiguration._id,
    userId: localStorage.getItem("authId"),
    format: state.value.format?._id ?? FORMAT[0]._id,
    timezone: state.value.timezone?._id ?? 'UTC',
    devise: state.value.devise?._id ?? 'MGA',
    taux: parseFloat(state.value.taux) || 0
  })
  showSuccess("Configuration updated succesfully")
}
</script>
<template>
  <div class="w-full flex flex-col space-y-3 rounded-md shadow-lg p-4 bg-white">
    <div class="font-medium text-blackgray text-2xl">Configuration de base</div>
    <div class="flex">
      <div class="flex flex-col space-y-1 w-56 mr-3">
        <Label value="Devise" />
        <ListBox 
        :lists="deviseLists"
        :selected="state.devise"
        @handle-click="(elem)=>getSelected(elem,'devise')"
        />
      </div>
      <div class="flex flex-col space-y-1 w-56 mr-3">
        <Label value="Timezone" />
        <ListBox 
        :lists="timeZoneLists"
        :selected="state.timezone"
        @handle-click="(elem)=>getSelected(elem,'timezone')"
        />
      </div>
    </div>
    <div class="flex">
      <div class="flex flex-col space-y-1 w-56 mr-3">
        <Label value="Taux" />
        <Input
          placeholder="Taux"
          v-model="state.taux"
          class="h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md shadow-sm py-[0.4rem] pl-3 pr-10"
        />
      </div>
      <div class="flex flex-col space-y-1 w-56 mr-3">
        <Label value="Format d'affichage d'heure" />
        <ListBox 
        :lists="FORMAT"
        :selected="state.format"
        @handle-click="(elem)=>getSelected(elem,'format')"
        />
      </div>
    </div>
    <Button type="button" color="light" class="w-56 h-14" @click="onUpdate">
          Update
      </Button>
  </div>
</template>
