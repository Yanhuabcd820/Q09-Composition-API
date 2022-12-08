<script>
import {useState} from '../composition-api'
export default {
  setup() {
    const {num,clickBtn} = useState()
    return {num,clickBtn};
  },
};
</script>
<template>
  <div class="block">
    <h1>number:{{num}}</h1>
    <button @click="clickBtn">add</button>
  </div>
</template>

<style lang="scss" scoped>
.block {
  width: 300px;
  padding: 15px 15px;
  margin: 0 auto;
  border: 1px solid #000;
  margin-bottom: 5px;
}
</style>
