import './style.css'
import home, { homeTab } from './home'
import menu, { menuTab } from './menu'
import about, { aboutTab } from './about'

const contentDiv = document.querySelector('#content');
let container = document.createElement('div');;

const clear = () => container.innerHTML = "";

const pageTabs = () => {
    let barContainer = document.createElement('div');
    barContainer.classList.add('barContainer');

    let menuBar = document.createElement('div');
    menuBar.classList.add('menuBar');

    // Home Tab, Default
    if (homeTab()) menuBar.appendChild(homeTab());

    // Menu Tab
    if (menuTab()) menuBar.appendChild(menuTab());

    // About Tab

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
    const tabs = document.querySelectorAll('.tabButton');
    tabs.forEach(tab => {
        if (tab.classList.contains('active')) tab.classList.remove('active');
    });
    content.classList.add('subcontainer');
    container.append(content);
};


// Setup
setup();

// Default page
loadPage(home());
document.querySelector('homeButton').classList.add('active');