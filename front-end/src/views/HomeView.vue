<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goAboutPage = () => {
  router.push('/about');
}
</script>

<template>
<div>
  <h2>Home View</h2>
  <!--<p>{{ $route }}</p>-->
  <button class="btn btn-primary" @click="goAboutPage()">About로 이동</button>
</div>
</template>

<style scoped>

</style>