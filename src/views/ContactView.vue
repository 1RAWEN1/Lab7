<template>
  <base-layout>
    <h1>Контакт</h1>
    <form
      action="mailto:turserus21+university@gmail.com"
      method="post"
      enctype="text/plain"
      class="contact__form"
      id="contactForm"
      @reset="resetAllErrors"
    >
      <label for="name">ФИО:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        data-popover="Введите полное имя"
        @mouseenter="showPopover"
        @mouseleave="hidePopover"
        ref="nameInput"
        @focus="resetError('name')"
        @blur="validateField('name')"
        :class="{
          'border-green':
            !nameError && $refs.nameInput && $refs.nameInput.value,
          'input-error': nameError,
        }"
      />
      <p v-if="nameError" class="error-message">
        Пожалуйста, заполните поле ФИО.
      </p>

      <fieldset class="gender" name="gender">
        <legend>Пол:</legend>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          required
          data-popover="Выберите пол"
          @mouseenter="showPopover"
          @mouseleave="hidePopover"
        />
        <label for="male" id="male-label">Мужской</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          data-popover="Выберите пол"
          @mouseenter="showPopover"
          @mouseleave="hidePopover"
        />
        <label for="female">Женский</label>
      </fieldset>

      <label for="age">Возраст:</label>
      <select
        id="age"
        name="age"
        required
        data-popover="Выберите возраст"
        @mouseenter="showPopover"
        @mouseleave="hidePopover"
        ref="ageSelect"
        @focus="resetError('age')"
        @blur="validateField('age')"
        :class="{
          'border-green': !ageError && $refs.ageSelect && $refs.ageSelect.value,
          'input-error': ageError,
        }"
      >
        <option value="">Выберите возраст</option>
        <option value="18-25">18-25</option>
        <option value="26-35">26-35</option>
        <option value="36-45">36-45</option>
        <option value="46+">46+</option>
      </select>
      <p v-if="ageError" class="error-message">Пожалуйста, выберите возраст.</p>

      <label for="email">E-mail:</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        data-popover="Введите почту"
        @mouseenter="showPopover"
        @mouseleave="hidePopover"
        ref="emailInput"
        @focus="resetError('email')"
        @blur="validateField('email')"
        :class="{
          'border-green':
            !emailError && $refs.emailInput && $refs.emailInput.value,
          'input-error': emailError,
        }"
      />
      <p v-if="emailError" class="error-message">
        Пожалуйста, введите электронную почту.
      </p>

      <label for="phone">Телефон:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        required
        data-popover="Введите номер телефона"
        @mouseenter="showPopover"
        @mouseleave="hidePopover"
        ref="phoneInput"
        @focus="resetError('phone')"
        @blur="validateField('phone')"
        :class="{
          'border-green':
            !phoneError && $refs.phoneInput && $refs.phoneInput.value,
          'input-error': phoneError,
        }"
      />
      <p v-if="phoneError" class="error-message">
        Пожалуйста, введите номер телефона.
      </p>

      <label for="message">Сообщение:</label>
      <textarea
        id="message"
        name="message"
        required
        data-popover="Введите сообщение"
        @mouseenter="showPopover"
        @mouseleave="hidePopover"
        ref="messageTextarea"
        @focus="resetError('message')"
        @blur="validateField('message')"
        :class="{
          'border-green':
            !messageError &&
            $refs.messageTextarea &&
            $refs.messageTextarea.value,
          'input-error': messageError,
        }"
      ></textarea>
      <p v-if="messageError" class="error-message">
        Пожалуйста, введите сообщение.
      </p>

      <div class="container__calendar">
        <label for="dateOfBirth"> Дата: </label>
        <input
          class="container__calendar__label"
          type="text"
          id="dateOfBirth"
          name="dateOfBirth"
          readonly
          required
          data-popover="Выберите дату рождения"
          @mouseenter="showPopover"
          @mouseleave="hidePopover"
          ref="dateInput"
          @focus="resetError('date')"
          @blur="validateField('date')"
          :class="{
            'border-green': !dateError && dateOfBirth,
            'input-error': dateError,
          }"
          @click="showCalendar"
        />
        <div id="calendar" class="calendar" v-show="isCalendarVisible">
          <div class="header">
            <select v-model="selectedMonth" @change="updateCalendar">
              <option
                v-for="(month, index) in months"
                :key="index"
                :value="index"
              >
                {{ month }}
              </option>
            </select>
            <select v-model="selectedYear" @change="updateCalendar">
              <option v-for="year in years" :key="year" :value="year">
                {{ year }}
              </option>
            </select>
          </div>

          <table id="calendarTable">
            <thead>
              <tr>
                <th v-for="(day, index) in weekDays" :key="index">{{ day }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(week, index) in calendar" :key="index">
                <td
                  v-for="(day, index) in week"
                  :key="index"
                  @click="day && selectDate(day)"
                  :class="{ 'empty-cell': !day }"
                >
                  {{ day }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p v-if="dateError" class="error-message">
        Пожалуйста, выберите дату рождения.
      </p>

      <div
        v-if="isPopoverVisible"
        class="popover"
        :class="{
          'arrow-top': popoverArrowDirection === 'up',
          'arrow-bottom': popoverArrowDirection === 'down',
        }"
        :style="{
          top: popoverPosition.top + 'px',
          left: popoverPosition.left + 'px',
        }"
      >
        <div class="popover-content">{{ popoverText }}</div>
        <div class="popover-arrow"></div>
      </div>

      <button type="submit" class="button_submit">Отправить</button>
      <button type="reset" @click="resetAll">Очистить форму</button>
    </form>

    <div v-if="isModalVisible" class="modal-overlay">
      <div class="modal-window">
        <p>Вы действительно хотите это сделать?</p>
        <div class="modal-buttons">
          <button id="confirmExit" @click="submitForm">Да</button>
          <button id="cancelExit" @click="hideModal">Нет</button>
        </div>
      </div>
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/BaseLayout.vue";

