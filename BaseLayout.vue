<template>
  <header>
    <nav class="menu">
      <ul>
        <router-link
          to="/"
          class="menu__part"
          @mouseenter="setHoverImage('home', true)"
          @mouseleave="setHoverImage('home', false)"
        >
          <img
            :src="hoverImages.home ? hoverIcons.home : icons.home"
            alt="Главная"
            class="menu__icon"
          />
          <div>Главная</div>
        </router-link>
        <router-link
          to="/about"
          class="menu__part"
          @mouseenter="setHoverImage('about', true)"
          @mouseleave="setHoverImage('about', false)"
        >
          <img
            :src="hoverImages.about ? hoverIcons.about : icons.about"
            alt="Обо мне"
            class="menu__icon"
          />
          <div>Обо мне</div>
        </router-link>

        <li
          class="menu__part dropdown"
          @mouseenter="setHoverImage('hobby', true)"
          @mouseleave="setHoverImage('hobby', false)"
        >
          <a href="#" @click.prevent="toggleDropdown">
            <img
              :src="hoverImages.hobby ? hoverIcons.hobby : icons.hobby"
              alt="Мои интересы"
              class="menu__icon"
            />
            <div>Мои интересы</div>
          </a>
          <div v-if="dropdownVisible" class="dropdown-content">
            <router-link to="/hobby#hobby" @click="closeDropdown">
              Мое хобби
            </router-link>
            <router-link to="/hobby#books" @click="closeDropdown">
              Мои любимые книги
            </router-link>
            <router-link to="/hobby#music" @click="closeDropdown">
              Моя любимая музыка
            </router-link>
            <router-link to="/hobby#movies" @click="closeDropdown">
              Мои любимые фильмы
            </router-link>
          </div>
        </li>

        <router-link
          to="/university"
          class="menu__part"
          @mouseenter="setHoverImage('university', true)"
          @mouseleave="setHoverImage('university', false)"
        >
          <img
            :src="
              hoverImages.university ? hoverIcons.university : icons.university
            "
            alt="Учеба"
            class="menu__icon"
          />
          <div>Учеба</div>
        </router-link>
        <router-link
          to="/gallery"
          class="menu__part"
          @mouseenter="setHoverImage('gallery', true)"
          @mouseleave="setHoverImage('gallery', false)"
        >
          <img
            :src="hoverImages.gallery ? hoverIcons.gallery : icons.gallery"
            alt="Фотоальбом"
            class="menu__icon"
          />
          <div>Фотоальбом</div>
        </router-link>
        <router-link
          to="/contact"
          class="menu__part"
          @mouseenter="setHoverImage('contact', true)"
          @mouseleave="setHoverImage('contact', false)"
        >
          <img
            :src="hoverImages.contact ? hoverIcons.contact : icons.contact"
            alt="Контакт"
            class="menu__icon"
          />
          <div>Контакт</div>
        </router-link>
        <router-link
          to="/test"
          class="menu__part"
          @mouseenter="setHoverImage('test', true)"
          @mouseleave="setHoverImage('test', false)"
        >
          <img
            :src="hoverImages.test ? hoverIcons.test : icons.test"
            alt="Тест"
            class="menu__icon"
          />
          <div>Тест</div>
        </router-link>
        <router-link
          to="/history"
          class="menu__part"
          @mouseenter="setHoverImage('history', true)"
          @mouseleave="setHoverImage('history', false)"
        >
          <img
            :src="hoverImages.history ? hoverIcons.history : icons.history"
            alt="История просмотра"
            class="menu__icon"
          />
          <div>История просмотра</div>
        </router-link>
        <li class="menu__part" id="dateTime">
          <div id="currentDateTime">
            {{ timeString }}
            <br />
            {{ dateString }}
            <br />
            {{ dayMonthString }}
          </div>
        </li>
      </ul>
    </nav>
  </header>
  <main
    :class="{
      'main-gallery': $route.name === 'gallery',
      main: $route.name !== 'gallery',
    }"
  >
    <slot @click="closeDropdownOutside"></slot>
  </main>
</template>

