<script setup>
const {
  path,
  gallery
} = defineProps({
  path: {
    type: String,
    required: true
  },
  gallery: {
    type: Array,
    default: []
  }
});

const imageExtensions = [
  "jpg",
  "jpeg",
  "png",
  "gif",
  "bmp",
  "tiff",
  "tif",
  "webp",
  "svg",
  "ico",
];

const videoExtensions = [
  "mp4",
  "avi",
  "mkv",
  "mov",
  "wmv",
  "flv",
  "webm",
  "mpg",
  "mpeg",
  "rm",
  "rmvb",
  "3gp",
  "ts",
  "vob",
  "m2ts",
  "ogv",
  "mts"
];

const { $event } = useNuxtApp();

const openModal = (gallery, index) => {
  $event('openModal', { gallery, index, path });
};
</script>

<template>
<div>
  <div class="columns is-centered is-mobile is-multiline is-hidden-tablet">
    <div
      v-if="gallery.length"
      v-for="image, index in gallery"
      :key="image"
      class="column is-narrow"
      @click.native="openModal(gallery, index)"
    >
      <figure
        class="image is-128x128 ltr-corner-rounded"
      >
        <NuxtImg
          v-if="imageExtensions.includes(image.split('.')[1])"
          preset="preview"
          :src="'/gallery' + path + '/' + image"
          :alt="image"
          height="128"
          width="128"
        />
        <NuxtImg
          v-if="videoExtensions.includes(image.split('.')[1])"
          preset="preview"
          :src="'/gallery' + path + '/' + image.split('.')[0] + '.png'"
          :alt="image"          
          height="128"
          width="128"
        />
      </figure>  
    </div>
  </div>
  <div class="columns is-multiline is-hidden-mobile">
    <div
      v-if="gallery.length"
      v-for="image, index in gallery"
      :key="image"
      class="column is-narrow"
      @click.native="openModal(gallery, index)"
    >
      <figure
        class="image is-128x128 ltr-corner-rounded"
      >
        <NuxtImg
          v-if="imageExtensions.includes(image.split('.')[1])"
          preset="preview"
          :src="'/gallery' + path + '/' + image"
          :alt="image"
          height="128"
          width="128"
        />
        <NuxtImg
          v-if="videoExtensions.includes(image.split('.')[1])"
          preset="preview"
          :src="'/gallery' + path + '/' + image.split('.')[0] + '.png'"
          :alt="image"          
          height="128"
          width="128"
        />
        <div v-if="videoExtensions.includes(image.split('.')[1])" @click.native="openModal(gallery, index)" class="is-overlay is-center-center">
          <OIcon icon="play" size="large" variant="info" />
        </div>
      </figure>  
    </div>
  </div>
</div>
</template>

<style scoped>
.is-center-center {
  min-height: 100px;
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>
