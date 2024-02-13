<template>
  <section id="CourseDetail">
    <sidebar />
    <div class="sm:ml-64 bg-zinc-800">
      <div class="container mx-auto xl:px-36 p-10">
        <div class="flex flex-col items-center">
          <img
          class="cursor-pointer hover:rotate-1 duration-300 border hover:border-double"
          :src="cards.photo" alt="" />
          <div class="lg:flex flex-col text-center items-center gap-3 px-6">
            <h1 class="text-4xl text-white font-semibold mt-9">
              {{ cards.title }}
            </h1>
            <h1 class="text-yellow-400 font-semibold">
              This is a Net Ninja Pro Exclusive course.
            </h1>
            <h1 class="text-md text-zinc-300 px-36 text-start">{{ cards.article }}</h1>
          </div>
        </div>

        <GetAccess />

        <Membership />

        <!-- <div class="flex flex-col items-center gap-9">
          <h1 class="text-white font-semibold text-4xl">Course Preview</h1>
          <a href="">
            <img :src="cards.photo" alt="" />
          </a>
        </div> -->
      </div>
    </div>
    <bottom />
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Banner from "../components/Banner.vue";
import sidebar from "../components/sidebar.vue";
import axios from "axios";
import GetAccess from "../components/GetAccess.vue";
import bottom from "../components/bottom.vue";
import Membership from "../components/Membership.vue";

const props = defineProps(["id"]);
const baseURL = "http://localhost:3000/card";
const cards = ref([]);

onMounted(async () => {
  try {
    await axios
      .get(baseURL + "/" + props.id)
      .then((response) => (cards.value = response.data));
  } catch (error) {
    console.log(error);
  }
});
</script>
