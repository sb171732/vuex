import { createStore } from 'vuex'

export default createStore({
  state: {
      // состояние
      counter:4,
      users:[]
  },
  getters: {
     // 
  },
  mutations: {
      //  мутации 
      set_inc(state){
        state.counter++
      },
      set_dec(state){
        state.counter--
      },
      set_users(state,data){
        state.users = data
      }
  },
  actions: {
      // события
      Inc({commit}){
          commit('set_inc')
      },
      Dec({commit}){
          commit('set_dec')
      },
      getUsers({commit}){
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch("http://localhost/bdtest/", requestOptions)
          .then(response => response.json())
          .then(result => commit('set_users',result))
          .catch(error => console.log('error', error));
      }
  },
  modules: {
     // 
  }
})
