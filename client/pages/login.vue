<template>
  <div class="registerPage">
    <div class="container">
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <div class="text-center">
            <nuxt-link to="/">
              <img src="/img/logo-black.png" />
            </nuxt-link>
          </div>

          <form class="mt-4">
            <div class="a-box a-spacing-extra-large">
              <div class="a-box-inner">
                <h1 class="a-spacing-small">Logare</h1>
                <!-- Email -->
                <div class="a-row a-spacing-base">
                  <label for="ap_customer_name" class="a-form-label"
                    >Email</label
                  >
                  <input
                    type="email"
                    id="ap_customer_name"
                    class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                    v-model="email"
                  />
                </div>
                <!-- Parolă -->
                <div class="a-row a-spacing-base">
                  <label for="ap_customer_name" class="a-form-label"
                    >Parolă</label
                  >
                  <input
                    type="password"
                    id="ap_customer_name"
                    class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                    v-model="password"
                  />
                  <div class="a-alert-container">
                    <div class="a-alert-content">
                      Parola trebuie să aibă minim 6 caractere
                    </div>
                  </div>
                </div>
                <!-- Buton -->
                <div class="a-row a-spacing-extra-large mb-4">
                  <span class="a-button-primary">
                    <span class="a-button-inner">
                      <span class="a-button-text" @click="onLogin"
                        >Continuă</span
                      >
                    </span>
                  </span>
                  <div class="a-row a-spacing-top-medium a-size-small">
                    <b>
                      Creând un cont, ești de acord cu
                      <a href="#">Termenii</a> și
                      <a href="#">Condițiile</a>
                    </b>
                  </div>
                </div>
                <hr />
                <div class="a-row">
                  <b>
                    Nu ai un cont?
                    <nuxt-link to="/signup" class="a-link-emphasis"
                      >Înregistrează-te</nuxt-link
                    >
                  </b>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  auth: "guest",
  layout: "none",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async onLogin() {
      try {
        this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        });

        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>