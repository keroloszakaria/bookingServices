<template>
  <div v-if="developersStore.isLoading">loading</div>
  <div v-else>
    <div class="mb-4">
      <modal buttonName="Add New Developer">
        <v-card-text>
          <DynamicForm
            buttonName="Add"
            :isModal="true"
            :schema="formSchema"
            @formValues="addNewDeveloper"
          />
        </v-card-text>
      </modal>
    </div>

    <div v-if="developersStore.developers.length">
      <basicTable
        @deleteSeletedRow="deleteSeletedDeveloper"
        :items="developersStore.developers"
        :columns="columns"
      >
        <!-- <customLink :showIcon="true" icon="fa-eye" to="/" /> -->
        <customLink :showIcon="true" icon="fa-pen" to="/" />
        <!-- <customButton type="button" classList="" :isLoading="false">
      </customButton> -->
        <template v-slot:edit>
          <customLink :showIcon="true" icon="fa-pen" to="/" />
        </template>
        <template v-slot:delete> </template>
      </basicTable>
      <!-- <infinite-loading
        v-if="developersStore.hasNext"
        @infinite="infiniteHandler"
      ></infinite-loading> -->
    </div>
    <div v-else>
      <p>no Fonund</p>
    </div>
  </div>
</template>

<script setup>
// import { deleteAlert } from "@/plugin/sweetAlert";
import * as Yup from "yup";
import { ref, onBeforeMount } from "vue";
import { swalWithBootstrapButtons } from "@/plugin/sweetAlert";
// Infinite Loading
// import InfiniteLoading from "v3-infinite-loading";
// import "v3-infinite-loading/lib/style.css";

// ======= Components =========
import basicTable from "@/views/AdminView/components/tables/basicTable.vue";
import customLink from "@/components/basics/customLink.vue";
import modal from "@/components/basics/modal.vue";
import DynamicForm from "@/components/basics/DynamicForm.vue";

// init Store
import { useDevelopersStore } from "@/store/developers";
const developersStore = useDevelopersStore();

// ======= Data =========
const columns = ref(["id", "image", "name", "title_ar", "title_en"]);
// let page = ref(1);
const formSchema = {
  fields: [
    {
      label: "Name",
      name: "name",
      type: "text",
      as: "input",
      placeholder: "Enter Developer Name",
      rules: Yup.string().required(),
    },
    {
      label: "Title Arabic",
      name: "title_ar",
      type: "text",
      as: "input",
      placeholder: "Enter Developer Title",
      rules: Yup.string().required(),
    },
    {
      label: "Title English",
      name: "title_en",
      type: "text",
      as: "input",
      placeholder: "Enter Developer Title",
      rules: Yup.string().required(),
    },

    {
      label: "Image",
      name: "image",
      as: "input",
      type: "file",
      accept: "image/png, image/jpeg,",
      placeholder: "image",
      rules: Yup.mixed().required(),
    },
  ],
};
// const developers = ref([]);
// const busy = ref(false);

// ======= Methods =========
// Add Developer
const addNewDeveloper = (values) => {
  let formData = new FormData();
  formData.append("name", values.name);
  formData.append("title_ar", values.title_ar);
  formData.append("title_en", values.title_en);
  formData.append("image", values.image);
  developersStore.addDeveloper(formData);
};
// Delete Developer
let deleteSeletedDeveloper = (developer) => {
  swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: "you will delete this developer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    })
    .then((result) => {
      if (result.isConfirmed) {
        console.log(developer);
        developersStore.deleteDeveloper(developer.id);
      }
    });
};

// Loading All Developers
onBeforeMount(() => {
  if (!developersStore.developers.length) developersStore.developersList();
});
// Loading More on Scroll
// let infiniteHandler = () => {
//   page.value = page.value + 1;
//   if (developersStore.hasNext) developersStore.loadingMoreDeveloper(page.value);
// };
</script>
<style></style>
