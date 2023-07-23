import pizza from './pizza.png';
import { loadPage } from './index';

export default function about() {
    let contentBody = document.createElement('div')

    let title = document.createElement('h1');
    title.textContent = "Xauzu Pizza Place"
    contentBody.appendChild(title);

    let desc = document.createElement('div');
    desc.classList.add('contentText');
    desc.textContent = "We don't really exist but we can be found at ..."
    contentBody.appendChild(desc);

    let desc2 = document.createElement('div');
    desc2.classList.add('contentText');
    desc2.textContent = "You can call us at (###) ###-####"
    contentBody.appendChild(desc2);


    let desc3 = document.createElement('div');
    desc3.classList.add('contentText');
    desc3.textContent = "You can email us at Xauzu@web.page (not real)"
    contentBody.appendChild(desc3);

    return contentBody;
};

export function aboutTab() {
    let tab = document.createElement('button');
    tab.textContent = "About";
    tab.classList.add('tabButton', 'aboutButton');
    tab.addEventListener('click', () => {
        loadPage(about());
        tab.classList.add('active');
    });
    return tab;
};