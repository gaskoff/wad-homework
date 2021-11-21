import { createStore } from "vuex";


export default createStore({
  /*state: {},
  mutations: {},
  actions: {},
  modules: {},*/
  state: {
    posts: [
      {
        icon: require("@/assets/pea.png"),
        image: require("@/assets/pilt1.png"),
        date: "1. jaanuar 1970 13:24",
        content: "I think it's going to rain",
        likeButton: require("@/assets/thumb.png"),
        likeCount: 0
      },
      {
        icon: require("@/assets/pea.png"),
        date: "5. jaanuar 1970 13:24",
        content: "Which weighs more, a pound of feathers or a pound of bricks?",
        likeButton: require("@/assets/thumb.png"),
        likeCount: 0
      },
      {
        icon: require("@/assets/pea.png"),
        image: require("@/assets/pilt3.png"),
        date: "2. jaanuar 1970 13:24",
        content: "Felt cute, might delete later",
        likeButton: require("@/assets/thumb.png"),
        likeCount: 0
      }
    ]
    
  },
  getters: {
    getPosts: state => state.posts
  },
  mutations: {
  
    increment(state) {
      state.posts[0].likeCount++;
    }
  },
  actions: {
    increment: ({ commit }) => commit('increment')
  },
  modules: {},
});
/*import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    posts: [
      {
        icon: "@/assets/pea.png",
        image: require("@/assets/pilt1.png"),
        date: "1. jaanuar 1970 13:24",
        content: "I think its going to rain",
        likeButton: "@/assets/thumb.png"
      }
    ]
    
  },
  getters: {
    getPosts: state => state.posts
  },
  mutations: {},
  actions: {},
  modules: {},
}); */
