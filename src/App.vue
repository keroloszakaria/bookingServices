<template>
  <router-view v-slot="{ Component }">
    <Transition name="scale" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<script></script>
