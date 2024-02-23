<script setup>
import Layout from "./Layout.vue";
import Input from "@/components/designSystem/Input.vue";
import Button from "@/components/designSystem/Button.vue";
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconGmail from "@/components/icons/IconGmail.vue";
import Listbox from "@/components/designSystem/ListBox.vue";
import { ref } from "vue";
import { useMutation } from "@vue/apollo-composable";
//import gql from "graphql-tag";
// import CREATE_USER_MUTATION from "../../graphql/mutations.gql"
import { MUTATE_INSERT_USERS } from "@/graphql/index.ts";
import { useRouter } from "vue-router";
const TYPE_LIST = [
  {
    _id: "user",
    name: "User only",
  },
  {
    _id: "agent_independent",
    name: "Independent agent",
  },
  {
    _id: "agency",
    name: "Agency",
  },
];
const router = useRouter();
const users = ref({
  name: "",
  email: "",
  password: "",
  accountType: TYPE_LIST[0],
});
const enterprise = ref({
  name: "",
  email: "",
});
const getSelected = (params) => {
  users.value.accountType = params;
};

const { mutate, onDone } = useMutation(MUTATE_INSERT_USERS);

const register = async () => {
  try {
    // Appelez la fonction mutate avec les variables nécessaires
    const result = await mutate({
      // Assurez-vous de passer les variables nécessaires pour la mutation
      name: users.value.name,
      email: users.value.email,
      password: users.value.password,
    });
  } catch (error) {
    // Gérez les erreurs ici
    console.error("Error during mutation:", error);
  }
};

onDone((_result) => {
  if (_result?.data?.createUser?.token) {
    router.push("/sign-in");
    users.value = {};
  }
});

// Utilisez useMutation pour obtenir la fonction mutate
</script>

<template>
  <Layout>
    <template #title>
      <h1 class="uppercase text-lightbrown font-semibold text-xl">SIGNUP</h1>
    </template>
    <template #content>
      <div class="flex flex-col w-full space-y-4">
        <div class="text-blackgray font-medium text-lg">USER PROFILE</div>
        <Input
          placeholder="Email"
          type="email"
          v-model="users.email"
          className="border h-14 placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md w-full shadow-sm py-[0.4rem] pl-3 pr-10"
        />
        <Input
          placeholder="Name"
          v-model="users.name"
          className="border h-14 placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md w-full shadow-sm py-[0.4rem] pl-3 pr-10"
        />
        <Input
          placeholder="Your password"
          type="password"
          v-model="users.password"
          className="border h-14 placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md w-full shadow-sm py-[0.4rem] pl-3 pr-10"
        />
        <Input
          placeholder="Confirm password"
          type="password"
          v-model="users.checkPassword"
          className="border h-14 placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md w-full shadow-sm py-[0.4rem] pl-3 pr-10"
        />
        <Listbox
          :lists="TYPE_LIST"
          :selected="users.accountType"
          @handle-click="getSelected"
        />
      </div>
      <div
        class="flex flex-col w-full space-y-4"
        v-if="users.accountType._id === 'agency'"
      >
        <div class="text-blackgray font-medium text-lg">ENTERPRISE PROFILE</div>
        <Input
          placeholder="Name"
          v-model="enterprise.name"
          className="border h-14 placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md w-full shadow-sm py-[0.4rem] pl-3 pr-10"
        />
        <Input
          placeholder="Email"
          type="email"
          v-model="enterprise.email"
          className="border h-14 placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md w-full shadow-sm py-[0.4rem] pl-3 pr-10"
        />
      </div>
      <Button type="button" color="light" class="w-full" @click="register">
        Register
      </Button>
      <div class="flex flex-col space-y-2 w-full">
        <div class="flex justify-end">
          <span class="text-blackgray text-xs font-normal">
            Already have an account?</span
          >
          <router-link
            to="/sign-in"
            class="-mt-1 text-lightbrown text-xs font-normal cursor-pointer hover:bg-transparent hover:underline hover:decoration-lightbrown"
          >
            Sign in here.</router-link
          >
        </div>
      </div>
    </template>
  </Layout>
</template>
<style>
#header {
  background-image: url("@/assets/images/hero-bg.jpg");
}
</style>
