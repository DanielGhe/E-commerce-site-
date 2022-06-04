<template>
  <main>
    <!--Review produs-->
    <div class="reviewPage mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-8">
            <div class="a-spacing-top-medium">
              <h1 class="a-spacing-base">
                <b>Scrie o recenzie</b>
              </h1>
              <div class="row">
                <!-- Imagine produs -->
                <div class="col-md-2 col-sm-3 col-3">
                  <img :src="product.photo" style="width: 80px" />
                </div>
                <!-- Titlu produs -->
                <div class="col-md-10 col-sm-9 col-9 m-auto">
                  <h4>
                    <b>{{ product.title }}</b>
                  </h4>
                </div>
              </div>
              <div class="a-spacing-top-medium"></div>
              <hr />
              <h2 class="a-spacing-base">Rating general</h2>
              <div class="a-row">
                <!-- Rating -->
                <no-ssr>
                  <star-rating v-model="rating"></star-rating>
                </no-ssr>
              </div>

              <div class="a-spacing-top-large"></div>
              <hr />
              <!-- Titlu -->
              <div class="headline a-spacing-large">
                <h2 class="a-spacing-base">Adaugă un titlu</h2>
                <input
                  type="text"
                  class="a-input-text"
                  style="width: 70%"
                  placeholder="Ce este cel mai important de știut?"
                  v-model="headline"
                />
              </div>
              <!-- Mesaj -->
              <div class="a-spacing-base">
                <h2 class="a-spacing-base">Mesaj</h2>
                <textarea
                  placeholder="Ce ți-a plăcut și ce nu ți-a plăcut?"
                  style="height: 6em; width: 100%"
                  v-model="body"
                ></textarea>
              </div>
            </div>
            <br />
            <br />
            <hr />

            <div class="col-xs-12" style="height: 50px"></div>
            <div class="a-row text-right a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onAddReview"
                    >Adaugă recenzie</span
                  >
                </span>
              </span>
            </div>
          </div>
          <div class="col-sm-2"></div>
        </div>
        <div class="a-spacing-large pb-5"></div>
        <hr />
      </div>
    </div>
    <!--Review produs-->
  </main>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating,
  },
  async asyncData({ $axios, params }) {
    try {
      let response = await $axios.$get(`/api/products/${params.id}`);

      return {
        product: response.product,
      };
    } catch (err) {
      console.log(err);
    }
  },
  data() {
    return {
      rating: 0,
      body: "",
      headline: "",
    };
  },
  methods: {
    onFileSelected() {
      this.selectedFile = event.target.files[0];
      this.fileName = event.target.files[0].name;
    },
    async onAddReview() {
      try {
        let data = new FormData();
        data.append("headline", this.headline);
        data.append("body", this.body);
        data.append("rating", this.rating);

        let response = await this.$axios.$post(
          `/api/reviews/${this.$route.params.id}`,
          data
        );

        if (response.success) {
          this.$router.push(`/products/${this.$route.params.id}`);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
