const todoBtn = document.querySelector("#todo-btn");
const weaponsBtn = document.querySelector("#weapons-btn");
const itemsBtn = document.querySelector("#items-btn");
const targetsBtn = document.querySelector("#targets-btn");
const areaBtn = document.querySelector("#area-btn");

function effectTodo() {
    if(todoBtn.classList.contains("clicked")){}
      else {
        todoBtn.classList.add("clicked");       
    }

    if(weaponsBtn.classList.contains("clicked")){
        weaponsBtn.classList.remove("clicked");
    } else {}

    if(itemsBtn.classList.contains("clicked")){
        itemsBtn.classList.remove("clicked");
    } else {}

    if(targetsBtn.classList.contains("clicked")){
        targetsBtn.classList.remove("clicked");
    } else {}

    if(areaBtn.classList.contains("clicked")){
        areaBtn.classList.remove("clicked");
    } else {}
}

function effectWeapons() {
    if(weaponsBtn.classList.contains("clicked")){}
      else {
        weaponsBtn.classList.add("clicked");       
    }

    if(todoBtn.classList.contains("clicked")){
        todoBtn.classList.remove("clicked");
    } else {}

    if(itemsBtn.classList.contains("clicked")){
        itemsBtn.classList.remove("clicked");
    } else {}

    if(targetsBtn.classList.contains("clicked")){
        targetsBtn.classList.remove("clicked");
    } else {}

    if(areaBtn.classList.contains("clicked")){
        areaBtn.classList.remove("clicked");
    } else {}
}

function effectItems() {
    if(itemsBtn.classList.contains("clicked")){}
      else {
        itemsBtn.classList.add("clicked");       
    }

    if(todoBtn.classList.contains("clicked")){
        todoBtn.classList.remove("clicked");
    } else {}

    if(weaponsBtn.classList.contains("clicked")){
        weaponsBtn.classList.remove("clicked");
    } else {}

    if(targetsBtn.classList.contains("clicked")){
        targetsBtn.classList.remove("clicked");
    } else {}

    if(areaBtn.classList.contains("clicked")){
        areaBtn.classList.remove("clicked");
    } else {}
}

function effectTargets() {
    if(targetsBtn.classList.contains("clicked")){}
      else {
        targetsBtn.classList.add("clicked");       
    }

    if(todoBtn.classList.contains("clicked")){
        todoBtn.classList.remove("clicked");
    } else {}

    if(weaponsBtn.classList.contains("clicked")){
        weaponsBtn.classList.remove("clicked");
    } else {}

    if(itemsBtn.classList.contains("clicked")){
        itemsBtn.classList.remove("clicked");
    } else {}

    if(areaBtn.classList.contains("clicked")){
        areaBtn.classList.remove("clicked");
    } else {}
}

function effectArea() {
    if(areaBtn.classList.contains("clicked")){}
      else {
        areaBtn.classList.add("clicked");       
    }

    if(todoBtn.classList.contains("clicked")){
        todoBtn.classList.remove("clicked");
    } else {}

    if(weaponsBtn.classList.contains("clicked")){
        weaponsBtn.classList.remove("clicked");
    } else {}

    if(itemsBtn.classList.contains("clicked")){
        itemsBtn.classList.remove("clicked");
    } else {}

    if(targetsBtn.classList.contains("clicked")){
        targetsBtn.classList.remove("clicked");
    } else {}
}

todoBtn.addEventListener("click", effectTodo);
weaponsBtn.addEventListener("click", effectWeapons);
itemsBtn.addEventListener("click", effectItems);
targetsBtn.addEventListener("click", effectTargets);
areaBtn.addEventListener("click", effectArea);