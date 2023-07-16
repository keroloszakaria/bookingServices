<template>
  <section class="auth h-screen">
    <div class="auth__popup">
      <h1 class="head">
        {{ $t("SIGN_IN.HEADING") }}
      </h1>
      <DynamicForm
        buttonName="Login"
        :schema="formSchema"
        @formValues="loginHandle"
      />
      <div class="auth__with">
        <h5 class="title">
          <span>Sign In with</span>
        </h5>
        <ul>
          <li>
            <button class="login__with__btn social-btn facebook-btn">
              <i class="fab fa-facebook-f"></i>
            </button>
          </li>
          <li>
            <button class="login__with__btn social-btn google-btn">
              <i class="fab fa-google"></i>
            </button>
          </li>
          <li>
            <button class="login__with__btn social-btn github-btn">
              <i class="fab fa-github"></i>
            </button>
          </li>
          <li>
            <button class="login__with__btn social-btn twitter-btn">
              <i class="fab fa-twitter"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="auth__def">
      <p class="mb-0">
        Don't have an account ?
        <customLink classList="" to="/components/auth/sign-up" name="Signup" />
      </p>
    </div>
  </section>
</template>

<script>
import DynamicForm from "@/components/basics/DynamicForm.vue";
import customLink from "@/components/basics/customLink";

import * as Yup from "yup";
// import { useAuthStore } from "@/store/auth";

//
// import { useCounterStore } from "@/store";

// const auth = useAuthStore();
export default {
  data: () => {
    const formSchema = {
      fields: [
        {
          label: "Email",
          name: "email",
          as: "input",
          placeholder: "Enter Your Email",
          rules: Yup.string().email().required(),
        },
        {
          label: "Password",
          name: "password",
          as: "input",
          type: "password",
          placeholder: "Enter Your Password",
          rules: Yup.string().min(6).required(),
        },
      ],
    };
    return {
      value: "",
      formSchema,
    };
  },
  components: {
    DynamicForm,
    customLink,
  },
  methods: {},
  created() {},
};
</script>

<script setup>
import { useAuthStore } from "@/store/auth";
const auth = useAuthStore();

const loginHandle = (values) => {
  console.log(values);
  auth.userLogin(values);
};
</script>

<style></style>
