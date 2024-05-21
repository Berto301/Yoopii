
import { defineStore } from 'pinia'
import {GET_AGENTS, MUTATE_INSERT_AGENT } from './../graphql/';
import apolloClient from '@/plugins/apollo';
import { ref } from 'vue';
import { socket } from '@/socket';

export const useAgentStore = defineStore('agent', () => {
  const agents = ref([])
  
    async function insert(data:object){
        try {   
          const {createAgent} = (await apolloClient.mutate({
            mutation:MUTATE_INSERT_AGENT,
            variables:{
              createAgentInput:data
            }
          })).data 
        } catch (error) {
          console.error("error on insert agent",error)
        }
      }
    async function getAgents(id:string) {
        const {getAgents:result} = (await apolloClient.query({
          query:GET_AGENTS,
          variables:{
            id 
          }
        })).data
        if(!result) return
        agents.value = result
      }
    return {insert,getAgents,agents}
})
