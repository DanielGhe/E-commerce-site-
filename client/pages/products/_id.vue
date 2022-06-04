<template>
  <main>
    <!-- Breadcrumbs -->
    <div class="a-spacing-top-medium"></div>
    <div class="container-fluid">
      <div class="wayfinding-breadcrumbs-container">
        <ul class="a-unordered-list a-horizontal a-size-small">
          <li>
            <span class="a-list-item">
              <a class="a-link-normal a-color-tertiary" href="#">{{ product.category.type}}</a>
            </span>
          </li>
          <li>
            <span class="a-list-item">></span>
          </li>
          <li>
            <span class="a-list-item">
              <a class="a-link-normal a-color-tertiary" href="#">{{ product.title }}</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container-fluid">
      <div class="dp-container">
        <div class="row">
          <!-- Prima coloană - Imaginea produsului și secțiunea autorului -->
          <div class="col-lg-3 col-md-3 col-sm-4">
            <div class="leftCol">
              <!-- Imagine -->
              <div clas="imgBlock">
                <div class="eBooksimg">
                  <img :src="product.photo" class="img-fluid" />
                </div>
              </div>

              <!-- Follow Author -->
              <div class="authorFollow">
                <hr class="a-divider-normal" />
                <h1 class="authorFollowHeading">Urmărește autorul</h1>
                <div class="a-spacing-top-small">
                  <div class="row">
                    <!-- Imagine autor -->
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                      <div class="smallAuthorImageContainer">
                        <a href="#">
                          <img :src="product.owner.photo" class="img-fluid" />
                        </a>
                      </div>
                    </div>
                    <!-- Nume autor -->
                    <div class="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-3">
                      <div class="authorNameCol">
                        <a href="#">{{ product.owner.name }}</a>
                      </div>
                    </div>
                    <!-- Buton urmărire -->
                    <div class="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-6">
                      <div class="authorBtn mt-2">
                        <a href="#">
                          <span class="btnFollow">
                            <span class="a-btn-inner">
                              <button class="a-btn-text">+ Urmărește</button>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- A 2 a coloana, descrierea -->
          <div class="col-lg-6 col-md-6 col-sm-8">
            <div class="centerCol">
              <!-- Titlu produs -->
              <div class="titleDiv">
                <h1 class="productTitle">
                  <span class="largeTitle">{{ product.title }}</span>
                  
                </h1>
              </div>
              <!-- Nume autor -->
              <div class="bylineinfo">
                de
                <a href="#" class="authorName">
                  {{ product.owner.name }}
                  <i
                    class="fas fa-chevron-down"
                    style="font-size: 8px !important; color: #555 !important;"
                  ></i>
                </a> (Autor)
              </div>
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
              <hr style="margin-top: 10px;" />
              <!-- Dummy data -->
              <div class="mediaMatrix">
                <div class="formats">
                  <a href="#" class="link-expander">
                    >
                    <span class="tmmShowPrompt">Vezi toate formatele</span>
                  </a>
                  <ul>
                
                    <!-- Audible -->
                    <li class="swatchElement" style="width: 117px;">
                      <span class="a-list-item">
                        <span class="a-button-toggle">
                          <span class="a-button-inner">
                            <a href="#" class="a-button-text">
                              <span>
                                <img
                                  src="/img/audibleLogo.png"
                                  class="img-fluid"
                                  style="width: 20px;"
                                />Audible
                              </span>
                              <br />
                              <span class="a-color-secondary">-</span>
                            </a>
                          </span>
                        </span>
                        <span class="tmm-olp-links"></span>
                        <span class="tmm-olp-links">
                          <a href="#" class="a-size-mini">
                            <span class="kcpAppBox">
                              <span class="a-declarative">
                                <span class="a-text-bold">Aplicație gratis</span> 
                              </span>
                            </span>
                          </a>
                        </span>
                      </span>
                    </li>
                    <!-- Paperback -->
                    <li class="swatchElement" style="width: 117px;">
                      <span class="a-list-item">
                        <span class="a-button-toggle">
                          <span class="a-button-inner">
                            <a href="#" class="a-button-text">
                              <span>Paperback</span>
                              <br />
                              <span class="a-color-secondary">-</span>
                            </a>
                          </span>
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- Descriere -->
              <div class="bookDescription">
                <div class="bookDescriptionInner">{{ product.description }}</div>
              </div>

          
            </div>
          </div>
          <!-- A 3 a secțiune, cumpărare -->
          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="combinedBuyBox">
              <div class="buyBox">
                <div class="a-section">
                  <div class="clearfix">
                    

                    <!-- Preț -->
                    <div class="float-right">
                      <span
                        class="a-size-medium a-color-price offer-price a-text-normal"
                      >{{ product.price }} RON</span>
                    </div>
                  </div>
                </div>

                <div class="a-section a-spacing-none">
                  <div class="row">
                    <div class="col-sm-5 col-5">
                      <select>
                        <option value="1">Qty: &nbsp; 1</option>
                        <option value="2">Qty: &nbsp; 2</option>
                        <option value="3">Qty: &nbsp; 3</option>
                        <option value="4">Qty: &nbsp; 4</option>
                        <option value="5">Qty: &nbsp; 5</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="a-section a-spacing-small a-spacing-top-micro">
                  <div class="row">
                    <span class="a-color-base buyboxShippingLabel"></span>
                  </div>
                </div>
                <div class="a-section a-spacing-small">
                  <div class="a-section a-spacing-none">
                    <span class="a-size-medium a-color-success">În stoc</span>
                  </div>
                  
                </div>

                <div class="a-section">
                  <div class="a-button-stack" @click="addProductToCart(product)">
                    <span class="a-spacing-small a-button-primary a-button-icon">
                      <span class="a-button-inner">
                        <i class="a-icon a-icon-cart"></i>
                        <input type="submit" name="submit.add-to-cart" class="a-button-input" />
                        <span class="a-button-text">Adaugă în coș</span>
                      </span>
                    </span>
                  </div>
                  <div class="a-button-stack">
                    <span class="a-spacing-small a-button-primary a-button-icon">
                      <span class="a-button-inner">
                        <i class="a-icon a-icon-buynow"></i>
                        <input type="submit" name="submit.add-to-cart" class="a-button-input" />
                        <span class="a-button-text">Cumpără acum</span>
                      </span>
                    </span>
                  </div>
                </div>
                <div class="a-row">
               
                </div>
                <hr />
              
               
                <div class="a-section">
                  <div class="clearfix">
                    <div class="float-left">
                      <form>
                        <input type="radio" id="test2" name="radio-group" />
                        <label for="test1">Cumpără acum</label>
                      </form>
                    </div>
                    <div class="float-right">
                      <span class="a-color-base offer-price a-text-normal">{{ product.price }} RON</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
        <br />
        <hr />
        <div class="books-entity-teaser">
          <div class="bucket">
            <h2>Mai multe despre autor</h2>
            <div class="content">
              <div class="row">
                <!-- Imagine+ buton autor -->
                <div class="col-md-2 col-sm-4 col-4">
                  <div class="authorContent">
                    <div class="authorImageSingle">
                      <a href="#">
                        <img :src="product.owner.photo" class="img-fluid" />
                      </a>
                    </div>
                    <div class="authorFollow">
                      <button class="followButton" type="button">
                        <span class="pr-fb-icon"></span>
                        <span class="pr-fb-text">Urmărește</span>
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Despre autor -->
                <div class="col-md-10 col-sm-8 col-8 pl-0">
                  <div class="mainContent">
                    <h3>Biografie</h3>
                    <div id="authorBio">{{ product.owner.about }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ReviewSection :product="product" :reviews="reviews" />
      </div>
    </div>
  </main>
</template>
<script>
import { mapActions } from "vuex";
import StarRating from "vue-star-rating";
import ReviewSection from "~/components/ReviewSection";
export default {
  components: {
    ReviewSection,
    StarRating
  },
  async asyncData({ $axios, params }) {
    try {
      let singleProduct = $axios.$get(`/api/products/${params.id}`);
      let manyReviews = $axios.$get(`/api/reviews/${params.id}`);

      const [productResponse, reviewsResponse] = await Promise.all([
        singleProduct,
        manyReviews
      ]);

      return {
        product: productResponse.product,
        reviews: reviewsResponse.reviews
      };
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    ...mapActions(["addProductToCart"])
  }
};
</script>
