<template>
  <v-main class="dashboard__content addCustomer">
    <h2>New Customer</h2>
    <Form class="v-form" @submit="onSubmit">
      <div class="custome__input">
        <input placeholder=" " type="text" />
        <label for="">Name</label>
        <fontAwesomeIcon icon="fa-user" />
      </div>
      <div class="custome__input">
        <input placeholder=" " type="email" />
        <label for="">Email</label>
        <fontAwesomeIcon icon="fa-user" />
      </div>
      <div class="custome__input">
        <input placeholder=" " type="tel" />
        <label for="">Mobile</label>
        <fontAwesomeIcon icon="fa-user" />
      </div>

      <div class="custome__input">
        <input placeholder=" " type="text" />
        <label for="">Address</label>
        <fontAwesomeIcon icon="fa-location-dot" />
      </div>

      <div class="custome__input">
        <select name="" placeholder=" " id="">
          <option value="">dsadsadsa</option>
          <option value="">dsadsadsa</option>
          <option value="">dsadsadsa</option>
          <option value="">dsadsadsa</option>
          <option value="">dsadsadsa</option>
          <option value="">dsadsadsa</option>
        </select>
        <!-- <input placeholder=" " type="text" /> -->
        <label for="">Country</label>
        <fontAwesomeIcon icon="fa-earth-americas" />
      </div>

      <div class="custome__input">
        <select name="" placeholder=" " id="">
          <option value="">dsadsadsa</option>
          <option value="">dsadsadsa</option>
          <option value="">dsadsadsa</option>
          <option value="">dsadsadsa</option>
          <option value="">dsadsadsa</option>
          <option value="">dsadsadsa</option>
        </select>
        <label for="">City</label>
        <fontAwesomeIcon icon="fa-city" />
      </div>

      <div class="custome__input">
        <select name="" placeholder=" " id="">
          <option value="">dsadsadsa</option>
          <option value="">dsadsadsa</option>
          <option value="">dsadsadsa</option>
          <option value="">dsadsadsa</option>
          <option value="">dsadsadsa</option>
          <option value="">dsadsadsa</option>
        </select>
        <label for="">Time Zone</label>
        <fontAwesomeIcon icon="fa-timer" />
      </div>

      <customButton classList="btn addNew" type="submit"> Add </customButton>
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
