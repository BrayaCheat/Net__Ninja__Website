<template>
  <div id="main">
    <sidebar />
    <router-view/>
  </div>
</template>

<script setup>
  import sidebar from './components/sidebar.vue';
</script>
