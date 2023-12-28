
let prices = ["7.99$", "3.99$", "4.99$", "11.99$", "4.49$","7,99$", "3.99$", "4.99$", "11.99$", "4.49$"];
let names = [
    "ALLA CARNE DI POLLO PIZZA",
    "ALLA CARNE DI POLLO PIZZA",
    "ALLA CARNE DI POLLO PIZZA",
    "ALLA CARNE DI POLLO PIZZA",
    "ALLA CARNE DI POLLO PIZZA",
    "ALLA CARNE DI POLLO PIZZA",
    "ALLA CARNE DI POLLO PIZZA",
    "ALLA CARNE DI POLLO PIZZA",
    "ALLA CARNE DI POLLO PIZZA",
    "ALLA CARNE DI POLLO PIZZA",
];
let sources = [
    "Ingredians: Tomato, Chicken, Cheese, Cream, Mushrooms, Origano",
    "Ingredians: Tomato, Chicken, Cheese, Cream, Mushrooms, Origano",
    "Ingredians: Tomato, Chicken, Cheese, Cream, Mushrooms, Origano",
    "Ingredians: Tomato, Chicken, Cheese, Cream, Mushrooms, Origano",
    "Ingredians: Tomato, Chicken, Cheese, Cream, Mushrooms, Origano",
    "Ingredians: Tomato, Chicken, Cheese, Cream, Mushrooms, Origano",
    "Ingredians: Tomato, Chicken, Cheese, Cream, Mushrooms, Origano",
    "Ingredians: Tomato, Chicken, Cheese, Cream, Mushrooms, Origano",
    "Ingredians: Tomato, Chicken, Cheese, Cream, Mushrooms, Origano",
    "Ingredians: Tomato, Chicken, Cheese, Cream, Mushrooms, Origano"
];

export function menuRender(){
    let placeholder = document.querySelector(".placeholder");
    placeholder.replaceChildren();
    let items = document.createElement("div");
    items.classList.add("items");
    for(let i = 0; i<10;i++)
    {
        let item = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("div");
        let ingredians = document.createElement("div");
        let price = document.createElement("div");
        let button = document.createElement("button");
        let pizzaText = document.createElement("div");

        item.classList.add("item-" + i);
        img.classList.add("pizza-img");
        name.classList.add("name");
        ingredians.classList.add("ingredians");
        price.classList.add("price");
        pizzaText.classList.add("pizza-text");


        img.alt = "pizza";
        img.src = "../images/pizza.png";
        name.textContent = names[i];
        ingredians.textContent = sources[i];
        price.textContent = "Price: " + prices[i];
        button.textContent = "Add to cart";
        pizzaText.appendChild(name);
        pizzaText.appendChild(ingredians);
        pizzaText.appendChild(price);
        pizzaText.appendChild(button);

        item.appendChild(img);
        item.appendChild(pizzaText);

        items.appendChild(item);

    }
    placeholder.appendChild(items);

}