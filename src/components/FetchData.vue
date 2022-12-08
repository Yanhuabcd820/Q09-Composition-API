<script>
import {useFetch} from '../composition-api'
export default {
  setup() {
    const {imgData,isLoad,errorMsg}=useFetch("http://localhost:3000/photo/list")
    console.log('imgData(FetchData.vue)',imgData)
    console.log('imgData.data(FetchData.vue)',imgData.data)
    return {imgData,isLoad,errorMsg};
  },
};
</script>

<template>
  <div>
    <img v-if="!isLoad" class="loading" src="../assets/load.gif" alt="" />
    <h1>ERROR:{{errorMsg}}</h1>
    <div v-if="isLoad" class="imgBlock">
      <img v-for="item in imgData.data" :src="item.url" :key="item.url" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  display: block;
  width: 50px;
  margin: 0 auto;
}
</style>
