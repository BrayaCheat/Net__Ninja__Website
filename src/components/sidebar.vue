<template>
  <section id="aside" class="bg-zinc-900">
    <button
      data-drawer-target="default-sidebar"
      data-drawer-toggle="default-sidebar"
      aria-controls="default-sidebar"
      type="button"
      class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <span class="sr-only">Open sidebar</span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button>

    <aside
      id="default-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-zinc-900">
        <ul class="space-y-2 font-medium">
          <div class="border-b border-zinc-800">
            <li>
              <a
                href="#banner"
                class="flex items-center justify-center gap-3 p-2 text-zinc-200 hover:bg-zinc-800 hover:text-white rounded-lg group font-semibold text-md"
              >
                <img
                  :src="ninjaLogo"
                  alt=""
                  class="rounded-full"
                />
                <!-- {{ auth._currentUser.displayName }} -->
              </a>
            </li>
          </div>
          <div class="border-b border-zinc-800 py-6">
            <li>
              <router-link
                :to="{name: 'home'}"
                class="flex items-center p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white rounded-lg group font-semibold text-md"
              >
                <i class="fa-solid fa-fire w-5 h-5"></i>
                <span class="ms-3">Home</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/AllCourse"
                class="flex items-center p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white rounded-lg group font-semibold text-md"
              >
                <i class="fa-solid fa-file-lines w-5 h-5"></i>
                <span class="ms-3">All Courses</span>
              </router-link>
            </li>
          </div>
          <div class="border-b border-zinc-800 py-6">
            <li>
              <a
                :href="ninjaURL"
                target="_blank"
                class="flex items-center p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white rounded-lg group font-semibold text-md"
              >
                <i class="fa-brands fa-youtube w-5 h-5"></i>
                <span class="ms-3">Youtube Channel</span>
              </a>
            </li>
          </div>
          <div class="py-6 border-b border-zinc-800">
            <li>
              <router-link
                v-if="!isloggedIn"
                to="/login"
                class="flex items-center p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white rounded-lg group font-semibold text-md"
              >
                <i class="fa-solid fa-arrow-right-to-bracket w-5 h-5"></i>
                <span class="ms-3">Login</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/signup"
                class="flex items-center p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white rounded-lg group font-semibold text-md"
              >
                <i class="fa-solid fa-user w-5 h-5"></i>
                <span class="ms-3">Sign Up</span>
              </router-link>
            </li>
          </div>
          <div class="border-b border-zinc-800 py-6" v-if="isloggedIn">
            <li>
              <div
                @click="logout"  
                class="flex items-center p-2 text-zinc-400 hover:bg-zinc-800 rounded-lg group font-semibold text-md cursor-pointer"
              >
                <i class="fa-solid fa-arrow-right-to-bracket w-5 h-5"></i>
                <span class="ms-3">Sign Out</span>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </aside>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "../router";

const ninjaURL = "https://www.youtube.com/@NetNinja";
const ninjaLogo = "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB";
const isloggedIn = ref(false);
let auth = getAuth();

// console.log(auth._currentUser.displayName)
console.log(auth)
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isloggedIn.value = true;
    } else {
      isloggedIn.value = false;
    }
  });
});

const logout = () => {
  signOut(auth).then(() => {
    router.push("/login");
  });
};
</script>
