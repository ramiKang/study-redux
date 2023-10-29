import { createStore } from "redux";



const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span")

number.innerText = 0

const countModifier = (count=0,action) =>{
  console.log(count,action)
  if (action.type === "add"){
    return count +1;
  }else if(action.type === "minus"){
    return count -1;
  }else{
    return count
  }
}

const countStore = createStore(countModifier)

const onChange = () =>{
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange)

const handleAdd = () =>{
  countStore.dispatch({type:"add"})
}

const handleMinus = () =>{
  countStore.dispatch({type:"minus"})
}

add.addEventListener("click",handleAdd)
minus.addEventListener("click",handleMinus)