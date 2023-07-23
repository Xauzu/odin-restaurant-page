import pizza from './pizza.png';

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
    desc.textContent = "This is just some dummy content. This is the second sentence. There are more sentences but it is unnecessary. This is the fourth sentence. This is another sentence that doesn't need to be read."
    contentBody.appendChild(desc);

    return contentBody;
};

export function menuTab() {
    let tab = document.createElement('button');
    tab.textContent = "Menu";
    tab.classList.add('tabButton', 'menuButton');
    return tab;
};