<template>
  <body>
    <div class="container-fluid">
      <div class="shipping-address">
        <div class="navbarShipping a-spacing-large"></div>
        <div class="a-row">
          <div class="a-size-large a-text-bold a-spacing-mini">
            Verifică comanda
          </div>
          <div class="a-row a-spacing-small a-size-mini"></div>
        </div>
        <div class="row">
          <div class="col-xl-9 col-lg-8 col-md-9 col-sm-12">
            <div class="a-row a-spacing-large"></div>
            <div class="spc-top a-box a-spacing-small">
              <div class="a-box-inner">
                <div class="row">
                  <div class="col-xl-4 col-lg-6 col-sm-6 col-6">
                    <div class="a-spacing-base">
                      <div class="a-row">
                        <strong>
                          Adresă livrare
                          <small>
                            <a href="#">Schimbă</a>
                          </small>
                        </strong>
                      </div>
                      <div class="a-row">
                        <div class="displayAddressDiv">
                          <!-- Adresă client -->
                          <ul class="displayAddressUL">
                            <li>
                              {{ $auth.$state.user.user.address.fullName }}
                            </li>
                            <li>
                              {{ $auth.$state.user.user.address.streetAddress }}
                            </li>
                            <li>{{ $auth.$state.user.user.address.city }}</li>
                            <li>
                              {{ $auth.$state.user.user.address.country }}
                            </li>
                            <li>
                              Telefon:
                              <span dir="ltr">{{
                                $auth.$state.user.user.address.phoneNumber
                              }}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-6 col-sm-6 col-6">
                    <div class="a-spacing-base">
                      <div class="a-row">
                        <strong>
                          Metodă de plată
                          <small>
                            <a href="#">Schimbă</a>
                          </small>
                        </strong>
                      </div>
                      <div class="a-row">
                        <ul class="no-bullet-list">
                          <li class="a-spacing-micro">
                            <span class="a-list-item">
                              <span>
                                <img src="img/visa.gif" class="img-fluid" />
                              </span>
                              terminându-se cu
                              <span>6397</span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="a-row a-spacing-base">
                      <div class="a-row">
                        <strong>
                          Adresă facturare
                          <small>
                            <a href="#">Schimbă</a>
                          </small>
                        </strong>
                      </div>
                      <span>La fel ca adresa de livrare</span>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-6 col-sm-12 col-12">
                    <div class="a-spacing-base">
                      <div class="a-spacing-mini"></div>
                      <div class="row"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="spc-orders a-box">
              <div class="a-box-inner">
                <div class="shipping-group">
                  <!-- Livrare estimată -->
                  <div
                    class="a-row a-color-state a-text-bold a-size-medium a-spacing-small"
                  >
                    Data estimată de livrare: {{ estimatedDelivery }}
                  </div>
                  <div class="row">
                    <!-- Coș -->
                    <div class="col-xl-6 col-lg-7 col-sm-6 col-12">
                      <div
                        class="a-row a-spacing-base"
                        v-for="product in getCart"
                        :key="product._id"
                      >
                        <div class="row">
                          <!-- Imagine produs -->
                          <div class="col-sm-3 col-3">
                            <img :src="product.photo" style="width: 100px" />
                          </div>
                          <!-- Titlu produs -->
                          <div class="col-sm-9 col-9">
                            <div class="a-row">
                              <strong>{{ product.title }}</strong>
                            </div>
                            <!-- Autor -->
                            <div class="a-row a-size-small">
                              {{ product.owner.name }}
                            </div>
                            <div class="a-row">
                              <!-- Preț -->
                              <span class="a-color-price a-spacing-micro">
                                <strong dir="ltr"
                                  >{{
                                    product.price * product.quantity
                                  }}
                                  RON</strong
                                >
                              </span>
                            </div>
                            <div class="a-row">
                              <span class="availability a-color-success"
                                >În stoc.</span
                              >
                            </div>
                            <div class="a-row">
                              <!-- Product's quantity -->
                              <strong>Cantitate: {{ product.quantity }}</strong>
                            </div>

                            <div class="a-row">
                              <div class="a-row a-spacing-top-micro">
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-5 col-sm-6 col-12">
                      <div class="a-row shipping-speeds">
                        <fieldset>
                          <span class="shipping-speeds-title a-size-medium">
                            <b>Alege o opțiune de livrare:</b>
                          </span>
                          <!-- Opțiune livrare -->
                          <div class="a-spacing-mini wednesday">
                            <!-- Shipping normal -->
                            <input
                              type="radio"
                              name="order0"
                              checked="checked"
                              @change="onChooseShipping('normal')"
                            />
                            <span class="a-radio-label">
                              <span class="a-color-success">
                                <strong>Aproximativ 7 zile lucrătoare</strong>
                              </span>
                              <br />
                              <span class="a-color-secondary"
                                >10 RON&nbsp;-&nbsp;Fără tracking</span
                              >
                            </span>
                          </div>
                          <br />
                          <div class="a-spacing-mini tuesday">
                            <!-- Shipping rapid -->
                            <input
                              type="radio"
                              name="order0"
                              @change="onChooseShipping('fast')"
                            />
                            <span class="a-radio-label">
                              <span class="a-color-success">
                                <strong>Aproximativ 3 zile lucrătoare</strong>
                              </span>
                              <br />
                              <span class="a-color-secondary"
                                >20 RON&nbsp;-&nbsp;Cu tracking</span
                              >
                            </span>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-3 col-sm-12 pl-0">
            <div class="a-box-group">
              <div class="a-box a-first">
                <div class="a-box-inner">
                  <div class="a-row a-spacing-micro">
                    <nuxt-link to="/payment">
                      <span class="a-button-place-order">Plasare comandă</span>
                    </nuxt-link>
                  </div>
                  <div class="a-row a-spacing-small a-size-small a-text-center">
                    Plasând comanda, ești de acord cu
                    <a href="#">termenii</a>
                    și
                    <a href="#">condițiile</a>.
                  </div>
                  <div class="a-row">
                    <div id="tfx-header">
                      <div class="a-box a-alert-info a-spacing-small"></div>
                    </div>
                    <h3 class="a-spacing-micro a-size-base">Sumar comandă</h3>
                    <div class="order-summary" style="font-size: 12px">
                      <div class="row">
                        <!-- Preț produse -->
                        <div class="col-sm-6">Produse:</div>
                        <div class="col-sm-6 text-right">
                          {{ getCartTotalPrice }} RON
                        </div>
                      </div>
                      <div class="row">
                        <!-- Cost livrare -->
                        <div class="col-sm-6">Livrare:</div>
                        <div class="col-sm-6 text-right">
                          {{ shippingPrice }} RON
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-sm-6"></div>
                        <div class="col-sm-6 text-right">
                          <hr />
                        </div>
                      </div>
                      <!-- Preț total -->

                      <div class="row">
                        <div class="col-sm-6">
                          <div class="a-color-price a-size-medium a-text-bold">
                            Total:
                          </div>
                        </div>
                        <div class="col-sm-6 text-right">
                          <!-- Preț total -->
                          <div class="a-color-price a-size-medium a-text-bold">
                            {{ getCartTotalPriceWithShipping }} RON
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="a-row a-spacing-small a-spacing-top-small">
          <p class="a-color-secondary a-size-mini">
            Ai nevoie de ajutor?
            <a href="#">Contactează-ne!</a>
          </p>
        </div>
        <hr />
      </div>
    </div>
  </body>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  layout: "none",
  async asyncData({ $axios, store }) {
    try {
      let response = await $axios.$post("/api/shipment", {
        shipment: "normal",
      });

      store.commit("setShipping", {
        price: response.shipment.price,
        estimatedDelivery: response.shipment.estimated,
      });

      return {
        shippingPrice: response.shipment.price,
        estimatedDelivery: response.shipment.estimated,
      };
    } catch (err) {}
  },
  computed: {
    ...mapGetters([
      "getCart",
      "getCartTotalPrice",
      "getCartTotalPriceWithShipping",
    ]),
  },
  methods: {
    async onChooseShipping(shipment) {
      try {
        let response = await this.$axios.$post("/api/shipment", {
          shipment: shipment,
        });

        this.$store.commit("setShipping", {
          price: response.shipment.price,
          estimatedDelivery: response.shipment.estimated,
        });

        this.shippingPrice = response.shipment.price;
        this.estimatedDelivery = response.shipment.estimated;
      } catch (err) {}
    },
  },
};
</script>
