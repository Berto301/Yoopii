import { defineStore } from 'pinia'
import { MUTATE_LOGIN } from "@/graphql/index.ts";
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
          localStorage.setItem("token", `Bearer ${login.token}`);
          console.log({user:login.user})
          localStorage.setItem("user", JSON.stringify(login.user));
          currentUser.value = login.user
          await apolloClient.resetStore();
          router.push("/admin/dashboard")
        } catch (error) {
          console.error("Error during sign-in:", error);
        }
    }

    async function logout() {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          currentUser.value = null;
          router.push('/sign-in')
          await apolloClient.resetStore();

      }
    return {login , userConnected:currentUser,logout}
  })
  