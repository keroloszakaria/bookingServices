<template>
  <v-main class="dashboard__content">
    <h2>New Customer</h2>
    <Form class="v-form" @submit="onSubmit">
      <v-row>
        <v-col class="form-group custome__input" cols="12" sm="4">
          <div class="custome__input">
            <input placeholder=" " type="text" />
            <label for="">Name</label>
            <fontAwesomeIcon icon="fa-user" />
          </div>
        </v-col>
        <v-col class="form-group custome__input" cols="12" sm="4">
          <div class="custome__input">
            <input placeholder=" " type="email" />
            <label for="">Email</label>
            <fontAwesomeIcon icon="fa-user" />
          </div>
        </v-col>

        <v-col class="form-group" cols="12" sm="4">
          <div class="custome__input">
            <input placeholder=" " type="tel" />
            <label for="">Mobile</label>
            <fontAwesomeIcon icon="fa-user" />
          </div>
        </v-col>
        <v-col class="form-group" cols="12" sm="4">
          <div class="custome__input">
            <input placeholder=" " type="text" />
            <label for="">Address</label>
            <fontAwesomeIcon icon="fa-map" />
          </div>
        </v-col>
        <v-col class="form-group" cols="12" sm="4">
          <div class="custome__input">
            <input placeholder=" " type="text" />
            <label for="">Country</label>
            <fontAwesomeIcon icon="fa-map" />
          </div>
        </v-col>
        <v-col class="form-group" cols="12" sm="4">
          <div class="custome__input">
            <input placeholder=" " type="text" />
            <label for="">City</label>
            <fontAwesomeIcon icon="fa-map" />
          </div>
        </v-col>
        <v-col class="form-group" cols="12" sm="4">
          <div class="custome__input">
            <input placeholder=" " type="text" />
            <label for="">Time Zone</label>
            <fontAwesomeIcon icon="fa-map" />
          </div>
        </v-col>
        <v-col class="form-group" cols="12" sm="4">
          <customButton classList="btn addNew" type="submit">
            Add
          </customButton>
        </v-col>
      </v-row>
    </Form>
  </v-main>
</template>

<script setup>
import fontAwesomeIcon from "@/components/basics/fontAwesomeIcon.vue";
import customButton from "@/components/basics/customButton.vue";

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
