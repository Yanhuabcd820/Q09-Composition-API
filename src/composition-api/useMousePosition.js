import {reactive,onMounted,onUnmounted, toRefs} from 'vue'

export function mousePosition(){
    
  // const x=ref(0)
  // const y=ref(0)
  const position = reactive({x:0,y:0})

  const posUpdate=(e)=>{
    position.x=e.pageX
    position.y=e.pageY
  };

  onMounted(()=>{
    window.addEventListener("mousemove",posUpdate)
  });

  onUnmounted(()=>{
    window.removeEventListener('mousemove',posUpdate)
  });
  return toRefs(position)
}


