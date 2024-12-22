<template>
  <base-layout>
    <h1>Мои интересы</h1>
    <nav>
      <ul>
        <li class="anchor"><a href="#hobby">Мое хобби</a></li>
        <li class="anchor"><a href="#books">Мои любимые книги</a></li>
        <li class="anchor"><a href="#music">Моя любимая музыка</a></li>
        <li class="anchor"><a href="#movies">Мои любимые фильмы</a></li>
      </ul>
    </nav>

    <section id="hobby">
      <h2>Мое хобби</h2>
      <p>Хобби: Разработка компьютерных игр</p>
        <p>Описание: В свободное время люблю разрабатывать небольшие игровые проекты. Механики беру либо из других игр, либо придумываю новые.</p>
    </section>

    <section id="books">
      <h2>Мои любимые книги</h2>
      <ul>
        <li>
          <img src="@/assets/interes1.png" alt="finnigans wake" />
          <p>Жюль Верн 'Двадцать тысяц лье под водой'</p>
        </li>
        <li>
          <img src="@/assets/interes2.jpg" alt="lord of the rings" />
          <p>Жюль Верн 'Таинственный остров'</p>
        </li>
      </ul>
    </section>

    <section id="movies">
      <h2>Мои любимые фильмы</h2>
      <ul>
        <li>
          <img src="@/assets/avatar.webp" alt="fargo" />
          <p>Аватар (2009)</p>
        </li>
        <li>
          <img src="@/assets/httyd.png" alt="barton fink" />
          <p>Как приручить дракона</p>
        </li>
      </ul>
    </section>

    <section id="music">
      <h2>Моя любимая музыка</h2>
      <p>1) Pharrell Williams 'Hadivdivy'</p>
      <p>2) Fleetwood Mac 'The Chain'</p>
    </section>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/BaseLayout.vue";

export default {
  name: "HobbyView",
  components: {
    BaseLayout,
  },
};
</script>

<style scoped>
.anchor > * {
  color: black;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
  align-items: center;
}

li > a {
  text-decoration: none;
}
li:hover > a {
  color: rgb(165, 165, 165);
}

section > ul > li > img {
  width: 300px;
  max-height: 400px;
}

section > ul > li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
