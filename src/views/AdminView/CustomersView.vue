<template>
  <div class="cutomersView">
    <aside class="aside">
      <div class="aside__sort">
        <ul>
          <li v-for="n in allLetters()" :key="n">
            <button type="button">{{ n }}</button>
          </li>
        </ul>
      </div>
      <div class="aside__content">
        <div class="aside__head">
          <form>
            <div class="form-group">
              <fontAwesomeIcon icon="fa-magnifying-glass" />
              <input type="text" placeholder="search by name" />
            </div>
          </form>
        </div>
        <div class="aside__body">
          <ul class="customersList">
            <li class="customer">
              <div class="customer__image">
                <img src="https://via.placeholder.com/350x150" alt="" />
              </div>
              <div class="customer__info">
                <h6>kerolos zakaria</h6>
                <p>keroloszakaria2@gmail.com</p>
              </div>
            </li>
            <li class="customer">
              <div class="customer__image">
                <img src="https://via.placeholder.com/350x150" alt="" />
              </div>
              <div class="customer__info">
                <h6>kerolos zakaria</h6>
                <p>keroloszakaria2@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>
    <v-main class="dashboard__content">
      <div>Customers</div>
    </v-main>
  </div>
</template>

<script setup>
import fontAwesomeIcon from "@/components/basics/fontAwesomeIcon.vue";
// import { ref } from "vue";
// const letter = ref("")
const allLetters = () => {
  let letters = ["#"];
  for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
    letters.push(String.fromCharCode([i]));
  }
  return letters;
};

allLetters();

// import { useChooseUsStore } from "@/store/chooseUs";
// const chooseStore = useChooseUsStore();

// onBeforeMount(() => {
//   chooseStore.chooseUsList();
// });
</script>
<style></style>
