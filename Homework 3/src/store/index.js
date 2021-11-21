import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [
      {
        id: 1,
        icon: require("@/assets/pea.png"),
        image: require("@/assets/pilt1.png"),
        date: "1. jaanuar 1970 13:24",
        content: "I think it's going to rain",
        likeButton: require("@/assets/thumb.png"),
        likeCount: 5,
      },
      {
        id: 2,
        icon: require("@/assets/pea.png"),
        date: "5. jaanuar 1970 13:24",
        content: "Which weighs more, a pound of feathers or a pound of bricks?",
        likeButton: require("@/assets/thumb.png"),
        likeCount: 3,
      },
      {
        id: 3,
        icon: require("@/assets/pea.png"),
        image: require("@/assets/pilt3.png"),
        date: "2. jaanuar 1970 13:24",
        content: "Felt cute, might delete later",
        likeButton: require("@/assets/thumb.png"),
        likeCount: 0,
      },
      {
        id: 4,
        icon: require("@/assets/pea.png"),
        date: "21. jaanuar 1970 14:24",
        content: "Dogs vs cats, like for dogs, ignore for cats",
        likeButton: require("@/assets/thumb.png"),
        likeCount: 0,
      },
      {
        id: 5,
        icon: require("@/assets/pea.png"),
        date: "1. jaanuar 1980 11:24",
        content: "I have a headache.",
        likeButton: require("@/assets/thumb.png"),
        likeCount: 0,
      },
      {
        id: 6,
        icon: require("@/assets/pea.png"),
        image: require("@/assets/pilt5.jpg"),
        date: "11. jaanuar 1970 10:24",
        content: "What animal is this?",
        likeButton: require("@/assets/thumb.png"),
        likeCount: 0,
      },
      {
        id: 7,
        icon: require("@/assets/pea.png"),
        date: "1. jaanuar 2000 13:24",
        content: "How do i make the like button counter work?",
        likeButton: require("@/assets/thumb.png"),
        likeCount: 0,
      },
      {
        id: 8,
        icon: require("@/assets/pea.png"),
        date: "1. jaanuar 1950 16:24",
        content: "Any good movie recommendations?",
        likeButton: require("@/assets/thumb.png"),
        likeCount: 0,
      },
      {
        id: 9,
        icon: require("@/assets/pea.png"),
        date: "1. jaanuar 1950 16:25",
        content: '"12 angry men" is a good movie',
        likeButton: require("@/assets/thumb.png"),
        likeCount: 0,
      },
      {
        id: 10,
        icon: require("@/assets/pea.png"),
        image: require("@/assets/pilt6.jpg"),
        date: "July 16, 1945 05:29",
        content: "Could anyone tell me what this weird mushroom is in the Jornada del Muerto desert?",
        likeButton: require("@/assets/thumb.png"),
        likeCount: 0,
      },
    ]
  },

  getters: {
    getPosts: state => state.posts
  },

  mutations: {
    resetLikes (state) {
      state.posts.forEach( post =>{
        post.likeCount = 0;
      })
    },
    addLike (state, postID) {
      state.posts[postID-1].likeCount += 1;
  },
},
  actions: {
    resetLikes (context) {
      context.commit('resetLikes')
    },
    addLike (context, postID) {
      context.commit('addLike', postID)
    }
  },
  modules: {},
});
