<template>
  <section class="auth">
    <a href="#" class="">
      <img class="" src="@/assets/logo.png" alt="logo" />
    </a>
    <div class="auth__popup">
      <h1 class="head">
        {{ $t("SIGN_UP.HEADING") }}
      </h1>
      <p>
        <small>Please enter the 4 digit code sent to</small>
      </p>
      <p>
        <small>example@abc.com</small>
      </p>
    </div>

    <div class="mt-4 text-center auth__def">
      <p class="mb-0">
        Didn't receive a code ?
        <button>Resend</button>
      </p>
    </div>
  </section>
</template>

<script>
// import DynamicForm from "@/components/basics/DynamicForm.vue";
import * as Yup from "yup";
// import customLink from "@/components/basics/customLink";
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
    // DynamicForm,
    // customLink,
  },
};
</script>

<script setup></script>
