<template>
  <main>
    <div class="registerAddress mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-sm-3"></div>
          <div class="col-sm-6">
            <div class="a-section a-spacing-medium">
              <div class="a-subheader a-breadcrumb a-spacing-small">
                <ul>
                  <li>
                    <nuxt-link to="/cart">
                      <span>Coșul tău</span>
                    </nuxt-link>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li>
                    <nuxt-link to="/placeorder">
                      <span>Plasează comandă</span>
                    </nuxt-link>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li class="active">
                    <nuxt-link to="/payment">
                      <span>Plată</span>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="a-section">
              <h2>Fă o plată</h2>
              <div class="a-section a-spacing-none a-spacing-top-small">
                <b
                  >Prețul total este de
                  {{ getCartTotalPriceWithShipping }} RON</b
                >
              </div>

              <form action="#" method="post">
                <div class="a-spacing-medium a-spacing-top-medium">
                  <div class="a-spacing-top-medium">
                    <!-- Card -->
                    <div ref="card"></div>
                  </div>

                  <div class="a-spacing-top-medium"></div>
                  <hr />
                  <div class="a-spacing-top-medium">
                    <span>
                      <b>Asigură-te că adresa este corectă</b>
                    </span>
                  </div>

                  <!-- Buton cumpără -->
                  <div class="a-spacing-top-large">
                    <span class="a-button-register">
                      <span class="a-button-inner">
                        <span @click="onPurchase" class="a-button-text"
                          >Cumpără</span
                        >
                      </span>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-sm-3"></div>
        </div>
      </div>
      <div class="col-xs-12" style="height: 310px"></div>
    </div>
  </main>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      error: "",
      stripe: null,
      card: null,
    };
  },
  computed: {
    ...mapGetters([
      "getCart",
      "getCartTotalPriceWithShipping",
      "getEstimatedDelivery",
    ]),
  },
  mounted() {
    this.stripe = Stripe(
      "pk_test_51IqCM0IXajTA5SbsMfAJx1lGlJop0RasGr4kbLMi7yxxn2yMf6RZVRYWEkTg8LNablUuho0gL97SUmLu1mQzhETF00twbf7C6B"
    );
    let elements = this.stripe.elements();
    this.card = elements.create("card");
    this.card.mount(this.$refs.card);
  },
  methods: {
    async onPurchase() {
      try {
        let token = await this.stripe.createToken(this.card);
        let response = await this.$axios.$post("/api/payment", {
          token: token,
          totalPrice: this.getCartTotalPriceWithShipping,
          cart: this.getCart,
          estimatedDelivery: this.getEstimatedDelivery,
        });

        if (response.success) {
          // redirecționare homePage
          this.$store.commit("clearCart");
          this.$router.push("/");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>