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
// import { MUTATE_INSERT_USERS } from "@/graphql/index.ts";
import InputsValidation from "@/components/designSystem/Validation.vue"
import { useRouter } from "vue-router";
import { useAuth,useErrors } from "@/stores/index.ts";
import {isEqual} from 'lodash'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
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

const authStore = useAuth();
const errors = useErrors()
const errorsRef = ref()

const onRegister = async () => {
  try {
    errors.$reset();
    await authStore.register(
      users.value.name,
      users.value.email,
      users.value.password,
  );
  
  if(errors.fields){
    errorsRef.value = errors.fields
    if(errors.fields.input.email || errors.fields.input.name || errors.fields.input.password ){
      return toast.error("An error occured", {
          position: toast.POSITION.TOP_RIGHT,
        })
    }else{
      return toast.error("User already exists", {
          position: toast.POSITION.TOP_RIGHT,
      })
    }
  }
  toast.success("User registered succesfully", {
    position: toast.POSITION.TOP_RIGHT,
  })
  } catch (error) {
    console.error("Error during sign-up:", error);
  }
};

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
          :invalid="Boolean(errorsRef?.input?.email)"
        />
        <inputs-validation :error="errors.fields.input.email" />
        <Input
          placeholder="Name"
          v-model="users.name"
          :invalid="Boolean(errorsRef?.input?.name)"
        />
        <inputs-validation :error="errors.fields.input.name" />
        <Input
          placeholder="Your password"
          type="password"
          v-model="users.password"
          :invalid="Boolean(errorsRef?.input?.password)"
         
        />
        <inputs-validation :error="errors.fields.input.password" />
        <Input
          placeholder="Confirm password"
          type="password"
          v-model="users.checkPassword"
          :invalid="Boolean(errorsRef?.input?.password)"
        />
        <inputs-validation :error="errors.fields.input.password" />
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
         
        />
        <Input
          placeholder="Email"
          type="email"
          v-model="enterprise.email"
         
        />
      </div>
      <Button type="button" color="light" class="w-full" @click="onRegister">
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
