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
                    <a href="#">
                      <span>Contul tău</span>
                    </a>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li>
                    <nuxt-link to="/address">
                      <span>Adresele tale</span>
                    </nuxt-link>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li class="active">
                    <a href="#">
                      <span>Adresă nouă</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="a-section">
              <h2>Actualizare adresă</h2>
              <div class="a-section a-spacing-none a-spacing-top-small"></div>
             
              <div class="a-section a-spacing-none a-spacing-top-small">
                <b></b>
              </div>
              <form>
                <div class="a-spacing-medium a-spacing-top-medium">
                  <!-- Țară-->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Țară</label>
                    <select class="a-select-option" v-model="country">
                      <option
                        v-for="country in countries"
                        :key="country.alpha2Code"
                        :value="country.name"
                      >
                        {{ country.name }}
                      </option>
                      <option></option>
                    </select>
                  </div>
                  <!-- Nume complet -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Nume complet</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      v-model="fullName"
                      :placeholder="address.fullName"
                    />
                  </div>
                  <!-- Adresă -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Adresă</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      v-model="streetAddress1"
                      :placeholder="address.streetAddress"
                    />
                    <!-- Adresă 2 -->
                    <input
                      type="text"
                      class="a-input-text a-spacing-top-small"
                      style="width: 100%"
                      placeholder="Apartment, suite, unit, building, floor, etc."
                      v-model="streetAddress2"
                    />
                  </div>
                  <!-- Oraș -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Oraș</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      v-model="city"
                      :placeholder="address.city"
                    />
                  </div>
                  <!-- Județ -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Județ</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      v-model="state"
                      :placeholder="address.state"
                    />
                  </div>
                  <!-- Cod poștal -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Cod poștal</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      v-model="zipCode"
                      :placeholder="address.zipCode"
                    />
                  </div>
                  <!-- Număr telefon -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Număr de telefon</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      v-model="phoneNumber"
                      :placeholder="address.phoneNumber"
                    />
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                      <span class="a-size-mini"
                        >Poate fi folosit în timpul livrării</span
                      >
                    </div>
                  </div>
                  <div class="a-spacing-base a-spacing-top-medium">
                    <h3>Adaugă instrucțiuni de livrare</h3>
                  </div>
                  <!-- Instrucțiuni livrare -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px"
                      >Instrucțiuni suplimentare</label
                    >
                    <textarea
                      style="height: 6em; width: 100%"
                      v-model="deliveryInstructions"
                      :placeholder="address.deliverInstructions"
                    ></textarea>
                  </div>
                  <!-- Cod securitate -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px"
                      >Avem nevoie de un cod de securitate pentru a accesa
                      clădirea?</label
                    >
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      v-model="securityCode"
                      :placeholder="address.securityCode"
                    />
                  </div>

                  <div class="a-spacing-top-medium"></div>
                  <hr />
                  <div class="a-spacing-top-medium">
                    <span>
                      <b>Asigurățte că adresa este corectă!</b>
                    </span>
                  </div>

                  <div class="a-spacing-top-large">
                    <span class="a-button-register">
                      <span class="a-button-inner">
                        <span class="a-button-text" @click="onUpdateAddress"
                          >Actualizare adresă</span
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
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    try {
      let response = $axios.$get("/api/countries");
      let singleAddress = $axios.$get(`/api/addresses/${params.id}`);

      let [countriesResponse, addressResponse] = await Promise.all([
        response,
        singleAddress,
      ]);
      return {
        countries: countriesResponse,
        address: addressResponse.address,
      };
    } catch (err) {
      console.log(err);
    }
  },

  data() {
    return {
      country: "United States of America",
      fullName: "",
      streetAddress1: "",
      streetAddress2: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      deliveryInstructions: "",
      securityCode: "",
    };
  },

  methods: {
    async onUpdateAddress() {
      try {
        let data = {
          country: this.country,
          fullName: this.fullName,
          streetAddress: this.streetAddress1 + " " + this.streetAddress2,
          city: this.city,
          state: this.state,
          zipCode: this.zipCode,
          phoneNumber: this.phoneNumber,
          deliverInstructions: this.deliveryInstructions,
          securityCode: this.securityCode,
        };

        let response = await this.$axios.$put(
          `/api/addresses/${this.$route.params.id}`,
          data
        );

        if (response.success) {
          this.$router.push("/address");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>