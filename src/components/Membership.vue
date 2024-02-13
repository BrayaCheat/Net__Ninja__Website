<template>
  <section id="membership" class="bg-zinc-900">
    <div
      class="container mx-auto xl:px-36 xl:py-24 lg:p-36 md:p-10 p-10 grid xl:grid-cols-1 lg:grid-cols-1 grid-cols-1 gap-9 place-items-center"
    >
      <div
        class="xl:col-span-2 lg:col-span-1 col-span-1 text-zinc-300 flex flex-col items-center gap-9"
      >
        <h1 class="text-6xl font-bold text-white">
          Net Ninja <span class="text-yellow-400">Pro</span>
        </h1>
        <h1>
          Get <span class="text-white font-semibold">instant access</span> to
          all courses with a
          <span class="text-white font-semibold">Net Ninja Pro </span>membership
        </h1>
      </div>

      <!-- <div
        class="monthly-card flex flex-col gap-6 px-9 py-36 bg-zinc-800 shadow-xl border-2 border-yellow-400 rounded xl:col-span-1 col-span-2"
      >
        <header class="text-white md:text-4xl text-2xl text-center font-bold">
          <h1>Monthly</h1>
          <h1>Membership</h1>
        </header>
        <main class="border-b border-zinc-300 text-center">
          <h1 class="text-lg text-zinc-300 mb-6">
            only<span class="text-white md:text-4xl text-2xl font-bold">
              $9 </span
            >/month
          </h1>
        </main>
        <ul class="text-center text-zinc-300">
          <li
            v-for="(list, index) in lists"
            :key="index"
            class="flex items-center p-2 group"
          >
            <i class="fa-solid fa-fire w-5 h-5 text-yellow-400"></i>
            <span class="ms-3">{{ list }}</span>
          </li>
        </ul>
        <stripe-checkout
          ref="checkoutRef"
          mode="payment"
          :pk="publishableKey"
          :line-items="lineItems"
          :success-url="successURL"
          :cancel-url="cancelURL"
          @loading="(v) => (loading = v)"
        />
        <button
          class="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded shadow"
        >
          Join now
        </button>
      </div> -->
      <div
        class="yearly-card flex flex-col gap-6 px-9 py-36 bg-zinc-800 shadow-xl border-2 border-yellow-400 rounded xl:col-span-1 col-span-2 w-6/12"
      >
        <header class="text-white md:text-4xl text-2xl text-center font-bold">
          <h1>Yearly</h1>
          <h1>Membership</h1>
        </header>
        <main class="border-b border-zinc-300 text-center">
          <h1 class="text-lg text-zinc-300 mb-6">
            only<span class="text-white md:text-4xl text-2xl font-bold">
              $79 </span
            >/year
          </h1>
        </main>
        <ul class="text-center text-zinc-300">
          <li
            v-for="(list, index) in lists"
            :key="index"
            class="flex items-center p-2 group"
          >
            <i class="fa-solid fa-fire text-yellow-400 w-5 h-5"></i>
            <span class="ms-3">{{ list }}</span>
          </li>
        </ul>
        <stripe-checkout
          ref="checkoutRef"
          mode="payment"
          :pk="publishableKey"
          :line-items="lineItems"
          :success-url="successURL"
          :cancel-url="cancelURL"
          @loading="(v) => (loading = v)"
        />
        <button
          @click="submit"
          class="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded shadow"
        >
          Join now
        </button>
      </div>
      <div class="col-span-2 text-zinc-300 text-center py-9">
        <h1>
          Get your first month half price when you use the code NINJAFLEDGLING.
          <span class="text-yellow-400">(monthly plan only).</span>
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { StripeCheckout } from "@vue-stripe/vue-stripe";
export default {
  components: {
    StripeCheckout,
  },
  data() {
    this.publishableKey =
      "pk_test_51OWgOpEh73AUMniH82A3Ar6Cq78OwhGH6Vp8XvLfvFKEoi40r1oMiBaR3HDNnyTfwxWS59GqtUXo6ciadAcwbClD00FAQPozkI";
    return {
      loading: false,
      lineItems: [
        {
          price: "price_1OgQOYEh73AUMniHINRCBuc2", // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: "http://localhost:5173/success-url",
      cancelURL: "http://localhost:5173/cancel-url",

      lists: [
        "Instant access to all courses",
        "Early access to new courses",
        "Access to premium & Udemy courses",
        "Cancel at any time",
      ],
    };
  },
  methods: {
    submit() {
      // You will be redirected to Stripe's secure checkout page
      this.$emit('pk',this.publishableKey)
      .then(this.$refs.checkoutRef.redirectToCheckout())  
    },
  },
};
</script>
