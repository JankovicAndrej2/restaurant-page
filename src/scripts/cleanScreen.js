import { homeRender } from "./homeRender.js";
import { menuRender } from "./menuRender.js";
import { contactRender } from "./contactRender.js";
import { optionButtons } from "./menuButtons.js";

optionButtons.forEach((element,index) => {
    element.addEventListener("click",()=>{
        if(index == 0)
        {
            homeRender();
        }
        else if(index == 1)
        {
            menuRender();
        }else{
            contactRender();
        }
    })
});