export function homeRender(){
    let placeholder = document.querySelector(".placeholder");
    let img = document.createElement("img");
    img.src = "../images/zeff.jpeg";
    img.classList.add("image-zeff");
    let text = [
        "Zeff is the head chef and owner of Pipo's Pizzeria.",
        "Before that, he was the captain of the Cook Pirates until his crew was annihilated in a storm.",
        "As a pirate, Zeff was fierce and uncompromising, willing to rob civilians",
        "without hesitation and commanding great fear from even his own crew.",
        "However, even at this stage he was an idealistic sea cook at heart, believing in the fabled All Blue.",
        "Zeff also holds a strong sense of chivalry toward women, believing it a man's duty to spare them all physical harm."
    ]
    
    let aboutZeff = document.createElement("div");
    aboutZeff.classList.add("about-zeff");
    
    let currenttext = document.querySelector(".about-zeff");
    placeholder.replaceChildren();
    placeholder.appendChild(img);
    
    text.forEach(element => {
        let x = document.createElement("span");
        x.classList.add("zeff-text");
        x.textContent = element;
        aboutZeff.appendChild(x);
    });
    placeholder.appendChild(aboutZeff);
}