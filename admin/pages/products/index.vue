<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-allign: center">Adaugă un produs</h2>
            <form>
              <!-- Lista categorii -->
              <div class="a-spacing-top-medium">
                <label>Categorie</label>
                <select class="a-select-option" v-model="categoryID">
                  <option
                    v-for="category in categories"
                    :value="category._id"
                    :key="category._id"
                  >
                    {{ category.type }}
                  </option>
                </select>
              </div>
              <!-- Lista owneri -->
              <div class="a-spacing-top-medium">
                <label>Autor/Producător</label>
                <select class="a-select-option" v-model="ownerID">
                  <option
                    v-for="owner in owners"
                    :value="owner._id"
                    :key="owner._id"
                  >
                    {{ owner.name }}
                  </option>
                </select>
              </div>
              <!-- Titlu -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Titlu</label>
                <input
                  type="text"
                  class="a-inut-text"
                  style="width: 100%"
                  v-model="title"
                />
              </div>

              <!-- Pret -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Preț</label>
                <input
                  type="number"
                  class="a-inut-text"
                  style="width: 100%"
                  v-model="price"
                />
              </div>

                <!-- Cantitate -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Cantitate</label>
                <input
                  type="number"
                  class="a-inut-text"
                  style="width: 100%"
                  v-model="stockQuantity"
                />
              </div>

              <!-- Descriere -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Descriere</label>
                <textarea
                  placeholder="Detalii pentru descrierea produsului"
                  style="width: 100%"
                  v-model="description"
                ></textarea>
              </div>

              <!-- Imagine -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Adaugă imagine</label>
                <div class="a-row a-spacing-top-medium">
                  <label class="choosefile-button">
                    <i class="fal fa-plus"></i>
                    <input type="file" @change="onFileSelected" />
                    <p style="margin-top: -70px">{{ fileName }}</p>
                  </label>
                </div>
              </div>
              <!-- Buton -->
              <hr />
              <div class="a-sacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text" @click="onAddProduct" >Adaugă produs</span>
                  </span>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let categories = $axios.$get("http://localhost:8000/api/categories");
      let owners = $axios.$get("http://localhost:8000/api/owners");

      const [catResponse, ownerResponse] = await Promise.all([
        categories,
        owners,
      ]);
      console.log(catResponse);
      return {
        categories: catResponse.categories,
        owners: ownerResponse.owners,
      };
    } catch (err) {
      console.log(err);
    }
  },
  data() {
    return {
      categoryID: null,
      ownerID: null,
      title: "",
      price: 0,
      description: "",
      selectedFile: null,
      stockQuantity:1,
      fileName: "",
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
      this.fileName = event.target.files[0].name;
    },

    async onAddProduct() {
     let data = new FormData();
      data.append("title", this.title);
      data.append("price", this.price);
      data.append("description", this.description);
      data.append("ownerID", this.ownerID);
      data.append("stockQuantity", this.stockQuantity);
      data.append("categoryID", this.categoryID);
      data.append("photo", this.selectedFile, this.selectedFile.name);

      let result = await this.$axios.$post(
        'http://localhost:8000/api/products',
        data
      );
      this.$router.push("/");
    },
  },
};
</script>