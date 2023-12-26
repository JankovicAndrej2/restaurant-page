import { optionButtons } from "./menuButtons.js";

let textBox = document.querySelector(".placeholder");


optionButtons.forEach(element => {
    element.addEventListener("click", ()=>{
        textBox.replaceChildren();
    })
});