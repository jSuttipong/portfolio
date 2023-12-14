<template>
  <div class="dp-container ps-3">
    <div class="dp-layout">
      <div class="dp-pjname">
        <h1>{{ displayName }}</h1>
        <h4>{{ displayPlatfrom }}</h4>
      </div>

      <div class="dp-images-container d-flex align-items-center">
        <!-- <ImagesCarousel /> -->
      </div>
      <div class="dp-techstack">
        <TechStack
          class="stack-item me-2 p-2"
          v-for="tech in techList"
          :stackName="tech"
        />
        <!-- <TechStack :stackName="'Vue'" class="stack-item me-2" />
        <TechStack :stackName="'Nuxt'" class="stack-item me-2" /> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["projectToDisplay"],
  data() {
    return {
      projectData: "",
      // images: [
      //   {
      //     position: 1,
      //     name: "apt",
      //     positionLength: "",
      //   },
      //   {
      //     position: 2,
      //     name: "cubhouse",
      //     positionLength: "",
      //   },
      //   {
      //     position: 3,
      //     name: "ibank",
      //     positionLength: "",
      //   },
      //   {
      //     position: 4,
      //     name: "ktb",
      //     positionLength: "",
      //   },
      // ],
      // imagesShow: [
      //   new URL(`/assets/images/apt.png`, import.meta.url),
      //   new URL(`/assets/images/cubhouse.png`, import.meta.url),
      //   new URL(`/assets/images/ibank.png`, import.meta.url),
      // ],
      imageActiveIndex: 0,
      positionArray: [],
      displayName: "Project Name",
      displayPlatfrom: "Platfrom",
      techList: [],
    };
  },
  computed:{
  },
  mounted() {
    console.log('ssss',this.projectToDisplay);
    // if (this.projectToDisplay) {
    //   this.projectData = this.projectToDisplay;
    //   this.displayName = this.projectData.name
    //     ? this.projectData.name
    //     : "Project Name";
    //   this.displayPlatfrom = this.projectData.des
    //     ? this.projectData.des
    //     : "Platfrom";
    //   this.techList = this.projectData.stack;
    // }
    // console.log('this.techList',this.techList);
  },
  methods: {

  },
};
</script>

<style>
.dp-container {
  width: 100%;
  height: 60vh;
  position: relative;
}
.dp-layout {
  width: 100%;
  height: 100%;
  /* background: #333; */
}
.dp-pjname {
  position: absolute;
  right: 0;
  z-index: 3;
}
.dp-pjname h1 {
  color: #0000ff;
}
.dp-pjname h4 {
  position: absolute;
  color: #ffff00;
  right: 0;
}
.dp-images-container {
  width: 100%;
  height: 100%;
  white-space: nowrap;
  /* overflow: hidden; */
  position: relative;
}
.dp-techstack {
  position: absolute;
  bottom: 0;
  right: 0;
  width: auto;
}
.stack-item {
  width: 50px;
  height: 50px;
  float: left;
}
</style>
