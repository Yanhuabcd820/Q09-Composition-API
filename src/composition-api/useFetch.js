import axios from 'axios'
import {ref, reactive} from 'vue'

export function fetchData(API_URL=""){
  const imgData = reactive({data:[]})
  const isLoad = ref(false)
  const errorMsg = ref('')

  axios.get(API_URL).then((res)=>{
    isLoad.value = true
    imgData.data = res.data
    console.log('imgData(useFetch.js)',imgData)
  }).catch((error)=>{
    errorMsg.value = error.request.statusText;
  })

  return {imgData,isLoad,errorMsg}
}