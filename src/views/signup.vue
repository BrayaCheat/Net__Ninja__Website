<template>
  <section id="signup" class="bg-zinc-800 h-screen">
    <div class="container mx-auto p-36 w-6/12">
      <form
        @submit.prevent
        action=""
        class="bg-zinc-900 p-9 rounded shadow flex flex-col gap-9"
      >
        <header class="flex items-center gap-6">
          <h1 class="text-white text-4xl font-bold">Sign Up</h1>
          <span class="text-4xl text-yellow-400 font-semibold">Account</span>
        </header>
        <div class="flex flex-col gap-3">
          <label for="" class="text-lg font-medium text-zinc-300 drop-shadow"
            >Email</label
          >
          <input
            v-model="account.email"
            type="email"
            class="bg-zinc-800 border-0 outline-none focus:ring-0 text-zinc-300 rounded shadow px-4 py-2"
            placeholder="Email..."
          />
        </div>
        <div class="flex flex-col gap-3">
          <label for="" class="text-lg font-medium text-zinc-300 drop-shadow"
            >Password</label
          >
          <input
            v-model="account.password"
            type="password"
            class="bg-zinc-800 border-0 outline-none focus:ring-0 text-zinc-300 rounded shadow px-4 py-2"
            placeholder="Password..."
          />
        </div>
        <div class="flex">
          <button
            @click="signInWithGoogle"
            class="px-4 py-2 bg-zinc-800 rounded shadow text-zinc-300"
          >
            Sign in with Google
          </button>
        </div>
        <div class="flex">
          <span class="text-zinc-300"
            >Already have an account? /
            <router-link to="/login" class="hover:underline"
              >Go to login</router-link
            ></span
          >
        </div>
        <div class="flex justify-end">
          <button
            @click="signUp"
            class="px-4 py-2 bg-green-500 hover:bg-green-600 duration-300 text-white rounded shadow"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";

const account = ref({
  email: "",
  password: "",
});

const router = useRouter()

const signUp = () => {
  createUserWithEmailAndPassword(
    getAuth(),
    account.value.email,
    account.value.password
  )
    .then((data) => {
        console.log("Successfully Registered!")
        router.push('/')
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result) => {
        router.push('/')
    })
    .catch((error) => console.log(error))
}
</script>
