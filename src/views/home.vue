<template>
  <section id="home">
    <div class="sm:ml-64 bg-zinc-800">
      <div class="rounded-lg">
        <Banner />
        <Course />
        <Featured />
        <Membership @emit="dataFromChild" />
        <Viewer />
      </div>
    </div>
    <bottom />
  </section>
</template>

<script setup>
import bottom from "../components/bottom.vue";
import Course from "../components/Course.vue";
import Banner from "../components/Banner.vue";
import Featured from "../components/Featured.vue";
import Membership from "../components/Membership.vue";
import Viewer from "../components/Viewer.vue";
import { onMounted, ref } from "vue";

const pk = ref("");

const dataFromChild = onMounted((data) => {
  pk.value = data;
});
</script>
