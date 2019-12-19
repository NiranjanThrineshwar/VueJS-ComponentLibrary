import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";

Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: "abc", done: true },
      { id: 2, text: "def", done: true }
    ]
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id);
    }
  }
});

store.commit("increment");
// eslint-disable-next-line no-console
console.log(store.state.count);
// eslint-disable-next-line no-console
console.log(store.getters.doneTodosCount);
// eslint-disable-next-line no-console
console.log(store.getters.getTodoById(2));

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
