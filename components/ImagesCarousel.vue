<template>
  <div class="carousel d-flex align-items-center">
    <div
      class="carousel-slide"
      v-for="(img, index) in images"
      @click="handleImageToActive(img, index)"
      :class="{
        carouselActive: imageActiveIndex === index,
        'carouse-invisible': img.position > 3,
      }"
      :style="{ transform: `translateX(${img.positionLength}px)` }"
    >
      <img :src="getImageUrl(img.name)" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["imagesList"],
  data() {
    return {
      images: [
        {
          position: 1,
          name: "apt",
          positionLength: "",
        },
        {
          position: 2,
          name: "cubhouse",
          positionLength: "",
        },
        {
          position: 3,
          name: "ibank",
          positionLength: "",
        },
        {
          position: 4,
          name: "ktb",
          positionLength: "",
        },
        // {
        //   position: 5,
        //   name: "ktb",
        //   positionLength: "",
        // },
        // {
        //   position: 6,
        //   name: "ktb",
        //   positionLength: "",
        // },
        // {
        //   position: 7,
        //   name: "ktb",
        //   positionLength: "",
        // },
      ],
      imageActiveIndex: 0,
      positionArray: [],
    };
  },
  mounted() {
    this.images.forEach((element, i) => {
      element.positionLength = this.handlePositionOfImages(i);
    });
  },
  methods: {
    handlePositionOfImages(item) {
      let imgPosition = item * 190;
      this.positionArray.push(imgPosition);
      return imgPosition;
    },
    handleImageToActive(img, imageIndex) {
      let currentIndex = this.imageActiveIndex;
      // let imagesLength = this.images.length;

      // let currrentPositionLength = img.positionLength;

      let currrentPosition = img.position;
      let lengthOfSelectedPosition = img.position - 1;
      let numberOfMoves = this.images.length - lengthOfSelectedPosition;

      if (currentIndex != imageIndex) {
        for (let i = 0; i < this.images.length; i++) {
          if (i != imageIndex) {
            if (this.images[i].position > currrentPosition) {
              this.images[i].position =
                this.images[i].position - lengthOfSelectedPosition;
            } else {
              this.images[i].position = numberOfMoves + this.images[i].position;
            }
            this.images[i].positionLength = this.setNewImagesPosition(
              this.images[i].position
            );
          } else {
            this.images[i].position = 1;
            this.images[i].positionLength = this.setNewImagesPosition(
              this.images[i].position
            );
          }
        }
      }

      this.imageActiveIndex = imageIndex;
      console.log("check images array", this.images);
    },
    setNewImagesPosition(imagePosition) {
      return this.positionArray[imagePosition - 1];
    },
    getImageUrl(name) {
      return new URL(`/assets/images/${name}.png`, import.meta.url);
    },
  },
};
</script>

<style>
.carousel {
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
  position: relative;
}
.carousel-slide {
  width: 300px;
  position: absolute;
  opacity: 0.4;
  cursor: pointer;
  height: 100%;
  background: #ffff00;
  transition: transform 0.4s ease-in-out;
  border-radius: 5px;
}
.carousel-slide img {
  /* display: flex; */
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.carouselActive {
  transition: transform 0.3s ease;
  transform: translatex(18em) scaleY(1.12) scaleX(1.1) !important;
  /* width: 200px; */
  opacity: 1 !important;
  z-index: 1;
  position: absolute;
}
.carouse-invisible {
  display: none;
}
</style>
