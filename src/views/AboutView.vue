<template>
  <base-layout>
    <h1>Обо мне</h1>
    <p>
      Я, Цыбенков Константин, родился 16 августа 2005г. в г. Севастополе.
    </p>
      <p>С 2011 года по 2022 год получал образование в ГБОУ СОШ №22.</p>
      <p>С 2023 года и по нынешнее время обучаюсь в ФГАОУ ВО "Севастопольский государственный университет".</p>
      <p>Основным языком программирования считаю Java. Умею разрабатывать компьютерные игры, REST-сервисы и мобильные приложение.</p>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/BaseLayout.vue";

export default {
  name: "AboutView",
  components: {
    BaseLayout,
  },
};
</script>
