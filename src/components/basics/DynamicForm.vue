<template>
  <Form class="v-form" @submit="onSubmit">
    <v-row>
      <v-col
        v-for="{ as, name, placeholder, label, children, ...attrs } in schema"
        :key="name"
        class="form-group"
        cols="12"
        sm="4"
      >
        <label :for="name">{{ label }}</label>
        <Field
          :type="name"
          autocomplete
          :as="as"
          :id="name"
          :placeholder="placeholder"
          :name="name"
          v-bind="attrs"
        >
          <template v-if="children && children.length">
            <component
              v-for="({ tag, text, ...childAttrs }, idx) in children"
              :key="idx"
              :is="tag"
              v-bind="childAttrs"
            >
              {{ text }}
            </component>
          </template>
        </Field>
        <ErrorMessage class="in-valid" :name="name" />
      </v-col>
      <v-col class="form-group" cols="12">
        <customButton
          type="submit"
          classList="btn primary w-100"
          :isLoading="false"
          :isModal="isModal"
        >
          {{ buttonName }}</customButton
        >
      </v-col>
    </v-row>
  </Form>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import customButton from "@/components/basics/customButton.vue";
export default {
  name: "DynamicForm",
  components: {
    Form,
    Field,
    ErrorMessage,
    customButton,
  },
  props: {
    schema: {
      type: Object,
      required: true,
    },
    buttonName: {
      type: String,
      default: () => {
        return "";
      },
    },
    isModal: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
  },
  methods: {
    onSubmit(values) {
      this.$emit("formValues", values);
    },
  },
};
</script>
