<template>
  <section>
    <div class="table-shadow table-rows mb-4">
      <dynamicTable @deleteRow="deleteRow" :items="items" :columns="columns">
        <slot></slot>
        <slot name="edit"></slot>
        <slot name="delete"></slot>
      </dynamicTable>
    </div>
  </section>
</template>

<script>
import dynamicTable from "@/components/basics/DynamicTable.vue";
export default {
  name: "basic-table",
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      // items: [
      //   {
      //     id: "1",
      //     title: "hello",
      //     description: "ok ok",
      //     created_date: "2018-09-09",
      //   },
      //   {
      //     id: "2",
      //     title: "hello 2",
      //     description: "ok ok 2",
      //     created_date: "2018-10-09",
      //   },
      //   {
      //     id: "3",
      //     title: "hello 2",
      //     description: "ok ok 2",
      //     created_date: "2018-10-09",
      //   },
      // ],
      // columns: ["id", "title", "description", "created_date"],
    };
  },
  components: {
    dynamicTable,
  },
  methods: {
    deleteRow(item) {
      this.$emit("deleteSeletedRow", item);
    },
  },
};
</script>

<style></style>
