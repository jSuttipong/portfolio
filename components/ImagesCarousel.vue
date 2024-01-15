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
      :id="index"
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
        // {
        //   position: 1,
        //   name: "apt",
        //   positionLength: "",
        // },
      ],
      imageActiveIndex: 0,
      positionArray: [],
    };
  },
  mounted() {
    this.handleListOfimages(this.imagesList)
    this.images.forEach((element, i) => {
      element.positionLength = this.handlePositionOfImages(i);
    });
  },
  methods: {
    handlePositionOfImages(item) {
      // let imgPosition = item * 140;
      // this.positionArray.push(imgPosition);
      // return imgPosition;
      return 0
    },
    handleImageToActive(img, imageIndex) {
      let currentIndex = this.imageActiveIndex;

      const element = document.getElementById(this.imageActiveIndex);
      let rect = element.getBoundingClientRect();
      let currentActivePosition = rect.left;
      console.log("document.getElementById(imageIndex)",rect.left);
      // let imagesLength = this.images.length;

      // let currentPositionLength = img.positionLength;

      let currentPosition = img.position;
      let lengthOfSelectedPosition = img.position - 1;
      let numberOfMoves = this.images.length - lengthOfSelectedPosition;

      if (currentIndex != imageIndex) {
        for (let i = 0; i < this.images.length; i++) {
          if (i != imageIndex) {

            // this function is working
            if (this.images[i].position > currentPosition) {
              this.images[i].position =
                this.images[i].position - lengthOfSelectedPosition;
            } else {
              this.images[i].position = numberOfMoves + this.images[i].position;
            }
            this.images[i].positionLength = this.setNewImagesPosition(
              this.images[i].position
            );
              // if (this.images[i].position > currentPosition) {
              //   this.images[i].positionLength = currentActivePosition + 100
              //   console.log('this.images[i].positionLength',this.images[i].positionLength);
              // }else{
              //   this.images[i].positionLength = currentActivePosition - 100
              // }

          } else {
            this.images[i].position = 1;
            this.images[i].positionLength = this.setNewImagesPosition(
              this.images[i].position
            );
          }
        }
      }

      this.imageActiveIndex = imageIndex;
      // console.log("check images array", this.images);
    },
    setNewImagesPosition(imagePosition) {
      return this.positionArray[imagePosition - 1];
    },
    getImageUrl(name) {
      // return new URL(`/assets/images/${name}.png`, import.meta.url);
      return new URL(`/assets/images/${name}`, import.meta.url);
    },
    handleListOfimages(imgList){
      for (let i = 0; i < imgList.length; i++) {
        this.images.push({
          position: i+1,
          name: imgList[i],
          positionLength: "",
        })
        
      }
      
    }
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
  /* object-fit: cover; */
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.carouselActive {
  transition: transform 0.3s ease;
  /* translatex(16em) */
  transform:  scaleY(1.12) scaleX(1.1) !important;
  /* width: 200px; */
  opacity: 1 !important;
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
}
.carouse-invisible {
  display: none;
}

@media only screen and (max-width: 576px){
  .carousel-slide{
    width: 200px;
  }
  .carouselActive {
    transform:  scaleY(1.07) scaleX(1.1) !important;
  }
}
</style>
