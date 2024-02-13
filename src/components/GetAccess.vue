<template>
  <section id="GetAccess">
    <div
      class="container mx-auto md:p-36 p-10 flex flex-col justify-center items-center gap-9"
    >
      <h1
        class="text-white lg:text-4xl text-2xl font-semibold lg:text-justify text-center"
      >
        Get Instant Access to this Course
      </h1>
      <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
      <button
        @click="submit"
        class="bg-green-500 hover:bg-green-600 text-white font-medium shadow rounded px-6 py-3"
      >
        Buy Now For $2
      </button>
      <span class="bg-yellow-400 text-white shadow rounded px-6 py-2"
        >Or access all courses by signing up for
        <a href="">Net Ninja Pro</a> for just $9 / month</span
      >
    </div>
  </section>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeCheckout,
  },
  data () {
    this.publishableKey = "pk_test_51OWgOpEh73AUMniH82A3Ar6Cq78OwhGH6Vp8XvLfvFKEoi40r1oMiBaR3HDNnyTfwxWS59GqtUXo6ciadAcwbClD00FAQPozkI"
    return {
      loading: false,
      lineItems: [
        {
          price: 'price_1OgKZvEh73AUMniHDm7375F4', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: 'http://localhost:5173/success-url',
      cancelURL: 'http://localhost:5173/cancel-url',
    };
  },
  methods: {
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>

<style lang="scss" scoped></style>
