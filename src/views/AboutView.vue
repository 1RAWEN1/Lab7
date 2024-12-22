<template>
  <base-layout>
    <h1>Обо мне</h1>
    <p>
      Я, Сафаров Тимофей Викторович, родился в городе Севастополе в 2004 году. С
      детства увлекаюсь компьютерными технологиями, что и привело меня к выбору
      специальности в области информационных технологий.
    </p>
    <p>
      В настоящее время я студент третьего курса СевГУ, где изучаю
      программирование и веб-разработку.
    </p>
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
