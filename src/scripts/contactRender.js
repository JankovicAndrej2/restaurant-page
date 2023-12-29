export function contactRender(){

    let placeholder = document.querySelector(".placeholder");
    placeholder.replaceChildren();
    let contactInfo = document.createElement("div");
    let adressInfo = document.createElement("div");
    let phoneInfo = document.createElement("div");
    let timeInfo = document.createElement("div");
    let text0 = document.createElement("div");
    let text1 = document.createElement("div");
    let text2 = document.createElement("div");
    let text3 = document.createElement("div");
    let text4 = document.createElement("div");
    let text5 = document.createElement("div");
    

    let homeIcon = document.createElement("img");
    let phoneIcon = document.createElement("img");
    let timeIcon = document.createElement("img");
    
    contactInfo.classList.add("contact-info");

    adressInfo.classList.add("adress-info");
    phoneInfo.classList.add("phone-info");
    timeInfo.classList.add("time-info");

    homeIcon.classList.add("logo");
    phoneIcon.classList.add("logo");
    timeIcon.classList.add("logo");

    homeIcon.src = "../images/homeIcon.png";
    homeIcon.alt = "adress";

    phoneIcon.src = "../images/phoneIcon.png";
    phoneIcon.alt = "phone-number";

    timeIcon.src = "../images/timeIcon.png";
    timeIcon.alt = "worktime";

    adressInfo.appendChild(homeIcon);
    
    text0.textContent = "Sambas Region";
    adressInfo.appendChild(text0);

    text1.textContent = "Entrance of the Grand Line";
    adressInfo.appendChild(text1);

    text2.textContent = "East Blue";
    adressInfo.appendChild(text2);

    phoneInfo.appendChild(phoneIcon);
    text3.textContent = "Phone: +385 99 1312 31";
    phoneInfo.appendChild(text3);
    text4.textContent = "E-mail: baratie@eastblue.com";
    phoneInfo.appendChild(text4);

    timeInfo.appendChild(timeIcon);
    text5.textContent = "0-24";
    timeInfo.appendChild(text5);

    contactInfo.appendChild(adressInfo);
    contactInfo.appendChild(phoneInfo);
    contactInfo.appendChild(timeInfo);

    placeholder.appendChild(contactInfo);

}