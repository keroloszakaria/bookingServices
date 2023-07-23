<template>
  <div class="cutomersView">
    <aside class="aside">
      <div class="aside__sort">
        <ul>
          <li v-for="letter in allLetters()" :key="letter">
            <button type="button">{{ letter }}</button>
          </li>
        </ul>
      </div>
      <div class="aside__content">
        <div class="aside__head">
          <div></div>
          <div class="aside__head__up">
            <customButton type="button" classList="icon">
              <fontAwesomeIcon icon="fa-file-export" />
            </customButton>
            <form>
              <div class="form-group">
                <fontAwesomeIcon icon="fa-magnifying-glass" />
                <input type="text" placeholder="search by name" />
              </div>
            </form>
            <customButton type="button" classList="icon">
              <fontAwesomeIcon icon="fa-file-csv" />
            </customButton>
          </div>

          <div class="aside__head__down">
            <customLink
              classList="btn addNew"
              to="/customers/add-cutomer"
              name="New Customer"
              icon="fa-plus"
              :showIcon="true"
            >
            </customLink>
          </div>
        </div>
        <div class="aside__body">
          <ul class="customersList">
            <li class="customer">
              <router-link to="/" class="">
                <div class="customer__image">
                  <img src="https://via.placeholder.com/350x150" alt="" />
                </div>
                <div class="customer__info">
                  <h6>kerolos zakaria</h6>
                  <p>keroloszakaria2@gmail.com</p>
                </div>
              </router-link>
            </li>
            <li class="customer">
              <router-link to="/" class="active">
                <div class="customer__image">
                  <img src="https://via.placeholder.com/350x150" alt="" />
                </div>
                <div class="customer__info">
                  <h6>kerolos zakaria</h6>
                  <p>keroloszakaria2@gmail.com</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
    <router-view></router-view>
  </div>
</template>

<script setup>
import customButton from "@/components/basics/customButton.vue";
import customLink from "@/components/basics/customLink.vue";
import fontAwesomeIcon from "@/components/basics/fontAwesomeIcon.vue";
// import customModal from "@/components/basics/customModal.vue";
// import { Form, Field, ErrorMessage } from "vee-validate";
// import * as Yup from "yup";
// import { reactive } from "vue";
// import { ref } from "vue";
// const letter = ref("")
// const addFact = () => {
//   console.log(fact);
// };
const allLetters = () => {
  let letters = ["#"];
  for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
    letters.push(String.fromCharCode([i]));
  }
  return letters;
};
allLetters();

// const fields = [
//   {
//     label: "Fact English",
//     name: "title_en",
//     type: "text",
//     as: "input",
//     placeholder: "Enter Developer Title",
//     rules: Yup.string().required(),
//   },
//   {
//     label: "Fact Arabic",
//     name: "title_ar",
//     type: "text",
//     as: "input",
//     placeholder: "Enter Developer Title",
//     rules: Yup.string().required(),
//   },
//   {
//     label: "Fact Number",
//     name: "number",
//     type: "number",
//     as: "input",
//     placeholder: "Enter Developer Title",
//     rules: Yup.string().required(),
//   },
// ];
// const fact = {
//   id: Math.floor(Math.random() * 100),
//   title_ar: "",
//   title_en: "",
//   number: "",
//   icon: "",
// };

// import { useChooseUsStore } from "@/store/chooseUs";
// const chooseStore = useChooseUsStore();

// onBeforeMount(() => {
//   chooseStore.chooseUsList();
// });
</script>
<style></style>
