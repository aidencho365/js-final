const HIDDEN_KEY = "hidden";

const todo = document.querySelector("#todo-btn");
const weapons = document.querySelector("#weapons-btn");
const items = document.querySelector("#items-btn");
const targets = document.querySelector("#targets-btn");
const area = document.querySelector("#area-btn");

/* 화면 5개 */
const areaBg = document.querySelector("#random-bg");
const todolistBg = document.querySelector(".todolist-bg");
const weaponsBg = document.querySelector(".weapons-box");
const itemsBg = document.querySelector(".items-box");
const targetsBg = document.querySelector(".targets-box");

/* function btnHandler() {
    randomBg.classList.add(HIDDEN_KEY);
    todolistBg.classList.remove(HIDDEN_KEY);
} */

function showTodo() {
    todolistBg.style.display ="";

    if(weaponsBg.style.display !== "none") {
        weaponsBg.style.display = "none";
    }
    if(itemsBg.style.display !== "none") {
        itemsBg.style.display ="none";
    }
    if(targetsBg.style.display !== "none") {
        targetsBg.style.display ="none";
    }
    if(areaBg.style.display !== "none") {
        areaBg.style.display ="none";
    }
}

function showWeapons() {
    weaponsBg.style.display = "";

    if(todolistBg.style.display !== "none") {
        todolistBg.style.display = "none";
    }
    if(itemsBg.style.display !== "none") {
        itemsBg.style.display ="none";
    }
    if(targetsBg.style.display !== "none") {
        targetsBg.style.display ="none";
    }
    if(areaBg.style.display !== "none") {
        areaBg.style.display ="none";
    }
}

function showItems() {
    itemsBg.style.display = "";

    if(todolistBg.style.display !== "none") {
        todolistBg.style.display = "none";
    }
    if(weaponsBg.style.display !== "none") {
        weaponsBg.style.display = "none";
    }
    if(targetsBg.style.display !== "none") {
        targetsBg.style.display ="none";
    }
    if(areaBg.style.display !== "none") {
        areaBg.style.display ="none";
    }
}

function showTargets() {
    targetsBg.style.display = "";

    if(todolistBg.style.display !== "none") {
        todolistBg.style.display = "none";
    }
    if(weaponsBg.style.display !== "none") {
        weaponsBg.style.display = "none";
    }
    if(itemsBg.style.display !== "none") {
        itemsBg.style.display ="none";
    }
    if(areaBg.style.display !== "none") {
        areaBg.style.display ="none";
    }
}

function showArea() {
    areaBg.style.display = "";

    if(todolistBg.style.display !== "none") {
        todolistBg.style.display = "none";
    }
    if(weaponsBg.style.display !== "none") {
        weaponsBg.style.display ="none";
    }
    if(itemsBg.style.display !== "none") {
        itemsBg.style.display ="none";
    }
    if(targetsBg.style.display !== "none") {
        targetsBg.style.display ="none";
    }

}

todo.addEventListener("click", showTodo);
weapons.addEventListener("click", showWeapons);
items.addEventListener("click", showItems);
targets.addEventListener("click", showTargets);
area.addEventListener("click", showArea);