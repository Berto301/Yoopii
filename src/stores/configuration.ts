import { MUTATE_INSERT_CONFIGURATION, GET_CONFIGURATION_INFO } from './../graphql';
import { defineStore } from 'pinia'
import apolloClient from "../plugins/apollo";
import {  ref } from 'vue';
import { MUTATE_UPDATE_CONFIGURATION } from '@/graphql/configuration';


export const useConfiguration = defineStore('configuration', () => {
    const currentConfiguration = ref()
    
    async function getInfo(id:string) {
      const {getConfigById} = (await apolloClient.query({
        query:GET_CONFIGURATION_INFO,
        variables:{
          id 
        }
      })).data
      if(!getConfigById) return
      currentConfiguration.value = getConfigById
    }
    async function insert(data:object){
      try {   
        const {createConfiguration} = (await apolloClient.mutate({
          mutation:MUTATE_INSERT_CONFIGURATION,
          variables:{
            data
          }
        })).data 
        if(!createConfiguration) return
      } catch (error) {
        console.log("error on insert configuration",error)
      }
    }

    async function update(data:object){
      try {   
        const {updateConfiguration} = (await apolloClient.mutate({
          mutation:MUTATE_UPDATE_CONFIGURATION,
          variables:{
            data
          }
        })).data 
        console.log({updateConfiguration})
      } catch (error) {
        console.log("error on update configuration",error)
      }
    }
    return {insert,getInfo,update, currentConfiguration}
  })
  