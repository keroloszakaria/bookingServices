<template>
  <section class="auth">
    <a href="#" class="">
      <img class="" src="@/assets/logo.png" alt="logo" />
    </a>
    <div class="auth__popup">
      <h1 class="head">
        {{ $t("RESET_PASSWORD.HEADING") }}
      </h1>
      <DynamicForm
        :schema="formSchema"
        :buttonName="$t('RESET_PASSWORD.BUTTON')"
        @formValues="loginHandle"
      />
    </div>
    <div class="auth__def">
      <p class="mb-0">
        {{ $t("RESET_PASSWORD.REMEMBER_ME") }}
        <customLink
          classList=""
          to="/components/auth/sign-in"
          :name="$t('RESET_PASSWORD.LINK')"
        />
      </p>
    </div>
  </section>
</template>

<script>
import DynamicForm from "@/components/basics/DynamicForm.vue";
import * as Yup from "yup";
import customLink from "@/components/basics/customLink";
export default {
  data: () => {
    const formSchema = {
      fields: [
        {
          label: "Email",
          type: "email",
          name: "emailAddress",
          as: "input",
          placeholder: "Enter Your Email",
          rules: Yup.string().email().required(),
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
};
</script>

<script setup>
const loginHandle = (values) => {
  console.log(values);
};
</script>
