<template>
  <base-layout>
    <h1 class="main__title">Тест по Инженерной графике</h1>
    <form
      action="mailto:turserus21+university_test@gmail.com"
      method="post"
      enctype="text/plain"
      class="test__form"
      id="testForm"
      @submit.prevent="showModal"
      ref="testForm"
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

      <label for="group-select">Группа:</label>
      <select
        id="group-select"
        class="form-select"
        name="group"
        data-popover="Выберите группу"
        @mouseenter="showPopover"
        @mouseleave="hidePopover"
      >
        <optgroup label="Бакалавриат-21 (ОФО)">
          <option value="ИБ/б-21-1-о">ИБ/б-21-1-о</option>
          <option value="ИБ/б-21-2-о">ИБ/б-21-2-о</option>
          <option value="ИВТ/б-21-1-о">ИВТ/б-21-1-о</option>
          <option value="ИВТ/б-21-2-о">ИВТ/б-21-2-о</option>
          <option value="ИС/б-21-1-о">ИС/б-21-1-о</option>
          <option value="ИС/б-21-2-о">ИС/б-21-2-о</option>
          <option value="ИС/б-21-3-о">ИС/б-21-3-о</option>
          <option value="ПИ/б-21-1-о">ПИ/б-21-1-о</option>
          <option value="ПИН/б-21-1-о">ПИН/б-21-1-о</option>
        </optgroup>
        <optgroup label="Бакалавриат-22 (ОФО)">
          <option value="ИБ/б-22-1-о">ИБ/б-22-1-о</option>
          <option value="ИБ/б-22-2-о">ИБ/б-22-2-о</option>
          <option value="ИВТ/б-22-1-о">ИВТ/б-22-1-о</option>
          <option value="ИВТ/б-22-2-о">ИВТ/б-22-2-о</option>
          <option value="ИС/б-22-1-о">ИС/б-22-1-о</option>
          <option value="ИС/б-22-2-о">ИС/б-22-2-о</option>
          <option value="ПИ/б-22-1-о">ПИ/б-22-1-о</option>
          <option value="ПИ/б-22-2-о">ПИ/б-22-2-о</option>
          <option value="ПИН/б-22-1-о">ПИН/б-22-1-о</option>
          <option value="ПИН/б-22-2-о">ПИН/б-22-2-о</option>
        </optgroup>
        <optgroup label="Бакалавриат-23 (ОФО)">
          <option value="ИБ/б-23-1-о">ИБ/б-23-1-о</option>
          <option value="ИБ/б-23-2-о">ИБ/б-23-2-о</option>
          <option value="ИТ/б-23-1-о">ИТ/б-23-1-о</option>
          <option value="ИТ/б-23-2-о">ИТ/б-23-2-о</option>
          <option value="ИТ/б-23-3-о">ИТ/б-23-3-о</option>
          <option value="ИТ/б-23-4-о">ИТ/б-23-4-о</option>
          <option value="ИТ/б-23-5-о">ИТ/б-23-5-о</option>
          <option value="ИТ/б-23-6-о">ИТ/б-23-6-о</option>
          <option value="ИТ/б-23-7-о">ИТ/б-23-7-о</option>
          <option value="ИТ/б-23-8-о">ИТ/б-23-8-о</option>
        </optgroup>
        <optgroup label="Бакалавриат-24 (ОФО)">
          <option value="ИБ/б-24-1-о">ИБ/б-24-1-о</option>
          <option value="ИБ/б-24-2-о">ИБ/б-24-2-о</option>
          <option value="ИТ/б-24-1-о">ИТ/б-24-1-о</option>
          <option value="ИТ/б-24-2-о">ИТ/б-24-2-о</option>
          <option value="ИТ/б-24-3-о">ИТ/б-24-3-о</option>
          <option value="ИТ/б-24-4-о">ИТ/б-24-4-о</option>
          <option value="ИТ/б-24-5-о">ИТ/б-24-5-о</option>
          <option value="ИТ/б-24-6-о">ИТ/б-24-6-о</option>
          <option value="ИТ/б-24-7-о">ИТ/б-24-7-о</option>
          <option value="ИТ/б-24-8-о">ИТ/б-24-8-о</option>
          <option value="ЦТ/б-24-1-о">ЦТ/б-24-1-о</option>
        </optgroup>
        <optgroup label="Магистратура-23 (ОФО)">
          <option value="ИБ/м-23-1-о">ИБ/м-23-1-о</option>
          <option value="ИВТ/м-23-1-о">ИВТ/м-23-1-о</option>
          <option value="ИС/м-23-1-о">ИС/м-23-1-о</option>
          <option value="ПИ/м-23-1-о">ПИ/м-23-1-о</option>
          <option value="ПИ/м-23-2-о">ПИ/м-23-2-о</option>
          <option value="ПИН/м-23-1-о">ПИН/м-23-1-о</option>
        </optgroup>
        <optgroup label="Магистратура-23 (ОЗФО)">
          <option value="ИБ/м-23-1-оз">ИБ/м-23-1-оз</option>
        </optgroup>
        <optgroup label="Магистратура-24 (ОФО)">
          <option value="ИБ/м-24-1-о">ИБ/м-24-1-о</option>
          <option value="ИВТ/м-24-1-о">ИВТ/м-24-1-о</option>
          <option value="ИС/м-24-1-о">ИС/м-24-1-о</option>
          <option value="ПИ/м-24-1-о">ПИ/м-24-1-о</option>
          <option value="ПИ/м-24-2-о">ПИ/м-24-2-о</option>
          <option value="ПИН/м-24-1-о">ПИН/м-24-1-о</option>
        </optgroup>
        <optgroup label="Магистратура-24 (ОЗФО)">
          <option value="ИБ/м-24-1-оз">ИБ/м-24-1-оз</option>
        </optgroup>
      </select>
      <p v-if="groupError" class="error-message">
        Пожалуйста, выберите группу.
      </p>

      <fieldset>
        <legend>
          Вопрос 1: В каком из указанных видов проекций изображение объекта на
          плоскости проекции имеет равные размеры во всех направлениях?
        </legend>
        <label>
          <input
            type="radio"
            name="question1"
            value="option1"
            data-popover="Выберите один из вариантов"
            @mouseenter="showPopover"
            @mouseleave="hidePopover"
          />
          Параллельная проекция
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="question1"
            value="option2"
            data-popover="Выберите один из вариантов"
            @mouseenter="showPopover"
            @mouseleave="hidePopover"
          />
          Перспективная проекция
        </label>
      </fieldset>

      <fieldset>
        <legend>
          Вопрос 2: Какой тип проекций используется для получения проекций, где
          углы между осями сохраняются, а размеры объектов пропорциональны
          реальным размерам?
        </legend>
        <select
          name="question2"
          data-popover="Выберите один из вариантов"
          @mouseenter="showPopover"
          @mouseleave="hidePopover"
        >
          <option value="option1">Изометрическая проекция</option>
          <option value="option2">Кавалерийская проекция</option>
          <option value="option3">Ортографическая проекция</option>
          <option value="option4">Аксонометрическая проекция</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>
          Вопрос 3: Опишите разницу между аксонометрической и ортографической
          проекциями.
        </legend>
        <textarea
          name="question3"
          rows="4"
          cols="50"
          placeholder="Введите ваш ответ здесь..."
          data-popover="Напиште ответ не больше 30 слов"
          @mouseenter="showPopover"
          @mouseleave="hidePopover"
          ref="descriptionInput"
          @focus="resetError('question3')"
          @blur="validateField('question3')"
          :class="{
            'border-green':
              !q3Error &&
              $refs.descriptionInput &&
              $refs.descriptionInput.value,
            'input-error': q3Error,
          }"
        ></textarea>
        <p v-if="q3Error" class="error-message">
          {{ q3Error }}
        </p>
      </fieldset>

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

      <button type="submit">Отправить</button>
      <button type="reset">Очистить форму</button>

      <div v-if="isModalVisible" class="modal-overlay">
        <div class="modal-window">
          <p>Вы действительно хотите это сделать?</p>
          <div class="modal-buttons">
            <button id="confirmExit" @click="submitForm">Да</button>
            <button id="cancelExit" @click="hideModal">Нет</button>
          </div>
        </div>
      </div>
    </form>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/BaseLayout.vue";

export default {
  name: "TestView",
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
      q3Error: false,
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
      } else if (field === "question3") {
        console.log("aboba");
        const descriptionInput = this.$refs.descriptionInput;
        if (descriptionInput) {
          const wordCount = descriptionInput.value.trim().split(/\s+/).length;
          this.q3Error =
            wordCount > 30 ? "Ответ не должен превышать 30 слов." : "";
        }
      }
    },

    resetError(field) {
      if (field === "name") {
        this.nameError = false;
      } else if (field === "question3") {
        this.q3Error = false;
      }
    },
  },
};
</script>

<style scoped>
.test__form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: start;
}

textarea,
option,
select,
input,
button {
  font-size: 1.5rem;
}

.menu__part {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.menu__icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.menu__icon-hover {
  display: none;
}

.menu__part:hover .menu__icon {
  display: none;
}

.menu__part:hover .menu__icon-hover {
  display: inline;
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
  border: 2px solid red;
}

.error-message {
  color: red;
  font-size: 1.25rem;
  margin: 0;
}

.border-green {
  border: 2px solid green;
}
</style>
