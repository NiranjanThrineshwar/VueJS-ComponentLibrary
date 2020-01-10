import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

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
    },
    decrement(state) {
      state.count--;
    },
    incrementBy(state, n) {
      state.count += n.amount;
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
    actionA({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit("increment");
          resolve();
        }, 1000);
      });
    },
    actionB({ dispatch, commit }) {
      return dispatch("incrementAsync").then(() => {
        commit("decrement");
      });
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
  },
  methods: {
    getData(state) {
      state.count;
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
// eslint-disable-next-line no-console
console.log(store.commit("increment"));
// eslint-disable-next-line no-console
console.log(store.commit("incrementBy", { amount: 20 }));

export default store;
