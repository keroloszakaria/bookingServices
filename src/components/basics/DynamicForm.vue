<template>
  <Form class="v-form" @submit="onSubmit">
    <div
      v-for="{
        as,
        name,
        placeholder,
        label,
        children,
        ...attrs
      } in schema.fields"
      :key="name"
      class="mb-4 form-group"
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
    </div>

    <customButton
      type="submit"
      classList="btn primary w-100"
      :isLoading="false"
      :isModal="isModal"
    >
      {{ buttonName }}</customButton
    >
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
