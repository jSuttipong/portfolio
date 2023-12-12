<template>
  <div class="pj-container px-3">
    <div class="pj-card p-3">
      <div
        class="card-item-container d-flex  align-items-center ps-2"
        v-for="(name, index) in nameList"
        :key="index"
        @click="$emit('getSelectedName', name)"
      >
        <h4 class="m-0">{{ name }}</h4>
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
    };
  },
  mounted() {
    this.nameList = this.projectNameList;
  },
};
</script>
<style>
.pj-container {
  width: 100%;
  height: 60vh;
}
.pj-card {
  width: 100%;
  height: 100%;
  background: #333;
  border-radius: 10px;
  overflow-y: scroll;
}
.pj-card::-webkit-scrollbar {
  width: 8px;
  background-color: #0000ff;
  /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  scrollbar-width: thin;
  border-radius: 5px;
}
.pj-card::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #ffff00;
}
.card-item-container {
  width: 100%;
  height: 12%;
  background: #111;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  animation: fadeIn 1.5s, slideToUp 1.5s;
}
.card-item-container h4{
    color: #fff;
}
</style>