export default {
  name: "ContactView",
  components: {
    BaseLayout,
  },

  data() {
    return {
      isModalVisible: false,
      isPopoverVisible: false,
      popoverText: "",
      popoverPosition: { top: 0, left: 0 },
      popoverArrowDirection: "up",

      nameError: false,
      ageError: false,
      emailError: false,
      phoneError: false,
      messageError: false,
      dateError: false,

      months: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      weekDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      selectedMonth: new Date().getMonth(),
      selectedYear: new Date().getFullYear(),
      isCalendarVisible: false,
      calendar: [],
      dateOfBirth: "",
      years: this.generateYears(),
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },

    hideModal() {
      this.isModalVisible = false;
      this.$refs.testForm.reset();
    },

    submitForm() {
      this.hideModal();
    },

    showPopover(event) {
      this.popoverText = event.target.dataset.popover;

      const rect = event.target.getBoundingClientRect();

      const offset = 10;

      if (window.innerHeight - rect.bottom < 100) {
        this.popoverPosition.top = rect.top + window.scrollY - 50 - offset;
        this.popoverArrowDirection = "down";
      } else {
        this.popoverPosition.top = rect.bottom + window.scrollY + offset;
        this.popoverArrowDirection = "up";
      }

      this.popoverPosition.left =
        rect.left + window.scrollX + rect.width / 2 - 20;

      this.isPopoverVisible = true;
    },

    hidePopover() {
      this.isPopoverVisible = false;
    },

    validateField(field) {
      if (field === "name") {
        this.nameError = !this.$refs.nameInput.value;
      } else if (field === "age") {
        this.ageError = this.$refs.ageSelect.value === "";
      } else if (field === "email") {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.emailError =
          !this.$refs.emailInput.value ||
          !emailPattern.test(this.$refs.emailInput.value);
      } else if (field === "phone") {
        const phonePattern = /^(\+7|\+3)\d{9,11}$/;
        this.phoneError =
          !this.$refs.phoneInput.value ||
          !phonePattern.test(this.$refs.phoneInput.value);
      } else if (field === "message") {
        this.messageError = !this.$refs.messageTextarea.value;
      } else if (field === "date") {
        this.dateError = !this.$refs.dateInput.value;
      }
    },

    resetError(field) {
      if (field === "name") {
        this.nameError = false;
      } else if (field === "age") {
        this.ageError = false;
      } else if (field === "email") {
        this.emailError = false;
      } else if (field === "phone") {
        this.phoneError = false;
      } else if (field === "message") {
        this.messageError = false;
      } else if (field === "date") {
        this.dateError = false;
      }
    },

    showCalendar() {
      this.isCalendarVisible = true;
      this.updateCalendar();
    },

    hideCalendar() {
      this.isCalendarVisible = false;
      this.validateField("date");
    },

    selectDate(day) {
      const selectedDate = new Date(this.selectedYear, this.selectedMonth, day);
      this.dateOfBirth = this.formatDate(selectedDate);
      this.$refs.dateInput.value = this.dateOfBirth;
      this.hideCalendar();
    },

    formatDate(date) {
      return `${(date.getMonth() + 1).toString().padStart(2, "0")}/${date
        .getDate()
        .toString()
        .padStart(2, "0")}/${date.getFullYear()}`;
    },

    generateYears() {
      const currentYear = new Date().getFullYear();
      const years = [];
      for (let year = currentYear - 100; year <= currentYear; year++) {
        years.push(year);
      }
      return years;
    },

    updateCalendar() {
      const month = this.selectedMonth;
      const year = this.selectedYear;
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const calendar = [];
      let date = 1;

      const firstDayIndex = firstDay.getDay();
      let week = Array(7).fill(null);
      for (let i = 0; i < firstDayIndex; i++) {
        week[i] = null;
      }

      while (date <= lastDay.getDate()) {
        if (week.length === 7) {
          calendar.push(week);
          week = [];
        }
        week.push(date <= lastDay.getDate() ? date : null);
        date++;
      }
      if (week.length > 0) {
        calendar.push(week);
      }
      this.calendar = calendar;
    },
    handleOutsideClick(event) {
      if (this.isCalendarVisible) {
        const calendar = document.querySelector("#calendar");
        const dateInput = this.$refs.dateInput;
        if (!calendar.contains(event.target) && event.target !== dateInput) {
          this.hideCalendar();
        }
      }
    },

    resetAllErrors() {
      this.resetError("name");
      this.resetError("age");
      this.resetError("email");
      this.resetError("phone");
      this.resetError("message");
      this.resetError("date");
      this.dateOfBirth = "";
    },
  },

  mounted() {
    document.addEventListener("click", this.handleOutsideClick);
  },

  beforeUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
  },
};
</script>

