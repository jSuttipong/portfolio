<template>
  <div class="pj-container px-0 pt-sm-5 pt-4">
    <div class="pj-box-text font-victor">
      <span>Project List</span>
    </div>
    <div class="pj-card p-3">
      <div
        class="card-item-container d-flex  align-items-center ps-2"
        v-for="(name, index) in nameList"
        :key="index"
        @click="$emit('getSelectedName', name), selectedItem(index) "
        :class="index == activeIndex ? 'card-active' : ''"
      >
      <!-- <div class="card-item-border"> 
      </div> -->
      <div class="card-item-inside d-flex align-items-center">
        <h4 class=" ms-sm-3 m-0">{{ name }}</h4>
      </div>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["projectNameList"],
  data() {
    return {
      nameList: [],
      activeIndex: 0
    };
  },
  mounted() {
    this.nameList = this.projectNameList;
  },
  methods:{
    selectedItem(index){
      this.activeIndex = index
    }
  }
};
</script>
<style>
.pj-container {
  width: 100%;
  height: 100%;
  border:  solid #ffff00;
  border-width: 5px 0px 3px 0px;
  position: relative;
}
.pj-box-text{
  position: absolute;
  top: 0;
  right: 0;
  color: #000;
  /* background-color: #ffff00; */
  background: linear-gradient(45deg, transparent 5%, rgba(255, 255, 0) 5%);
  padding: 3px;
  width: 50%;
  text-align: center;

}
.pj-card {
  width: 100%;
  height: 100%;
  /* background: #333; */
  border-radius: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px 50px !important
}
.pj-card::-webkit-scrollbar {
  width: 8px;
  background-color: #0000ff;
  /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  scrollbar-width: thin;
  /* border-radius: 5px; */
}
.pj-card::-webkit-scrollbar-thumb {
  /* border-radius: 5px; */
  background-color: #ffff00;
}
.card-item-container {
  width: 100%;
  height: 15%;
  /* background: #ffff00; */
  /* border-radius: 5px; */
  margin-bottom: 10px;
  cursor: pointer;
  animation: fadeIn 1.5s, slideToUp 1.5s;
  /* border-left: solid 8px rgba(0, 0, 255, 0.5); */
  box-shadow: -8px 0 0 rgba(0, 0, 255, 1);
  /* background: linear-gradient(-45deg, transparent 5%, rgba(255, 255, 0, 0.7) 5%); */
  background: linear-gradient(-45deg, transparent 5%, rgba(255, 255, 0) 5%);
  /* border-style: solid ;
  border-color:  #ffff00;
  border-width: 4px 5px 5px 0px; */
  position: relative;
}
.card-item-inside{
  position: absolute;
  width: 99%;
  height: 94%;
  background: linear-gradient(-45deg, transparent 5%, rgba(0, 0, 0, 0.6) 5%);
  left: 0;
  /* right: 0; */
  margin: auto;
}

.card-item-border{
  /* position: absolute;
  border-left: 5px solid #ffff00;
  position: absolute;
  top: 0;
  bottom: 16%;
  right: 0; */
  /* border: solid #ffff00;
  border-width: 4px 0px 0px 0px; */
  /* top: 0; */
  /* z-index: 2; */
}
.card-item-container h4{
    color: #fff;
}
.card-active{
  /* border-left: solid 8px #ffff00; */
  box-shadow: -8px 0 0 rgba(255, 255, 0);
  background: linear-gradient(-45deg, transparent 5%, #0000ff 5%);
  transform: scale(1.13);
  border: none;
  border-width: 4px 0px 0px 0px;
  
  /* position: absolute; */
  /* border: solid 1px #0000ff;
  box-shadow: inset 0 0 20px #0000ff; */
}
.card-active .card-item-inside{
  background: none;
}
@media only screen and (max-width: 576px){
  .pj-card{
    height: 80px;
    width: auto;
    overflow-y: hidden;
    overflow-x: auto;
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    padding: 16px !important;
  }
  .card-item-container{
    width: 100px;
    height: 100%;
    flex: 0 0 auto;
    margin-right: 20px;
    /* word-break: break-all; */
    /* position: absolute; */
    
  }
  .card-item-container h4 {
    font-size: 13px;
  }
  .card-active{
    transform: scale(1.25);
  }
  .pj-card::-webkit-scrollbar{
    height: 5px;
  }
}
</style>
