<template>
  <div>
    <hr />
    <div class="reviewsMedley">
      <div class="row">
        <div class="col-lg-4 col-md-5 col-sm-12">
          <!-- Număr total recenzii -->
          <a href="#" class="a-color-base">
            <h2>{{product.reviews.length}} recenzii</h2>
          </a>
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
        
          <div class="clearfix">
            <div class="float-left">
              <hr class="a-spacing-large" />
            </div>
          </div>
          <h3 class="a-spacing-micro">Lasă o recenzie acestui produs</h3>
          <div class="a-row a-spacing-large">Împarte cu ceilalți opinia ta!</div>
          <div class="a-row">
            <!-- Link către pagina de recenzie -->
            <span class="a-button-base writeReviewButton cm-cr-button-wide">
              <span class="a-button-inner">
                <nuxt-link :to="`/reviews/${product._id}`" class="a-button-text">Scrie o recenzie</nuxt-link>
              </span>
            </span>
          </div>
          <div class="clearfix">
            <div class="float-left">
              <hr class="mt-4 a-spacing-large" />
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-7 col-sm-12">
          
        
          <div class="cr-widget-focalreviews">
            <div class="card-padding">
              <div class="review-header">
                <h3>
                  <span class="a-size-base">Se afișează {{product.reviews.length}} recenzii</span>
                </h3>
              </div>
              

              <!-- Recenzii -->
              <div class="review-body" v-for="review in reviews" :key="review._id" >
                <div class="genome-widget">
                  <a href="#">
                    <div class="profile-avatar">
                      <img
                        src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"
                      />
                    </div>
                    <!-- utilizator -->
                    <div class="profile-content">
                      <span class="a-profile-name">{{review.user.name}}</span>
                    </div>
                  </a>
                </div>
                <div class="a-row">
                  <!-- Rating -->
                  <a href="#">
                    <i class="fas fa-star" v-for="i in review.rating" :key="i" ></i>
                  </a>
                  <span class="a-letter-space"></span>
                  <!-- Titlu -->
                  <a href="#" class="review-title">{{review.headline}}</a>
                </div>
                <span class="review-date">June 28, 2016</span>
                <div class="review-data">
                  <span class="a-color-secondary">Format: Hardcover</span>
                  <div
                    style="width: 1px !important; height: 15px !important; background-color: #ddd; display: inline-block; margin: 0px 5px -3px 5px;"
                  ></div>
                  <span class="avp-badge a-color-state">Achiziție verificată</span>
                </div>
                <!-- Text recenzie -->
                <div class="review-body">
                  <span>{{review.body}}</span>
                </div>
                <div class="review-comments">
                  <div class="a-spacing-small">
                    <span class="a-size-base a-color-tertiary">60 de oameni au gasit această recenzie ca fiind de ajutor</span>
                  </div>
                  <div class="cr-helpful-button">
                    <span class="a-button-base">
                      <span class="a-button-inner">
                        <a href="#" class="a-button-text">
                          <div class="cr-helpful-text">De ajutor</div>
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <!-- Buton recenzie -->
            </div>
          </div>
          <div class="review-footer">
            <div class="a-row">
              <span class="a-button a-button-base writeReviewButton" id="a-autoid-15">
                <span class="a-button-inner">
                  <nuxt-link :to="`/reviews/${product._id}`" class="a-button-text" role="button">Scrie o recenzie!</nuxt-link>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-0 col-sm-0"></div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
    props: ["product", "reviews"],
    components:{
      StarRating
    },
};
</script>