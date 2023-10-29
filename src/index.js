import { createStore } from "redux";



const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span")

const countModifier = (count=0,action) =>{
  if (action.type === "add"){
    return count +1;
  }else if(action.type === "minus"){
    return count -1;
  }else{
    return count
  }
}

const countStore = createStore(countModifier)

countStore.dispatch({type:"add"})
countStore.dispatch({type:"add"})
countStore.dispatch({type:"add"})
countStore.dispatch({type:"add"})
countStore.dispatch({type:"add"})
countStore.dispatch({type:"add"})
countStore.dispatch({type:"minus"})

console.log(countStore.getState())