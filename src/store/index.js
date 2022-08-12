import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user  ;
    },
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
      fetch('https://eomp.herokuapp.com/users/register', {
        method: 'POST',
        body: JSON.stringify({
            full_name: payload.full_name,
            email: payload.email,
            password: payload.password,
        }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
        }
  },
  modules: {
  }
})

