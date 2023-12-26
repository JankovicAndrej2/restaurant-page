let optionButtons = document.querySelectorAll(".option");

optionButtons.forEach((element, index) => {
    element.addEventListener("click", ()=>{
        for(let i = 0; i<3;i++)
        {
            if(i !=index){
                optionButtons[i].style.textDecoration = "none";
            }
        }
        element.style.textDecoration = "underline";
    })
});

export {optionButtons};