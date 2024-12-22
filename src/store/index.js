import { createStore } from "vuex"; // Вместо Vue.use(Vuex)

export default createStore({
  state: {
    sessionHistory: {},
    allTimeHistory: {},
  },
  mutations: {
    UPDATE_SESSION_HISTORY(state, { page, count }) {
      state.sessionHistory[page] = count;
    },
    UPDATE_ALL_TIME_HISTORY(state, { page, count }) {
      state.allTimeHistory[page] = count;
    },
    SET_ALL_TIME_HISTORY(state, history) {
      state.allTimeHistory = history;
    },
  },
  actions: {
    updateViewingHistory({ commit, state }) {
      const currentPage = window.location.pathname.split("/").pop() || "index";

      const sessionCount = (state.sessionHistory[currentPage] || 0) + 1;
      commit("UPDATE_SESSION_HISTORY", {
        page: currentPage,
        count: sessionCount,
      });

      let allTimeHistory =
        JSON.parse(localStorage.getItem("allTimeHistory")) || {};
      const allTimeCount = (allTimeHistory[currentPage] || 0) + 1;
      allTimeHistory[currentPage] = allTimeCount;
      localStorage.setItem("allTimeHistory", JSON.stringify(allTimeHistory));
      commit("SET_ALL_TIME_HISTORY", allTimeHistory);
    },
  },
});
