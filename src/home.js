import pizza from './pizza.png';
import { loadPage } from './index';

export default function home() {
    let contentBody = document.createElement('div')

    let title = document.createElement('h1');
    title.textContent = "Welcome!"
    contentBody.appendChild(title);

    let desc = document.createElement('div');
    desc.classList.add('contentText');
    desc.textContent = "This is just some dummy content. This is the second sentence. There are more sentences but it is unnecessary. This is the fourth sentence. This is another sentence that doesn't need to be read."
    contentBody.appendChild(desc);

    let img = new Image();
    img.src = pizza;
    contentBody.appendChild(img);

    let desc2 = document.createElement('div');
    desc2.classList.add('contentText');
    desc2.textContent = "The above image is a pizza!"
    contentBody.appendChild(desc2);

    return contentBody;
};

export function homeTab() {
    let tab = document.createElement('button');
    tab.textContent = "Home";
    tab.classList.add('tabButton', 'homeButton');
    tab.addEventListener('click', () => {
        loadPage(home());
        tab.classList.add('active');
    });
    return tab;
};