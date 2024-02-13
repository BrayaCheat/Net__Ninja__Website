<template>
    <section id="login" class="bg-zinc-800 h-screen">
      <div class="container mx-auto p-36 w-6/12">
        <form
          @submit.prevent
          action=""
          class="bg-zinc-900 p-9 rounded shadow flex flex-col gap-9"
        >
          <header class="flex items-center gap-6">
            <h1 class="text-white text-4xl font-bold">Login</h1>
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
          <div v-if="errMsg" class="text-red-500"> {{ errMsg }}</div>
          <div class="flex">
            <button
              @click="signInWithGoogle"
              class="px-4 py-2 bg-zinc-800 rounded shadow text-zinc-300 flex items-center gap-3 hover:text-white"
            >
            <i class="fa-brands fa-google"></i>
              Sign in with Google 
            </button>
          </div>
          
          <div class="flex">
            <span class="text-zinc-300"
              >Don't have any account? /
              <router-link to="/signup" class="hover:underline"
                >Go to SignUp</router-link
              ></span
            >
          </div>
          <div class="flex justify-end">
            <button
              @click="login"
              class="px-4 py-2 bg-green-500 hover:bg-green-600 duration-300 text-white rounded shadow"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { useRouter } from "vue-router";
  
  const account = ref({
    email: "",
    password: "",
  });
  const errMsg = ref(false)
  const router = useRouter()
  
  const login = () => {
    signInWithEmailAndPassword(
      getAuth(),
      account.value.email,
      account.value.password
    )
      .then((data) => {
          console.log("Successfully Registered!")
          router.push('/')
      })
      .catch((error) => {
        switch(error.code){
            case "auth/invalid-email":
                errMsg.value = "Invalid email!"
                break;
            case "auth/user-not-found":
                errMsg.value = "No account with that email was found!"
                break;
            case "auth/wrong-password":
                errMsg.value = "Incorrect password!"
                break;
            default: 
                errMsg.value = "Email or Password was incorrect!"
                break;
        }
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result) => {
        console.log(getAuth())
        router.push('/')
    })
    .catch((error) => console.log(error))
}
  </script>
  