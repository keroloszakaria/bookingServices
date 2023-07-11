<template>
  <table class="">
    <thead>
      <tr>
        <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
        <th>actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td v-for="(column, indexColumn) in columns" :key="indexColumn">
          <img v-if="column == 'image'" :src="item[column]" alt="" />
          <span v-else>
            {{ item[column] }}
          </span>
        </td>
        <td>
          <div class="buttons_container">
            <slot></slot>
            <slot name="edit"></slot>
            <slot name="delete">
              <customButton
                @click="deleteRow(item)"
                type="button"
                class="icon delete"
                :isLoading="false"
              >
                <i class="fa-light fa-trash"></i>
              </customButton>
            </slot>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import customButton from "@/components/basics/customButton";
export default {
  name: "dynamic-table",
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
  components: {
    customButton,
  },
  methods: {
    deleteRow(item) {
      console.log(item);
      this.$emit("deleteRow", item);
    },
  },
};
</script>

<style></style>