<style scoped>
.contact__form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: start;
  margin-bottom: 30rem;
}

textarea,
option,
select,
input,
button {
  font-size: 2rem;
}

.button_submit {
  margin-top: 30px;
}

.container__calendar__label {
  margin-top: 30px;
}

.calendar {
  /* display: none; */
  position: absolute;
  left: 100px;
  background-color: rgb(219, 219, 219);
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 1000;
}
.calendar table {
  border-collapse: separate;
  border-spacing: 10px;
}
.calendar td {
  padding: 5px;
  text-align: center;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  border: 2px rgb(86, 86, 86) solid;
  border-radius: 10px;
}
.calendar td:hover {
  background-color: #f0f0f0;
}
.calendar .header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

#dateOfBirth {
  cursor: text;
}

.empty-cell {
  background-color: transparent !important;
  border: none !important;
}

.error-message {
  color: red;
  font-size: 0.8em;
  margin-top: 5px;
}

input:not([type="radio"]),
select,
textarea {
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;
}
input:not([type="radio"]):focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #007bff;
}

#male-label {
  margin-right: 20px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000000;
}

.modal-window {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

.popover {
  display: flex;
  position: absolute;
  background: #f9f9f9;
  border: 1px solid #dbdbdb;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}
.popover::before,
.popover::after {
  display: none;
}
.popover-content {
  position: relative;
  z-index: 2;
}
.popover-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}
.popover-arrow:after {
  content: "";
  position: absolute;
  left: -7px;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
}
.popover.arrow-top .popover-arrow {
  bottom: 100%;
  border-bottom: 8px solid #000000;
}
.popover.arrow-top .popover-arrow:after {
  bottom: -7px;
  border-bottom: 7px solid #000000;
}
.popover.arrow-bottom .popover-arrow {
  top: 100%;
  border-top: 8px solid #000000;
}
.popover.arrow-bottom .popover-arrow:after {
  top: -7px;
  border-top: 7px solid #000000;
}

.input-error {
  border: 2px solid red !important;
}
.error-message {
  color: red;
  font-size: 1.25rem;
  margin: 0;
}
.border-green {
  border: 2px solid green !important;
}
</style>
