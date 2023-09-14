import { useEffect, useState } from "react"

function debounce(value,delay) {
const[debounceValue,setDebounceValue]=useState(value)

useEffect(()=>{const handler =setTimeout(()=>{
setDebounceValue(value)
},delay);
return ()=>{ clearTimeout(handler)
}},[value])


return debounceValue
}

export default debounce