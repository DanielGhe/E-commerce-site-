<template>
  <main>
    <div class="a-spacing-large"></div>
    <div class="container-fluid browsing-history">
      <div class="row">
        <div class="col-sm-8 col-8">
          <h1 class="a-size-large a-spacing-none a-text-normal">
            Toate produsele
          </h1>
          <div class="a-spacing-large"></div>
          <!-- Butoane -->
          <nuxt-link to="/products" class="a-button-buy-again"
            >Adaugă produs nou</nuxt-link
          >

          <nuxt-link to="/category" class="a-button-history margin-right-10"
            >Adaugă categorie nouă</nuxt-link
          >
          <nuxt-link to="/owner" class="a-button-history margin-right-10"
            >Adaugă companie/autor nou</nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="a-spacing-large"></div>
    <!-- Pagină listare -->
    <div class="container-fluid browsing-history">
      <div class="row">
        <div
          v-for="(product, index) in products"
          :key="product._id"
          class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 br bb"
        >
          <div class="history-box">
            <!-- Imagine produs -->
            <a href="#" class="a-link-normal">
              <img :src="product.photo" class="img-fluid" />
            </a>
            <!-- Titlu produs -->
            <div class="a-spacing-top-base asin-title">
              <span class="a-text-normal">
                <div class="p13n-sc-truncated">{{ product.title }}</div>
              </span>
            </div>
            <!-- Recenzie produs -->
            <div class="reviewGroup">
                <no-ssr>
                  <star-rating
                    :rating="product.averageRating"
                    :show-rating="false"
                    :glow="1"
                    :border-width="1"
                    :rounded-corners="true"
                    :read-only="true"
                    :star-size="18"
                    :star-points="[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17]"
                  ></star-rating>
                </no-ssr>
              </div>
            <!-- Preț produs -->
            <div class="a-row">
              <span class="a-size-base a-color-price">
                <span class="p13n-sc-price">{{ product.price }} RON</span>
              </span>
            </div>
            <!-- Butoane produs -->
            <div class="a-row">
              <nuxt-link
                :to="`/products/${product._id}`"
                class="a-button-history margin-right-10"
                >Actualizare</nuxt-link
              >
              <a
                href="#"
                class="a-button-history margin-right-10"
                @click="onDeleteProduct(product._id, index)"
              >Ștergere</a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  //asyncData preia datele inainte ca nuxt sa termine de incarcat pagina in browser
  //bun pt SEO pt ca datele vor fi incarcate mai intai
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:8000/api/products");
      console.log(response);
      return {
        products: response.products,
      };
    } catch (err) {}
  },
  components: {
    
    StarRating
  },
  methods: {
    async onDeleteProduct(id, index) {
      try {
        let response = await this.$axios.$delete(
          `http://localhost:8000/api/products/${id}`
        );
        if (response.status) {
          this.products.splice(index, 1);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
