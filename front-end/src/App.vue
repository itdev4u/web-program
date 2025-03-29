<script setup>
import TheHeader from "@/layouts/TheHeader.vue";
import TheMain from "@/layouts/TheMain.vue";
</script>

<template>
  <header>
    <TheHeader />
  </header>

  <main>
    <div class="container py-4">
      <RouterView></RouterView>
    </div>
  </main>
</template>

<style scoped>

</style>
