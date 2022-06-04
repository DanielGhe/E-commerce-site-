export const state = () => ({
  // State
  cart: [],
  cartLength: 0,
  shippingPrice: 0,
  shippingEstimatedDelivery: ""
});

export const actions = {
  addProductToCart({ state, commit }, product) {
    const cartProduct = state.cart.find(prod => prod._id === product._id);

    if (!cartProduct) {
      commit("pushProductToCart", product);
    } else {
      commit("incrementProductQty", cartProduct);
    }

    commit("incrementCartLength");
  }
};

export const mutations = {
  pushProductToCart(state, product) {
    product.quantity = 1;
    state.cart.push(product);
  },

  incrementProductQty(state, product) {
    product.quantity++;
    let indexOfProduct = state.cart.indexOf(product);
    state.cart.splice(indexOfProduct, 1, product);
  },

  incrementCartLength(state) {
    state.cartLength = 0;
    if (state.cart.length > 0) {
      state.cart.map(product => {
        state.cartLength += product.quantity;
      });
    }
  },
  /*
    1. Găsește produsul în coș
    2. Schimbă cantitatea produsului
    3. Actualizare marime coș
    4. schimbă prod vechi cu prod nou
  
    */
  changeQty(state, { product, qty }) {
    let cartProduct = state.cart.find(prod => prod._id === product._id);
    cartProduct.quantity = qty;

    state.cartLength = 0;
    if (state.cart.length > 0) {
      state.cart.map(product => {
        state.cartLength += product.quantity;
      });
    }

    let indexOfProduct = state.cart.indexOf(cartProduct);
    state.cart.splice(indexOfProduct, 1, cartProduct);
  },
  /*
    1. sterge cantitatea din cartLength
    2. ia indexul prod ce trebuie șters
    3. șterge prod folosind splice
  
    */
  removeProduct(state, product) {
    state.cartLength -= product.quantity;
    let indexOfProduct = state.cart.indexOf(product);
    state.cart.splice(indexOfProduct, 1);
  },

  setShipping(state, { price, estimatedDelivery }) {
    state.shippingPrice = price;
    state.shippingEstimatedDelivery = estimatedDelivery;
  },

  clearCart(state) {
    state.cart = [];
    state.cartLength = 0;
    state.shippingPrice = 0;
    state.shippingEstimatedDelivery = "";
  }
};

export const getters = {
  getCartLength(state) {
    return state.cartLength;
  },
  getCart(state) {
    return state.cart;
  },
  getCartTotalPrice(state) {
    let total = 0;
    state.cart.map(product => {
      total += product.price * product.quantity;
    });

    return total;
  },
  getCartTotalPriceWithShipping(state) {
    let total = 0;
    state.cart.map(product => {
      total += product.price * product.quantity;
    });

    return total + state.shippingPrice;
  },
  getEstimatedDelivery(state) {
    return state.shippingEstimatedDelivery;
  }
};
