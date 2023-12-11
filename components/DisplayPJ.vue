<template>
  <div>
    <div class="pj-container pj-display-left" v-if="pjPosition == 'left'">
      <img :src="getImageUrl(projectImage)" alt="" class="pj-img" />
      <div class="position-relative pj-info">
        <h3 >{{ projectName }}</h3>
        <div>
          <p class="font-victor fw-thin fc-secondary">Platform: {{ projectDes }}</p>
        </div>
        <div>
          <div class="float-start me-2" v-for="stack in projectStack">
            <TechStack :stackName="stack" class="stack-size" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="pj-container pj-display-right d-flex justify-content-end"
      v-else
    >
      <img :src="getImageUrl(projectImage)" alt="" class="pj-img" />
      <div class="position-relative pj-info">
        <h3 class="d-flex justify-content-end">{{ projectName }}</h3>
        <div class="d-flex justify-content-end">
          <p class="font-victor fw-thin fc-secondary">Platform: {{ projectDes }}</p>
        </div>
        <div >
          <div class="float-end me-2" v-for="stack in projectStack">
            <TechStack :stackName="stack" class="stack-size" />
          </div>
          <!-- <div class="float-start me-2">
            <TechStack class="stack-size" />
          </div>
          <div class="float-start me-2">
            <TechStack class="stack-size" />
          </div>
          <div class="float-start me-2">
            <TechStack class="stack-size" />
          </div>
          <div class="float-start me-2">
            <TechStack class="stack-size" />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // props: ["projectImage", "projectName", "projectDes", "projectStack"],
  props: ["portData", "pjIndex"],
  data() {
    return {
      projectImage: "",
      projectName: "",
      projectDes: "",
      projectStack: "",
      pjPosition: "",
    };
  },
  mounted() {
    console.log("index", this.pjIndex);
    this.handlePortFolioData(this.portData, this.pjIndex);
  },
  methods: {
    handlePortFolioData(data, pjIndex) {
      this.projectImage = data.banner;
      this.projectName = data.name ? data.name : "None";
      this.projectStack = data.stack;
      this.projectDes = data.des;
      if (pjIndex % 2 == 1) {
        this.pjPosition = "right";
      } else {
        this.pjPosition = "left";
      }
    },
    getImageUrl(name){
      return new URL(`/assets/images/${name}.png`, import.meta.url)
    }
  },
};
</script>

<style>
.sdddd {
  width: 100%;
}
.pj-container {
  /* width: 500px; */
  width: 100%;
  height: 300px;
  padding: 10px 0;
}
.pj-container .pj-img {
  position: absolute;
  width: 500px;
  background: rgba(255, 255, 255, 0.29);
  backdrop-filter: blur(9.5px);
  /* background: rgba(255, 255, 0);
  backdrop-filter: blur(9.5px); */
  border-radius: 10px;
}
.pj-display-left .pj-info {
  /* width: 100%; */
  width: 815px;
  left: 400px;
  top: 100px;
}
.pj-info h3 {
  color: #0000ff;
  font-size: 40px;
  text-shadow: 0px 0px 15px #0000FF;
}
/* .pj-info p{
  text-shadow: 0px 0px 15px #FFFF00;
} */
.stack-size {
  width: 50px;
  height: 50px;
  padding: 10px;
}

.pj-display-right .pj-img {
  /* right: 0; */
  /* width: 500px; */
}

.pj-display-right .pj-info {
  /* width: 100%; */
  right: 420px !important;
  top: 100px;
}
.pj-display-right h3 {
  right: 0;
}
/* .pj-display-right .pj-info h3 {
  right: 0;
} */
@media only screen and (max-width: 991px) {
  .pj-container {
    width: 100%;
    margin-bottom: 120px;
  }
  .pj-container .pj-img {
    width: 100%;
    position: relative;
  }
  /* .pj-info {
    margin: 20px 0;
  } */
  .pj-display-left .pj-info {
    width: unset;
    left: 0;
    top: unset;
    bottom: 0;
  }
  .pj-display-right {
    display: block !important;
    justify-content: start !important;
  }
  .pj-display-right .pj-info {
    /* width: 100%; */
    right: unset !important;
    top: unset;
  }
  .pj-display-right h3 {
    display: block !important;
    justify-content: start !important;
    right: unset !important;
  }
  .stack-size {
    width: 40px;
    height: 40px;
    padding: 5px;
  }
}
</style>
