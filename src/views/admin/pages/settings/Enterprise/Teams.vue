<script setup>
import Disclosure from "@/components/Disclosure.vue";
import { defineProps, onBeforeMount, onMounted, ref, watch } from "vue";
import ModalAddAgent from "./modals/ModalAddAgent.vue";
import ModalDeleteAgent from "./modals/DeleteAgent.vue";
import Button from "@/components/designSystem/Button.vue";
import { useAgentStore, useUser } from "@/stores";
import Badge from "@/components/designSystem/Badge.vue";
import Agent from "@/assets/images/agent.jpg";
import { Switch } from "@headlessui/vue";



let teams = ref([])

const {agents} = useAgentStore()
 onMounted(async()=> {
  if(agents?.length){
    teams.value = [...agents]?.map((_team)=>({..._team, isDisable: localStorage.getItem('authId')=== _team._id ? true : false}))
    console.log('mount',teams)
  }
 })
 
 

// watch(
//   () => agents,
//   () => {
//     teams.value = [...agents]?.map((_team)=>({..._team, isDisable: localStorage.getItem('authId')=== _team._id ? true : false}))
//     console.log('')
//   },
//   { immediate: true }
// );
const userStore =useUser()
const isOpen = ref(false);
const isOpenDelete = ref(false);
const selectedTeam = ref({});
const openModal = (team) => {
  if(team?._id){ selectedTeam.value = {...team}; console.log({team})}else{selectedTeam.value = {}}
  isOpen.value = !isOpen.value
};
const openModalDelete = (team) => {isOpenDelete.value = !isOpenDelete.value; selectedTeam.value = {...team}}
const toggleEnabled = async (team) => {
  const index = teams.value.findIndex(_team => _team._id === team._id);
  if (index !== -1) {
    teams.value[index] = { ...team, enabled: !team.enabled };
    await userStore.updateUserData({
       _id:team._id,
       enabled:teams?.value[index]?.enabled,
       name:team.name,
       firstname:team.firstname,
       type:team.type,
       profesionnalName:team.profesionnalName,
       gender:team.gender?._id || team.gender || "" ,
       adress:team.adress,
       dateOfBirth:team.dateOfBirth,
       email:team.email,
       CIN:team.CIN,
       phone:team.phone,
       NIF_STAT:team.NIF_STAT,
       deliveryPlace:team.deliveryPlace,
       deliveryPlace:team.deliveryPlace,
       deliveryDate: team.deliveryDate,
       googleSynchronisation:team.googleSynchronisation,
       facebookSynchronisation:team.facebookSynchronisation,
       language:team.language?._id || "en",
       "linkedin" : team.linkedin,
        "facebook" :team.facebook,
        "whatsapp" : team.whatsapp,
        "portfolio" : team.portfolio,
        "siteweb" : team.siteweb,
        "note" : team.note,
        role:team.role,
        permissions:team.permissions
      })
  }
};
const getAgent = (agent) => {
  let _teams = [...teams.value]
  const index = _teams.findIndex(_team => _team._id === agent._id); 
  if(index != -1){
    teams.value[index] = { ...agent,isDisable: localStorage.getItem('authId')=== agent._id ? true : false};
  }else{
    _teams.push({ ...agent,isDisable: localStorage.getItem('authId')=== agent._id ? true : false})

    teams.value = [..._teams]
  }
}

const deleteAgent = (agent) => {
  const updatedTeams = teams.value.filter(_team => _team._id !== agent._id);
  teams.value = updatedTeams;
}
console.log({teams:teams.value})
</script>
<template>
  <Disclosure>
    <template #title> Teams </template>
    <template #content>
      <!-- Liste des agents immobiliers travaillant pour l'entreprise
Responsabilités et rôles de chaque membre de l'équipe -->
      <div class="flex items-center space-x-4 mt-4">
        <button
          @click="openModal"
          class="rounded-full bg-lightbrown text-white w-8 h-8 flex items-center font-medium text-base justify-center"
        >
          <span>+</span>
        </button>
        <label class="text-blackgray font-medium text-base">Add a team</label>
      </div>
      <table class="mt-4 w-full table-fixed">
        <thead>
          <tr class="bg-gray-200">
            <th class="px-4 py-2 text-blackgray font-medium w-1/3 text-start">
              Photo
            </th>
            <th class="px-4 py-2 text-blackgray font-medium w-1/6 text-start">
              Status
            </th>
            <th class="px-4 py-2 text-blackgray font-medium w-1/6 text-start">
              Role
            </th>
            <th class="px-4 py-2 text-blackgray font-medium w-1/3 text-start">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Ajoutez ici la boucle pour afficher les équipes -->
          <tr v-if="!teams.length">
            <td colspan="4">
              <div
                className="font-normal text-xs text-blackgray py-1.5 text-center"
              >
                None
              </div>
            </td>
          </tr>
          <tr v-else v-for="team in teams" :key="team._id">
            <td class="text-blackgray font-medium p-2">
              <div class="flex items-center justify-start space-x-2">
                <div
                  class="shrink-0 w-10 h-10 rounded-full overflow-hidden shadow-lg border border-solid border-lightbrown"
                >
                  <img :src="Agent" class="bg-cover w-full h-full" />
                </div>
                <span class="text-blackgray font-medium">
                  {{ team.name }} {{ team.firstname }}</span
                >
              </div>
            </td>
            <td class="text-blackgray font-medium p-2">
              <Switch
                :checked="team.enabled"
                @click="() => toggleEnabled(team)"
                :class="team.enabled ? 'bg-lightbrown' : 'bg-[#d9b4a6]'"
                class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
              >
                <span
                  aria-hidden="true"
                  :class="team.enabled ? 'translate-x-9' : 'translate-x-0'"
                  class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                />
              </Switch>
            </td>
            <td class="text-blackgray font-medium p-2 text-center">
              <Badge :text="team.role" />
            </td>
            <td class="text-blackgray font-medium p-2">
              <div class="flex space-x-2">
                <Button type="button" color="success" class="w-32 h-14" @click="()=>openModal(team)" >
                  Update
                </Button>
                <Button  type="button" color="danger" class="w-32 h-14"  @click="()=>openModalDelete(team)" :disabled="team.isDisable">
                  Delete
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <ModalAddAgent :isOpen="isOpen" @clickCancel="openModal" :team="selectedTeam" @getAgents="getAgent" />
      <ModalDeleteAgent :isOpen="isOpenDelete" @clickCancel="openModalDelete" :team="selectedTeam" @deleteAgent="deleteAgent" />
    </template>
  </Disclosure>
</template>
