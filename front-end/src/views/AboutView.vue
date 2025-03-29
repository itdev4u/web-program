<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
<div>
  <h2>About View</h2>
  <button class="btn btn-danger" @click="$router.push('/')">Home 페이지로 이동</button>
</div>
</template>

<style scoped>

</style>