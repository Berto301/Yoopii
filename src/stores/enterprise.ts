import { GET_ENTERPRISE_INFO, MUTATE_UPDATE_AGENCY } from './../graphql/enterprise';
import { defineStore } from 'pinia'
import apolloClient from "../plugins/apollo";
import {  ref } from 'vue';


export const useAgency = defineStore('enterprise', () => {
    const currentAgency = ref()
    
    async function getInfo(id:string) {
      const {getEnterpriseInfo} = (await apolloClient.query({
        query:GET_ENTERPRISE_INFO,
        variables:{
          id 
        }
      })).data
      if(!getEnterpriseInfo) return
      currentAgency.value = getEnterpriseInfo
    }
    async function updateAgencyData(agency:object){
      try {   
        const {updateAgency} = (await apolloClient.mutate({
          mutation:MUTATE_UPDATE_AGENCY,
          variables:{
            agency
          }
        })).data 
      } catch (error) {
        console.log("error on update agency",error)
      }
    }
    return {getInfo ,updateAgencyData, currentAgency}
  })
  