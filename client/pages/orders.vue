<template>
  <main>
    <div class="container-fluid your-order">
      <div class="row">
        <div class="col-xl-2 col-lg-1 col-md-12"></div>
        <div class="col-xl-8 col-lg-9 col-md-12">
          <div
            class="a-spacing-large a-spacing-top-small a-subheader a-breadcrumb"
          >
            <ul class="a-unordered-list a-nostyle a-horizontal">
              <li>
                <span class="a-list-item">
                  <a class="a-link-normal">
                    <span>Contul tău</span>
                  </a>
                </span>
              </li>
              <li class="a-breadcrumb-divider">›</li>
              <li>
                <span class="a-list-item">
                  <span class="a-color-state">Comenzile tale</span>
                </span>
              </li>
            </ul>
          </div>
          <div class="row">
            <div class="col-md-6 col-sm-5 col-12">
              <h1 class="a-spacing-medium">Comenzile tale</h1>
            </div>
          </div>
          <div class="a-row a-spacing-medium custom-view-options">
            <ul class="a-unordered-list a-nostyle a-horizontal">
              <li role="tab">
                <span class="a-list-item"></span>
              </li>
              <li class="selected" role="tab">
                <span class="a-list-item">
                  <span class="item">Comenzi</span>
                </span>
              </li>
            </ul>
          </div>

          <div class="orderContent">
            <div class="orderContentHeader">
              <div class="row">
                <div
                  class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 text-left"
                >
                  <div class="a-row">
                    <span class="a-size-mini a-color-secondary"
                      >Comenzi plasate</span
                    >
                    <br />
                  </div>
                </div>
                
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-3">
                  <div class="a-row">
                    <span class="a-size-mini a-color-secondary"
                      >Livrare către</span
                    >
                    <br />
                    <!-- Nume client -->
                    <a href class="a-size-base font-weight-bold a-link-normal">
                      {{ $auth.$state.user.user.name }}
                      <i class="far fa-chevron-down"></i>
                    </a>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  <div class="a-row">
                    
                  </div>
                </div>
                <div
                  class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-5 text-right"
                >
                  <div class="a-row">
                    <span class="a-size-mini a-color-secondary"
                      >Comanda# 114-7570830-75444212</span
                    >
                    <br />
                    <a
                      href="#"
                      class="a-size-base font-weight-bold a-link-normal"
                      >Detalii</a
                    >
                    &nbsp;
                    <div
                      style="
                        display: inline-block;
                        background-color: #ddd;
                        height: 15px;
                        width: 2px;
                        margin-bottom: -3px;
                      "
                    ></div>
                    &nbsp;
                    <a
                      href="#"
                      class="a-size-base font-weight-bold a-link-normal"
                      >Factură</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- Comandă -->
            <div
              class="orderContentBodyAlt"
              v-for="order in orders"
              :key="order._id"
            >
              <div class="a-row">
                <h1
                  class="a-size-medium a-text-bold"
                  style="
                    color: #111 !important;
                    font-family: 'MyWebFont', Arial, sans-serif !important;
                  "
                >
                  <!-- Estimated Delivery -->
                  Estimare livrare - {{ order.estimatedDelivery }}
                </h1>
              </div>
              <!-- Listă produse -->
              <div v-for="product in order.products" :key="product._id">
                <div class="a-spacing-base"></div>
                <div class="row">
                  <div class="col-xl-2 col-lg-2 col-2">
                    <!-- Imagine produs -->
                    <a href="#">
                      <img
                        :src="product.productID.photo"
                        class="img-fluid"
                        style="width: 100px"
                      />
                    </a>
                  </div>
                  <div class="col-xl-10 col-lg-10 col-10">
                    <div class="a-row">
                      <span class="a-size-small">
                        <!--Titlu produs -->
                        <a href="#">{{ product.productID.title }}</a>
                      </span>
                    </div>
                    <div class="a-row"></div>
                    <div class="a-row">
                      <div class="a-row">
                        <!-- Preț produs -->
                        <span class="a-size-mini a-color-price"
                          >{{ product.productID.price }} RON</span
                        >
                      </div>
                      <br />
                      <div class="a-row">
                        <span class="a-button-buy-again">Cumpără din nou</span>
                        <span class="a-button-view-item"
                          >Vizualizare produs</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-1 col-md-12"></div>
        </div>
      </div>
      <div class="col-xs-12" style="height: 210px"></div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("/api/orders");

      console.log(response.products);

      return {
        orders: response.products,
      };
    } catch (err) {
      console.log(err);
    }
  },
};
</script>