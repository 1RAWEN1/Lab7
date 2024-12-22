<template>
  <base-layout>
    <h1>История просмотра</h1>

    <h2>История текущего сеанса</h2>
    <table>
      <thead>
        <tr>
          <th>Страница</th>
          <th>Количество просмотров</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(count, page) in sessionHistory" :key="page">
          <td>{{ page }}</td>
          <td>{{ count }}</td>
        </tr>
      </tbody>
    </table>

    <h2>История за все время</h2>
    <table>
      <thead>
        <tr>
          <th>Страница</th>
          <th>Количество просмотров</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(count, page) in allTimeHistory" :key="page">
          <td>{{ page }}</td>
          <td>{{ count }}</td>
        </tr>
      </tbody>
    </table>
  </base-layout>
</template>

<script>
import { mapState } from "vuex";
import BaseLayout from "../components/BaseLayout.vue";

export default {
  name: "HistoryView",
  computed: {
    ...mapState(["sessionHistory", "allTimeHistory"]),
  },
  mounted() {
    this.$store.dispatch("updateViewingHistory");
  },
  components: {
    BaseLayout,
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  font-family: Arial, sans-serif;
  margin-bottom: 100px;
  table-layout: auto;
  width: auto;
}
table th,
table td {
  border: 1px solid black;
  padding: 5px;
  text-align: center;
}
table th {
  background-color: #f2f2f2;
}
</style>
