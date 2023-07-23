import pizza from './pizza.png';
import cheese from './cheese.png';
import pepp from './pepperoni.png';
import bacon from './bacon.png';
import { loadPage } from './index';

export default function menu() {
    let contentBody = document.createElement('div')

    let title = document.createElement('h1');
    title.textContent = "Pizza Menu"
    contentBody.appendChild(title);

    let img = new Image();
    img.src = pizza;
    contentBody.appendChild(img);

    let desc = document.createElement('div');
    desc.classList.add('contentText');
    desc.textContent = "$6, Base"
    contentBody.appendChild(desc);

    contentBody.appendChild(ingredient("Cheese", cheese, "$0"));
    contentBody.appendChild(ingredient("Pepperoni", pepp, "$2"));
    contentBody.appendChild(ingredient("Bacon", bacon, "$2"));

    return contentBody;
};

function ingredient(name, image, price) {
    const ingred = document.createElement('div');
    let img = new Image();
    img.src = image;
    img.classList.add('ingredient');
    ingred.appendChild(img);

    let desc = document.createElement('div');
    desc.classList.add('contentText');
    desc.textContent = `${price}, ${name}`;
    ingred.appendChild(desc);

    ingred.classList.add('ingredient-display');

    return ingred;
}

export function menuTab() {
    let tab = document.createElement('button');
    tab.textContent = "Menu";
    tab.classList.add('tabButton', 'menuButton');
    tab.addEventListener('click', () => {
        loadPage(menu());
        tab.classList.add('active');
    });
    return tab;
};