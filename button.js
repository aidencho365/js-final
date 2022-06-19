const todo = document.querySelector("#todo-btn");
const weapons = document.querySelector("#weapons-btn");
const items = document.querySelector("#items-btn");
const targets = document.querySelector("#targets-btn");
const area = document.querySelector("#area-btn");

/* 화면 5개 */
const areaBg = document.querySelector(".background-box-bg");
const todolistBg = document.querySelector(".todolist-bg");
const weaponsBg = document.querySelector(".weapons-box");
const itemsBg = document.querySelector(".items-box");
const targetsBg = document.querySelector(".targets-box");

function showTodo() {
    if(todolistBg.classList.contains("hidden")){
        todolistBg.classList.remove("hidden");
    } else {

    }

    if(areaBg.classList.contains("hidden")){

    } else {
        areaBg.classList.add("hidden");
    }

    if(weaponsBg.classList.contains("hidden")){

    } else {
        weaponsBg.classList.add("hidden");
    }

    if(itemsBg.classList.contains("hidden")){

    } else {
        itemsBg.classList.add("hidden");
    }

    if(targetsBg.classList.contains("hidden")){

    } else {
        targetsBg.classList.add("hidden");
    }
}

function showWeapons() {
    if(weaponsBg.classList.contains("hidden")){
        weaponsBg.classList.remove("hidden")
    } else {

    }

    if(areaBg.classList.contains("hidden")){

    } else {
        areaBg.classList.add("hidden");
    }

    if(todolistBg.classList.contains("hidden")){

    } else {
        todolistBg.classList.add("hidden");
    }

    if(itemsBg.classList.contains("hidden")){

    } else {
        itemsBg.classList.add("hidden");
    }

    if(targetsBg.classList.contains("hidden")){

    } else {
        targetsBg.classList.add("hidden");
    }
}

function showItems() {
    if(itemsBg.classList.contains("hidden")){
        itemsBg.classList.remove("hidden")
    } else {

    }
    
    if(areaBg.classList.contains("hidden")){

    } else {
        areaBg.classList.add("hidden");
    }

    if(todolistBg.classList.contains("hidden")){

    } else {
        todolistBg.classList.add("hidden");
    }

    if(weaponsBg.classList.contains("hidden")){

    } else {
        weaponsBg.classList.add("hidden");
    }

    if(targetsBg.classList.contains("hidden")){

    } else {
        targetsBg.classList.add("hidden");
    }
}

function showTargets() {
    if(targetsBg.classList.contains("hidden")){
        targetsBg.classList.remove("hidden")
    } else {

    }
    
    if(areaBg.classList.contains("hidden")){

    } else {
        areaBg.classList.add("hidden");
    }

    if(todolistBg.classList.contains("hidden")){

    } else {
        todolistBg.classList.add("hidden");
    }

    if(weaponsBg.classList.contains("hidden")){

    } else {
        weaponsBg.classList.add("hidden");
    }

    if(itemsBg.classList.contains("hidden")){

    } else {
        itemsBg.classList.add("hidden");
    }
}

function showArea() {
    if(areaBg.classList.contains("hidden")){
        areaBg.classList.remove("hidden")
    } else {

    }

    if(todolistBg.classList.contains("hidden")){

    } else {
        todolistBg.classList.add("hidden");
    }

    if(weaponsBg.classList.contains("hidden")){

    } else {
        weaponsBg.classList.add("hidden");
    }

    if(itemsBg.classList.contains("hidden")){

    } else {
        itemsBg.classList.add("hidden");
    }

    if(targetsBg.classList.contains("hidden")){

    } else {
        targetsBg.classList.add("hidden");
    }
}

todo.addEventListener("click", showTodo);
weapons.addEventListener("click", showWeapons);
items.addEventListener("click", showItems);
targets.addEventListener("click", showTargets);
area.addEventListener("click", showArea);