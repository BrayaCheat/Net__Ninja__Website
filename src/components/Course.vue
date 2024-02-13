<template>
  <section id="course">
    <div
      class="container mx-auto lg:px-36 p-10 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-9"
    >
      <header
        class="flex items-center gap-3 xl:col-span-3 lg:col-span-2 md:col-span-1 col-span-1 border-b border-zinc-300"
      >
        <i class="fa-solid fa-heart w-5 h-5 text-red-500"></i>
        <h1 class="text-xl font-semibold text-zinc-300 pb-3">Popular Course</h1>
      </header>

      <router-link
        :to="{ name: 'CourseDetail', params: { id: card.id } }"
        v-for="card in cards"
        :key="card.id"
        class="card shadow-xl bg-zinc-900 rounded hover:rotate-1 hover:scale-105 hover:opacity-90 duration-300 cursor-pointer"
      >
        <img :src="card.photo" alt="" class="rounded-t" />
        <div class="flex flex-col gap-3 px-3 py-12">
          <h1 class="text-white text-2xl font-medium">{{ card.title }}</h1>
          <h1 class="text-zinc-300 text-sm">{{ card.article }}</h1>
          <div class="flex items-center justify-between">
            <div class="flex items-center group gap-3">
              <img :src="card.author.authImg" alt="" class="rounded-full" />
              <span class="text-zinc-300 font-light text-sm">{{
                card.author.authName
              }}</span>
            </div>
            <span class="px-2 py-1 text-zinc-300 font-semi-bold border-2 border-dashed border-zinc-700 rounded">
              $2
            </span>
          </div>
        </div>
      </router-link>

      <button
        class="flex justify-center items-center xl:col-span-3 lg:col-span-2 md:col-span-1 col-span-1"
      >
        <router-link
          to="/AllCourse"
          class="text-zinc-300 px-6 py-3 border-2 border-dashed  border-zinc-700 font-medium rounded hover:text-white duration-300"
        >
          Views All Course
        </router-link>
      </button>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const baseURL = "http://localhost:3000/card";
const cards = ref([]);

onMounted(async () => {
  try {
    await axios.get(baseURL).then((response) => (cards.value = response.data));
  } catch (error) {
    console.log(error);
  }
});
</script>
