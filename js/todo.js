const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); /* jSON.stringify() 뭐든지 전부다 string으로 바꿔주는 기능 */
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span); /* span을 li의 자식으로 넣어버림 <li><span></span></li> 이렇게 */
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoobj = {
        text:newTodo,
        id: Date.now(), /* Date.now()는 밀리세컨드 단위로 현재시간을 나타냄. 사실상 중복불가능한 랜덤변수! */
    };
    toDos.push(newTodoobj);
    paintToDo(newTodoobj);
    saveToDos();
}

function deleteToDo(event) {
    const li = event.target.parentElement; /* target.parentElement 부모의 속성을 타겟하는 것. 즉 해당 function을 작동시키는 개체의 부모 element를 찾아내는것 */
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); /* li.id 는 new.date()로 받아온 숫자라서 parseInt로 li.id를 숫자로 인식시켜줘야함!!! 
    여기서 삭제하는건 X 버튼을 누른 li의 id 값을 찾고, toDos 배열에서 해당 id와 동일한 data를 찾아서 filtering 한 data를 toDos에 다시 만들어주는 것*/
    saveToDos(); /* 위 작업을 거친 toDos를 다시 localStorage에 setItem 해줌 */
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
    console.log("hello", item); /* forEach에서 array의 0번부터 차례대로 들어오는데, item을 사용하면 그 0번부터 차례대로 log할 수 있음 */
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); /* forEach는 각각의 item에 대한 () 함수를 실행시킴 */ /* forEach((item) => console.log("this is man", item)); 이렇게 해도 가능함. =>는 화살표 함수라고 해! */
    /* forEach(paintToDo)를 하면 배열에 저장한 각각의 todos를 paintToDo로 다시 생성할 수 있음 */
}

/* array에서 어떤 item을 지우고 싶으면, 실제로 array에서 item을 지우는게 아니라, 해당 item을 제외한 array를 다시 만들어! */

function filter() {

}