<template>
  <base-layout>
    <h1 class="main-gallery__title">Фотоальбом</h1>

    <div class="new-gallery-container">
      <button @click="toggleNewGallery" class="new-gallery-button">
        Открыть новую галерею
      </button>
      <div v-if="newGalleryOpened" class="new-gallery-viewer">
        <div class="new-gallery-content">
          <img
            :src="newGalleryImage.src"
            :alt="newGalleryImage.title"
            class="new-gallery-image"
          />
          <div class="new-gallery-navigation">
            <button @click="prevImage" class="new-gallery-nav-button">
              &lt;
            </button>
            <span class="new-gallery-counter"
              >{{ currentImageIndex + 1 }} из {{ images.length }}</span
            >
            <button @click="nextImage" class="new-gallery-nav-button">
              &gt;
            </button>
          </div>
          <button @click="closeNewGallery" class="new-gallery-close-button">
            Закрыть
          </button>
        </div>
      </div>
    </div>

    <div class="gallery">
      <div
        v-for="(foto, index) in fotos"
        :key="index"
        class="gallery__img-thumb"
        @click="openLargePhoto(foto, titles[index])"
      >
        <img
          :src="'/assets/' + foto"
          :alt="'photo ' + (index + 1)"
          :title="titles[index]"
          class="gallery__img-thumb__img"
        />
        {{ titles[index] }}
      </div>
    </div>

    <div v-if="popupVisible" id="popup__container">
      <img id="popup__container-img" :src="popupImage.src" alt="Фото" />
      <p id="img__title">{{ popupImage.title }}</p>
      <button id="popup__container-close" @click="closePopup">Закрыть</button>
    </div>
  </base-layout>
</template>

<script>
import { ref } from "vue";
import BaseLayout from "../components/BaseLayout.vue";

export default {
  name: "GalleryView",
  components: {
    BaseLayout,
  },
  setup() {
    const fotos = ref([
      "@/assets/photo_image3.jpeg",
    "@/assets/photo_image6.jpg",
    "@/assets/photo_image2.jpg",
    "@/assets/photo_image9.jpg",
    "@/assets/photo_image1.jpg",
    "@/assets/photo_image10.jpg",
    "@/assets/photo_image7.jpg",
    "@/assets/photo_image8.jpg",
    "@/assets/photo_image4.jpg",
    "@/assets/photo_image11.jpg",
    "@/assets/photo_image12.jpg",
    "@/assets/photo_image5.jpg",
    "@/assets/photo_image13.jpg",
    "@/assets/photo_image14.jpg",
    "@/assets/photo_image15.jpg"
    ]);
    const titles = ref([
"Озеро Байкал",
    "Западное озеро",
    "Озеро Шлегайс",
    "Озеро Кратер",
    "Озеро Морейн",
    "Мертвое море",
    "Озеро Цзюджайгоу",
    "Озеро Хинтерзее",
    "Озеро Куокансуо",
    "Озеро Морское окно",
    "Озеро Марун",
    "Озеро Онтарио",
    "Озеро Сейдозеро",
    "Озеро Каменное",
    "Озеро Грюнер"
    ]);
    const popupVisible = ref(false);
    const popupImage = ref({ src: "", title: "" });

    const newGalleryOpened = ref(false);
    const images = ref([]);
    const currentImageIndex = ref(0);

    const newGalleryImage = ref({ src: "", title: "" });

    function openLargePhoto(src, title) {
      popupImage.value = { src, title };
      popupVisible.value = true;
    }

    function closePopup() {
      popupVisible.value = false;
    }

    function toggleNewGallery() {
      if (newGalleryOpened.value) {
        closeNewGallery();
      } else {
        openNewGallery();
      }
    }

    function openNewGallery() {
      images.value = fotos.value.map((src, index) => ({
        src: `./assets/${src}`,
        title: titles.value[index],
      }));
      newGalleryOpened.value = true;
      showImage(0);
    }

    function closeNewGallery() {
      newGalleryOpened.value = false;
    }

    function showImage(index) {
      currentImageIndex.value =
        (index + images.value.length) % images.value.length;
      newGalleryImage.value = images.value[currentImageIndex.value];
    }

    function nextImage() {
      showImage(currentImageIndex.value + 1);
    }

    function prevImage() {
      showImage(currentImageIndex.value - 1);
    }

    return {
      fotos,
      titles,
      popupVisible,
      popupImage,
      newGalleryOpened,
      images,
      currentImageIndex,
      newGalleryImage,
      openLargePhoto,
      closePopup,
      toggleNewGallery,
      openNewGallery,
      closeNewGallery,
      nextImage,
      prevImage,
    };
  },
};
</script>

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
}

.gallery__img-thumb {
  width: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.main-gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.main-gallery__title {
  margin-bottom: 10px;
}

#popup__container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(248, 248, 248);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  z-index: 1000;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
}
#popup__container-img {
  max-width: 100%;
  max-height: 70vh;
  display: block;
  margin: 0 auto;
  padding-top: 20px;
}
#popup__container-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

#img__title {
  text-align: center;
  margin-top: 10px;
}

.new-gallery-button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
.new-gallery-viewer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.new-gallery-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}
.new-gallery-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
}
.new-gallery-navigation {
  position: absolute;
  bottom: -80px;
  left: -15%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: black;
  border-radius: 20px;
  width: 130%;
}
.new-gallery-nav-button {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 0 20px;
}
.new-gallery-counter {
  margin: 0 20px;
  color: white;
}
.new-gallery-close-button {
  position: absolute;
  top: -40px;
  right: -70px;
  background-color: rgba(3, 70, 9, 0.7);
  padding: 6px;
  border: 1px solid white;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
</style>
