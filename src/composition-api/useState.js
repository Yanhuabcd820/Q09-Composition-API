import {ref} from 'vue'

export function stateTodo(){
  const num = ref(0)

  const clickBtn = ()=>{
    num.value++
  }
  return {num,clickBtn}
}