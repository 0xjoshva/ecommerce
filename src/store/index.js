import { createStore } from 'vuex'

export default createStore({
  state: {
    User: null,
    Product: null,
  },
  mutations: {
    setUser: (state, user) => {
      state.User = user  ;
    },
    setProduct(state, product) {
      state.activeProduct = product
    }
  },
  actions: {
    login: async (context, payload) => {
      fetch("https://eomp.herokuapp.com/users/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: 
        JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    },
    signUp: async (context, payload) => {
      fetch("https://eomp.herokuapp.com/users/register", {
        method: 'POST',
        body: JSON.stringify({
            full_name: payload.full_name,
            email: payload.email,
            password: payload.password,
        }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
        }
  },
  modules: {
  }
})

