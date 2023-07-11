<template>
  <section>
    <div class="table-shadow table-rows f-sm table-td-border table-rows-border">
      <dynamicTable :items="items" :columns="columns" />
    </div>
  </section>
</template>

<script>
import dynamicTable from "@/components/basics/DynamicTable.vue";
export default {
  name: "basic-table",
  data() {
    return {
      items: [
        {
          id: "1",
          title: "hello",
          description: "ok ok",
          created_date: "2018-09-09",
        },

        {
          id: "2",
          title: "hello 2",
          description: "ok ok 2",
          created_date: "2018-10-09",
        },
        {
          id: "3",
          title: "hello 2",
          description: "ok ok 2",
          created_date: "2018-10-09",
        },
      ],
      columns: ["id", "title", "description", "created_date"],
    };
  },
  components: {
    dynamicTable,
  },
};
</script>

<style></style>
