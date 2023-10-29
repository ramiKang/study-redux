const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span")

let count = 0;

number.innerText=count

// 숫자가 바뀌면 html에게 바뀌었다고 알려줘어야 함
const updateText = () =>{
  number.innerText = count;
}

const handleAdd = ()=>{
  count++
  updateText()
}

const handleMinus = () =>{
  count--
  updateText()
}


add.addEventListener("click",handleAdd)
minus.addEventListener("click",handleMinus)

