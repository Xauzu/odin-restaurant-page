import './style.css'
import home, { homeTab } from './home'
import menu from './menu'
import about from './about'

const contentDiv = document.querySelector('#content');
let container = document.createElement('div');;

const clear = () => container.innerHTML = "";

const pageTabs = () => {
    let barContainer = document.createElement('div');
    barContainer.classList.add('barContainer');

    let menuBar = document.createElement('div');
    menuBar.classList.add('menuBar');

    // Home Tab, Default
    if (homeTab()) {
        let hTab = () => homeTab(loadPage(home()));
        let newTab = hTab();
        newTab.classList.add('active');
        menuBar.appendChild(newTab);
    }
    barContainer.appendChild(menuBar);

    return barContainer;
}

const setup = () => {
    contentDiv.classList.add('flexCol');

    // Menu Bar
    contentDiv.append(pageTabs());

    // Container
    container.classList.add('container');
    contentDiv.appendChild(container);

};

export function loadPage(content) {
    clear();
    content.classList.add('subcontainer');
    container.append(content);
};


// Setup
setup();

// Default page
loadPage(home());