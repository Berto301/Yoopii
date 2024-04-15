import { defineStore } from 'pinia'
import { MUTATE_LOGIN,MUTATE_INSERT_USERS, MUTATE_INSERT_USERS_AND_ENTERPRISE, GET_ENTERPRISE_BY_USER_ID, GET_USER_ID } from "@/graphql/index.ts";
import apolloClient from "../plugins/apollo";
import gql from "graphql-tag";
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';


export const useAuth = defineStore('auth', () => {
    const currentUser = ref()
    const router = useRouter();
   
   
    async function login (user:Object){
        try {
            const { login } = (await apolloClient.mutate({
                mutation: MUTATE_LOGIN,
                variables:{
                    user
                }
            })).data;
          if (!login) return;
          const authorizationHeader = `Bearer ${login.token}`;
          localStorage.setItem("token", authorizationHeader);
          localStorage.setItem("user", JSON.stringify(login.user));
          localStorage.setItem("authId", login.user._id);
          currentUser.value = login.user
          await apolloClient.resetStore();
          if(login.user.type==="agency" && login.user._id){
            const {getUser} = (await apolloClient.query({
              query:GET_USER_ID,
              variables:{
                userId :login.user._id
              }
            })).data
            if(!getUser) return
            if(getUser?.enterprise._id){
              localStorage.setItem("enterpriseId",getUser?.enterprise._id)
              // const {getEnterpriseByUser} = (await apolloClient.query({
              //   query:GET_ENTERPRISE_BY_USER_ID,
              //   variables:{
              //     userId :getUser?.enterprise._id
              //   }
              // })).data
              // console.log({getEnterpriseByUser})
              // localStorage.setItem("enterpriseId","")
              // if(!getEnterpriseByUser) return
            }
          }
          router.push("/admin/dashboard")
        } catch (error) {
          console.error("Error during sign-in:", error);
        }
    }
    async function register (name:String,email:String,password:String,accountType:String){
      try {
         const {createUser} = (await apolloClient.mutate({
          mutation:MUTATE_INSERT_USERS,
          variables:{
            name,
            email,
            password,
            type:accountType
          }
         }))?.data

         if (!createUser) return;
         router.push("/sign-in");
      } catch (error) {
        console.error("Error during sign-up:", error);
      }
    }

    async function registerAsEnterprise (name:String,email:String,password:String,accountType:String,enterpriseEmail:String,enterpriseName:String){
      try {
         const {createUserAndEnterprise} = (await apolloClient.mutate({
          mutation:MUTATE_INSERT_USERS_AND_ENTERPRISE,
          variables:{
            name,
            email,
            password,
            type:accountType,
            enterpriseEmail,
            enterpriseName
          }
         }))?.data

         if (!createUserAndEnterprise) return;
         router.push("/sign-in");
      } catch (error) {
        console.error("Error during sign-up:", error);
      }
    }
    async function logout() {
          localStorage.clear()
          currentUser.value = null;
          router.push('/sign-in')
          await apolloClient.resetStore();

      }
    return {login , userConnected:currentUser,logout,register,registerAsEnterprise}
  })
  