<script>
export default {
  name: "BaseLayout",
  data() {
    return {
      dropdownVisible: false,
      hoverImages: {
        home: false,
        about: false,
        gallery: false,
        hobby: false,
        university: false,
        contact: false,
        test: false,
        history: false,
      },
      icons: {
        home: require("../assets/logo/main.png"),
        about: require("../assets/logo/aboutMe.png"),
        gallery: require("../assets/logo/gallery.png"),
        hobby: require("../assets/logo/hobby.png"),
        university: require("../assets/logo/study.png"),
        contact: require("../assets/logo/contact.png"),
        test: require("../assets/logo/test.png"),
        history: require("../assets/logo/history.png"),
      },
      hoverIcons: {
        home: require("../assets/logo/main2.png"),
        about: require("../assets/logo/aboutMe2.png"),
        gallery: require("../assets/logo/gallery2.png"),
        hobby: require("../assets/logo/hobby2.png"),
        university: require("../assets/logo/study2.png"),
        contact: require("../assets/logo/contact2.png"),
        test: require("../assets/logo/test2.png"),
        history: require("../assets/logo/history2.png"),
      },

      timeString: "",
      dateString: "",
      dayMonthString: "",
      days: [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
      ],
      months: [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
      ],
    };
  },
  mounted() {
    this.updateDateTime();
    setInterval(this.updateDateTime, 1000);
    this.$nextTick(() => {
      this.scrollToHashOnLoad();
    });
  },
  methods: {
    updateDateTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const month = now.getMonth();
      const year = now.getFullYear();
      const weekDay = now.getDay();

      this.timeString = `${hours}:${minutes}:${seconds}`;
      this.dateString = `${day}.${String(month + 1).padStart(2, "0")}.${year}`;
      this.dayMonthString = `${this.days[weekDay]}, ${this.months[month]}`;
    },
    setHoverImage(menuItem, isHover) {
      this.hoverImages[menuItem] = isHover;
    },
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    closeDropdownOutside(event) {
      if (!event.target.closest(".dropdown")) {
        this.dropdownVisible = false;
      }
    },
    scrollToHashOnLoad() {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  font-size: 1.5rem;
  line-height: 1.6;
  margin: 0;
  border: 0;
  padding: 0;
  background-color: #f4f4f4;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  border: 0;
  padding: 0;
}

.main {
  padding: 20px 40px;
}

fieldset {
  border: none;
  padding: 0;
}

::-webkit-scrollbar {
  width: 10px;
  padding: 2px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #1b681b;
  border-radius: 100px;
}
::-webkit-scrollbar-thumb:hover {
  background: #1b471b;
}

.menu__part {
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.menu__icon {
  width: 60px;
  background-color: rgb(211, 211, 211);
  padding: 5px;
  border-radius: 10px;
  aspect-ratio: 1/1;
  margin-bottom: 5px;
}
.menu__icon-hover {
  display: none;
}

.dropdown-content {
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 170px;
}

.dropdown-content a {
  color: black !important;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.show {
  display: block;
}

#dateTime {
  text-align: center;
  padding: 10px;
  font-size: 1.5rem;
}

.popover {
  position: absolute;
  display: none;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  max-width: 200px;
  font-size: 14px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}
.popover::before,
.popover::after {
  content: "";
  position: absolute;
  left: 10px;
  border-style: solid;
  border-color: transparent;
}
.popover::before {
  top: -10px;
  border-width: 0 10px 10px 10px;
  border-bottom-color: #ccc;
}
.popover::after {
  top: -9px;
  border-width: 0 10px 10px 10px;
  border-bottom-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

.modal-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1000;
}

.modal-window {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1001;
}

.modal-buttons {
  margin-top: 20px;
  text-align: center;
}
.modal-buttons button {
  margin: 0 10px;
  padding: 5px 15px;
  cursor: pointer;
}

/* header */
header nav ul {
  list-style-type: none;
  padding: 0;
}

header nav ul a {
  color: #fff;
  text-decoration: none;
}

header nav ul a:visited {
  text-decoration: none;
  color: #fff;
}
header nav ul a:hover {
  color: #c2c2c2;
}

header {
  background-color: #ff7f00;
  color: #fff;
  padding: 1rem;
}
header nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 25px;
}
header nav ul > * {
  display: inline;
  margin-right: 1rem;
}
</style>
