import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex);

export const store = new vuex.Store({
    state: {
        standardMenuOptions: [
            { name: 'development' },
            { name: 'design' },
            { name: 'photography' }
        ],
    },
    mutations: {
    //   setResults(state, data) {
    //     state.results = data.results
    //   },
    //   setMyTunes(state, data){
    //     state.myTunes = data 
    //   }
    },
    actions: {
      getMenuOptions({ commit, dispatch }) {
        //this should send a get request to your server to return the list of saved tunes
          commit('setMyTunes', data)

      }
    }
  })
  
  export default store
  

