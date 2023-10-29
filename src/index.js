import { createStore } from "redux";



const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span")

number.innerText = 0

// 개선2
// string -> const variable
const ADD = "ADD"
const MINUS = "MINUS"

// 데이터를 바꾸는 유일한 장소
const countModifier = (count=0,action) =>{
  // 개선 1
  // if -> switch
  switch (acount.type){
    case ADD:
      return count +1
    case MINUS : 
      return count - 1
    default:
      return count
  }
}

const countStore = createStore(countModifier)

const onChange = () =>{
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange)

const handleAdd = () =>{
  countStore.dispatch({type:ADD})
}

const handleMinus = () =>{
  countStore.dispatch({type:MINUS})
}

add.addEventListener("click",handleAdd)
minus.addEventListener("click",handleMinus)