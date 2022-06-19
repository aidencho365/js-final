const lgBtn = document.querySelector("#lbi-submit");
const lgBox = document.querySelector(".login-box");

const loginForm = document.querySelector("#login-form");
const loginName = loginForm.querySelector("#lf-name");
const ID = "codename"

function lgBtnClick(event) {
    event.preventDefault();
    if(lgBox.classList.contains("hidden")){

    } else {
    lgBox.classList.add("hidden");
    document.body.classList.add("add-background");
    const codename = loginName.value;
    localStorage.setItem(ID, codename);

    const savedCodename = localStorage.getItem(ID);

    alert(`Welcome agent ${savedCodename}`);
    }
}



lgBtn.addEventListener("click", lgBtnClick);
