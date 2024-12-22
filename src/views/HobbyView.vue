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
      <p>Я увлекаюсь языками. Люблю учить новые для меня языки.</p>
    </section>

    <section id="books">
      <h2>Мои любимые книги</h2>
      <ul>
        <li>
          <img src="@/assets/fin.webp" alt="finnigans wake" />
          <p>Поминки по Финнигану</p>
        </li>
        <li>
          <img src="@/assets/lord.webp" alt="lord of the rings" />
          <p>Властелин колец</p>
        </li>
        <li>
          <img src="@/assets/hobbit.webp" alt="hobbit" />
          <p>Хоббит</p>
        </li>
      </ul>
    </section>

    <section id="music">
      <h2>Моя любимая музыка</h2>
      <ul>
        <li>
          <img
            src="@/assets/Steel_panther_feel_the_steel.jpg"
            alt="steel panther"
          />
          <p>Feel the steel</p>
        </li>
        <li>
          <img
            src="@/assets/Type_O_Negative_-_Slow,_Deep_And_Hard.jpg"
            alt="type o"
          />
          <p>Slow, Deep and Hard</p>
        </li>
        <li>
          <img src="@/assets/ModernPain.jpg" alt="corb lund" />
          <p>Modern pain</p>
        </li>
      </ul>
    </section>

    <section id="movies">
      <h2>Мои любимые фильмы</h2>
      <ul>
        <li>
          <img src="@/assets/Fargo.jpg" alt="fargo" />
          <p>Fargo</p>
        </li>
        <li>
          <img src="@/assets/BartonFink.jpg" alt="barton fink" />
          <p>Barton Fink</p>
        </li>
        <li>
          <img
            src="@/assets/No_Country_for_Old_Men_poster.jpg"
            alt="no country"
          />
          <p>No country for old man</p>
        </li>
      </ul>
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
