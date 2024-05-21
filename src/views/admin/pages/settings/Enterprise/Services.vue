<script setup>
import Disclosure from "@/components/Disclosure.vue"
import Badge from "@/components/designSystem/Badge.vue"
import { defineProps, ref, watch, defineEmits } from "vue";
import Input from "@/components/designSystem/Input.vue"
import Button from "@/components/designSystem/Button.vue";
import { useNotification } from "@/stores";

const props = defineProps({
  authAgency: Object,
});

const emit = defineEmits(['update:authAgency']);
const {showError,showSuccess} = useNotification()
const agencyData = ref({});
const newService = ref("")
const newServiceError = ref(false)
watch(
  () => props.authAgency,
  () => {
    Object.assign(agencyData.value, props.authAgency);
  },
  { immediate: true }
);
const onChangeNewService = ( e) => {
   newService.value = e.target.value;
   newServiceError.value = false
};
const onAddService = () => {
  const newServiceTrimmed = newService.value.trim();
  
  if (newServiceTrimmed) {
    const _newService = newServiceTrimmed.toLowerCase();
    const services = [...agencyData.value.services];
    
    if (!services.includes(_newService)) {
      services.push(_newService);
      agencyData.value.services = [...services];
      emit("update:authAgency", agencyData.value);
      showSuccess("Service added successfully");
    } else {
      newServiceError.value = true;
      showError("Service already exists");
    }
   } else {
      newServiceError.value = true;
      showError("Please add a service");
   }
}
const onDeleteService = (service) => {
  const services = [...agencyData.value.services];
  
  if (services.includes(service)) {
    const updatedServices = services.filter(_serv => _serv !== service.toLowerCase());
    agencyData.value.services = [...updatedServices];
    emit("update:authAgency", agencyData.value);
    showSuccess("Service deleted successfully");
  }
}
</script>
<template>
   <Disclosure>
      <template #title> Services </template>
      <template #content>
        <!-- Gestion de service 
        Services immobiliers fournis par l'entreprise (vente, location, gestion, etc.) -->
        <div class="flex flex-col space-y-2"> 
          <div class="w-[60%] grid grid-cols-2 grid-rows-[auto] gap-x-[2.375rem] gap-y-[0.688rem]">
            <Input
               placeholder="Service"
               className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2" 
               v-model="newService"
               :invalid="Boolean(newServiceError)"
               @input="onChangeNewService"
            /> 
            <Button type="button" color="light" class="w-56" @click="onAddService">
               Add
            </Button>
          </div> 
          <div class="flex flex-wrap space-x-2"> 
             <Badge 
               v-for="service in agencyData.services"
               :key="service"
               :text="service"
               showDelete
               @click="onDeleteService(service)"
             />
          </div>
        </div>
      </template>
   </Disclosure> 
</template>