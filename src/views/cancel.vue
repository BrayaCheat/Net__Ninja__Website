<template>
  <div>cancel</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(async () => {
  router.push('/')
});
</script>
