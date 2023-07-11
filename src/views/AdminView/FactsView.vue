<template>
  <div>Facts</div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useFactsStore } from "@/store/facts";
const factsStore = useFactsStore();

onBeforeMount(() => {
  if (!factsStore.facts.length) factsStore.factsList();
});
</script>
<style></style>
