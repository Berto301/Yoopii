import { GET_AUTH_INFO, MUTATE_DELETE, MUTATE_UPDATE_AUTH_PASSWORD, MUTATE_UPDATE_USERS } from './../graphql/user';
import { defineStore } from 'pinia'
// import { GET_USER_INFO} from "@/graphql/";
import apolloClient from "../plugins/apollo";
import {  ref } from 'vue';


export const useUser = defineStore('user', () => {
    const currentUser = ref()
    
    async function getInfo(id:string) {
      const {getAuthInfo} = (await apolloClient.query({
        query:GET_AUTH_INFO,
        variables:{
          id 
        }
      })).data
      if(!getAuthInfo) return
      currentUser.value = getAuthInfo
      // const {getUserInfo} = (await apolloClient.query({
      //       query:GET_USER_INFO,
      //       variables:{
      //         user:getAuthInfo
      //       }
      //     })).data
      //     if(!getUserInfo) return
      //    currentUser.value = getUserInfo
    }
    async function updateUserData(user:object){
      try {   
        const {updateUser} = (await apolloClient.mutate({
          mutation:MUTATE_UPDATE_USERS,
          variables:{
            user
          }
        })).data 
      } catch (error) {
        console.log("error on update auth",error)
      }
    }
    async function updateUserPassword(data:object){
      try {   
        const {updatePassword} = (await apolloClient.mutate({
          mutation:MUTATE_UPDATE_AUTH_PASSWORD,
          variables:{
            data
          }
        })).data 
      } catch (error) {
        console.log("error on update auth password",error)
      }
    }
    async function deleteAgent(id:string){
      try {   
        const {delete:statusDeleted} = (await apolloClient.mutate({
          mutation:MUTATE_DELETE,
          variables:{
            id
          }
        })).data 
      } catch (error) {
        console.log("error on delete auth password",error)
      }
    }
    
    return {getInfo , updateUserData, updateUserPassword,deleteAgent, currentUser}
  })
  