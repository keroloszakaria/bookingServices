<template>
  <v-main class="dashboard__content">
    <Form class="v-form" @submit="onSubmit">
      <v-row>
        <v-col class="form-group" cols="12" sm="4">
          <v-text-field
            :rules="nameRules"
            label="First name"
            required
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col class="form-group" cols="12" sm="4">
          <v-text-field
            :rules="nameRules"
            label="First name"
            required
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col class="form-group" cols="12" sm="4">
          <v-text-field
            :rules="nameRules"
            label="First name"
            required
            variant="outlined"
          ></v-text-field>
        </v-col>
      </v-row>
    </Form>
  </v-main>
</template>

<script setup>
const nameRules = [
  (value) => {
    if (value) return true;

    return "Name is required.";
  },
  (value) => {
    if (value?.length <= 10) return true;

    return "Name must be less than 10 characters.";
  },
];

// import * as Yup from "yup";

// const fields = [
//   {
//     label: "Name",
//     name: "name",
//     type: "text",
//     as: "input",
//     placeholder: "Enter Customer Name",
//     rules: Yup.string().required(),
//   },
//   {
//     label: "Email",
//     name: "email",
//     type: "email",
//     as: "input",
//     placeholder: "Enter Customer Email",
//     rules: Yup.string().required(),
//   },
//   {
//     label: "Mobile",
//     name: "Mobile",
//     type: "tel",
//     as: "input",
//     placeholder: "Enter Customer Mobile",
//     rules: Yup.string().required(),
//   },
//   {
//     label: "customer tybe",
//     name: "hi",
//     type: "hi",
//     as: "select",
//     placeholder: "Enter Customer Title",
//     rules: Yup.string().required(),
//     children: [
//       {
//         tag: "option",
//         text: "aj",
//         value: "ass",
//       },
//     ],
//   },
// ];

// const loginHandle = (values) => {
//   console.log(values);
// };
</script>

<style lang="scss" scoped></style>
