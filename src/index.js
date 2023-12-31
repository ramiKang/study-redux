import { createStore } from "redux";

const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")

const ADD_TODO="ADD_TODO";
const DELETE_TODO="DELETE_TODO";

const addToDo = (text)=>{
  return {type:ADD_TODO,text}
}

const deleteToDo = (id) => {
  return {
    type:DELETE_TODO,
    id
  }
}

const reducer = (state=[],action)=>{
  // state mutate x
 
  console.log(action)
  switch (action.type){
    case ADD_TODO:
      return [{text:action.text,id:Date.now()},...state]
    case DELETE_TODO:
      return state.filter(toDo => toDo.id !== action.id)
    default:
      return state
  }
}

const store = createStore(reducer)


const dispatchAddToDo = (text)=>{
  store.dispatch(addToDo(text))
}

const dispatchDeleteToDo = e =>{
  const id = parseInt(e.target.parentNode.id)
  store.dispatch(deleteToDo(id))
}


const paintTodo = () =>{
  const toDos = store.getState();
  ul.innerHTML = ""
  toDos.forEach(toDo => {
    const li  = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "del"
    btn.addEventListener("click",dispatchDeleteToDo)
    li.id = toDo.id
    li.innerText  = toDo.text;
    li.appendChild(btn)
    ul.appendChild(li)
  });
}


const onSubmit = e =>{
  e.preventDefault();
  const toDo = input.value;
  input.value="";
  dispatchAddToDo(toDo);
  
}

store.subscribe(paintTodo)

form.addEventListener("submit",onSubmit)