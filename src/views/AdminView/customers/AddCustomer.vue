<template>
  <v-main class="dashboard__content">
    <DynamicForm
      @formValues="loginHandle"
      buttonName="Add Customer"
      :schema="fields"
    />
  </v-main>
</template>

<script setup>
import DynamicForm from "@/components/basics/DynamicForm.vue";
import * as Yup from "yup";

const fields = [
  {
    label: "Fact English",
    name: "title_en",
    type: "text",
    as: "input",
    placeholder: "Enter Developer Title",
    rules: Yup.string().required(),
  },
  {
    label: "Fact Arabic",
    name: "title_ar",
    type: "text",
    as: "input",
    placeholder: "Enter Developer Title",
    rules: Yup.string().required(),
  },
  {
    label: "Fact Number",
    name: "number",
    type: "number",
    as: "input",
    placeholder: "Enter Developer Title",
    rules: Yup.string().required(),
  },
  {
    label: "customer tybe",
    name: "hi",
    type: "hi",
    as: "select",
    placeholder: "Enter Developer Title",
    rules: Yup.string().required(),
    children: [
      {
        tag: "option",
        text: "aj",
        value: "ass",
      },
    ],
  },
];

const loginHandle = (values) => {
  console.log(values);
};
</script>

<style lang="scss" scoped></style>
