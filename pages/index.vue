<template>
  <div class="display-layout d-flex align-items-center">
    <!-- <Navbar  /> -->
    <!-- <TechStack/> -->
    <!-- <button @click="changeSection(2)"></button> -->
    <transition name="fadeDown" mode="out-in">
      <Banner class="container" v-if="showWelcomePage" />
    </transition>
    <!-- <section id="2">
      <h2>Skill</h2>
    </section> -->
    <!-- <h2 class="title-name my-md-5 my-2 ms-md-5">my project</h2> -->
    <!-- <DisplayPJ :portData="data" :pjIndex="index" class="display-pj-container d-flex align-items-center " v-for="(data, index) in portFolio"/> -->
    <transition name="fadeDown" mode="out-in">
      <button
        class="play-button square"
        @click="handlePlayButton()"
        v-if="showWelcomePage"
      >
        <span class="icon arrow"></span>
        <span class="btn-text font-victor">My project</span>
      </button>
    </transition>

    <transition name="fadeDown" mode="out-in">
      <button class="back-button square" v-if="!showWelcomePage" @click="showWelcomePage = true; showPJDisplay = false" > 
        <span class="icon arrowleft"></span>
      </button>
    </transition>

    <transition name="fadeDown" mode="out-in">
      <div
        class="w-100 container pjdisplay-container position-absolute start-0 end-0"
        v-if="showPJDisplay"
      >
        <div class="row g-0">
          <div class="col-12 col-md-8 position-relative col-height pe-sm-3">
            <Display
              :projectToDisplay="projectToDisplay"
              v-if="displayLoading == false"
            />
          </div>
            <!-- <TestComponent/> -->
          <transition name="fadeDown" mode="out-in">
            <div class="col-12 col-md-4 position-relative mt-5 mt-sm-0">
              <PJList :projectNameList="projectNameList" @getSelectedName="getSelectedName" />
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import portFolioData from "../json/folio.json";
export default {
  data() {
    return {
      portFolio: portFolioData,
      showWelcomePage: true,
      showPJDisplay: false,
      projectNameList: [],
      projectToDisplay: [],
      displayLoading: true,
    };
  },
  mounted() {
    console.log(this.portFolio);
    this.getProjectNameList(this.portFolio);
    this.handleProjectToDisplay(this.portFolio[0].shortName);
    console.log("projectNameList :", this.projectNameList);
  },
  methods: {
    changeSection(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    },
    getProjectNameList(project) {
      project.forEach((element) => {
        this.projectNameList.push(element.shortName);
      });
    },
    handlePlayButton() {
      // console.log("Button click");
      this.showWelcomePage = false;
      this.showPJDisplay = true;
    },
    getSelectedName(name) {
      this.displayLoading = true;
      // console.log('This name selected from pjlist component', name);
      this.handleProjectToDisplay(name);
    },
    handleProjectToDisplay(name) {
      this.projectToDisplay = this.portFolio.find(
        (element) => element.shortName == name
      );
      // console.log('handleProjectToDisplay :',this.projectToDisplay);
      setTimeout(() => {
        this.displayLoading = false;
      }, 200);
    },
  },
};
</script>

<style>
.display-layout {
  height: 100dvh;
}
.title-name {
  color: #0000ff;
  text-shadow: 5px 4px #ffff00;
  font-size: 60px;
}
.display-pj-container {
  height: 45vh;
  padding: 10%;
}
.fadeDown-enter-active,
.fadeDown-leave-active {
  transition: opacity 1.2s;
}

.fadeDown-enter,
.fadeDown-leave-to {
  animation: slideToDown 1s;
  opacity: 0;
}

.component-enter-active,
.component-leave-active {
  transition: fadeIn 1s;
}

.component-enter,
.component-leave-to {
  animation: fadeOut 1s;
  opacity: 0;
}

/* .leave-page{
  animation: fadeOut 1.2s;
} */
.play-button {
  position: absolute;
  bottom: 10%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  animation: fadeIn 1.2s, slideInDown 1.2s;
}
button.circle {
  /* position: relative; */
  width: 3rem;
  height: 3rem;
  /* background: linear-gradient(-45deg, transparent 0%, rgba(0, 0, 255, 0.5) 10%); */
  background: #0000ff;
  border-radius: 1.625rem;
  /* border: 0; */
  border: none;
  transition: 0.45s ease-in-out;
  box-shadow: 0px 0px 1px 3px rgb(0, 0, 255);
  /* box-shadow: 0px 0px 5px 1px rgb(0, 0, 255); */
}
button.square {
  width: 3rem;
  height: 3rem;
  background: #0000ff;
  border: none;
  transition: 0.45s ease-in-out;
  box-shadow: 0px 0px 1px 3px rgb(0, 0, 255);
}
.btn-text {
  position: absolute;
  position: absolute;
  top: 0.95rem;
  left: 25px;
  right: 0;
  bottom: 0;
  color: #ffff00;
  opacity: 0;
  transition: opacity ease-in-out;
  transition-duration: 0.3s;
  width: 5rem;
  font-size: 12px;
}
button.icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}

button .icon.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
}

button .icon.arrow::before {
  position: absolute;
  content: "";
  top: 1.25rem;
  right: 1.25rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #ffff00;
  border-right: 0.125rem solid #ffff00;
  transform: rotate(45deg);
}
button.play-button:hover.square {
  width: 9rem;
}
button.play-button:hover.square .icon.arrow {
  background: #ffff00;
  transform: translate(1rem, 0);
}

button.play-button:hover.circle {
  width: 9rem;
}
button.play-button:hover .btn-text {
  opacity: 1;
}
button.play-button:hover.circle .icon.arrow {
  background: #ffff00;
  transform: translate(1rem, 0);
}

.back-button{
  position: absolute;
  top: 25px;
  left: 25px;
  width: 100px;
}

button .icon.arrowleft::before {
  position: absolute;
  content: "";
  top: 1.25rem;
  right: 1.25rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #ffff00;
  border-right: 0.125rem solid #ffff00;
  transform: rotate(220deg);
}

.pjdisplay-container {
  animation: fadeIn 1.5s;
}
.pjdisplay-container .row .col-height {
  height: 600px;
}

@media only screen and (max-width: 576px) {
  .display-layout {
    min-height: 100dvh;
    height: auto;
  }

  .pjdisplay-container .row .col-height {
  height: 400px;
}
}
</style>
