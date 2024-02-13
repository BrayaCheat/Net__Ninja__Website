<template>
  <section id="course">
    <div
      class="container mx-auto lg:px-36 p-10 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-9"
    >
      <header
        class="border-b border-zinc-300 xl:col-span-3 lg:col-span-2 md:col-span-1 col-span-1"
      >
        <h1 class="font-bold text-4xl text-white pb-3">Course Library</h1>
      </header>
      <h1
        class="text-zinc-300 pt-6 xl:col-span-3 lg:col-span-2 md:col-span-1 col-span-1"
      >
        Get access to
        <span class="text-zinc-200 font-bold">every single course</span> by
        signing up for a
        <span
          class="lg:px-4 lg:py-2 px-2 py-1 text-white bg-green-500 rounded shadow mx-3"
          >Net Ninja Pro</span
        >
        membership
      </h1>
      <div
        class="flex flex-wrap lg:gap-0 gap-3 pt-6 justify-between items-center xl:col-span-3 lg:col-span-2 md:col-span-1 col-span-1"
      >
        <div
          class="flex items-center px-4 py-2 bg-zinc-900 rounded shadow text-zinc-300"
        >
          <select
            name=""
            id=""
            class="outline-none border-0 focus:ring-0 bg-transparent"
          >
            <option value="">Filter</option>
          </select>
        </div>
        <div
          class="flex items-center px-4 py-2 bg-zinc-900 rounded shadow text-zinc-300"
        >
          <input
            v-model="search"
            type="text"
            placeholder="Find a product"
            class="outline-none border-0 focus:ring-0 bg-transparent"
          />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <router-link
        :to="{ name: 'CourseDetail', params: { id: card.id } }"
        v-for="card in MatchingCourse"
        :key="card.id"
        class="card shadow-xl bg-zinc-900 rounded hover:rotate-1 hover:scale-105 hover:opacity-90 duration-300 cursor-pointer"
      >
        <img :src="card.photo" alt="" class="rounded-t" />
        <div class="flex flex-col gap-3 px-3 py-9">
          <h1 class="text-white text-xl font-medium">{{ card.title }}</h1>
          <h1 class="text-zinc-300 text-sm">{{ card.article }}</h1>
          <div class="flex items-center group gap-3">
            <img :src="card.author.authImg" alt="" class="rounded-full" />
            <span class="text-zinc-300 font-light text-sm">{{
              card.author.authName
            }}</span>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axios from "axios";

const baseURL = "http://localhost:3000/card";
const cards = ref([]);
const search = ref("");

const MatchingCourse = computed(() => {
  return cards.value.filter((card) =>
    card.title.toLowerCase().includes(search.value.toLowerCase())
  );
});

onMounted(async () => {
  try {
    await axios.get(baseURL).then((response) => (cards.value = response.data));
  } catch (error) {
    console.log(error);
  }
});
</script>
