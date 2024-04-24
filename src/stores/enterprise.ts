import { GET_ENTERPRISE_INFO } from './../graphql/enterprise';
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
    return {getInfo , currentAgency}
  })
  