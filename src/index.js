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

    if (homeTab()) {
        let hTab = () => homeTab(loadPage(home()));
        console.log(hTab);
        menuBar.appendChild(hTab());
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

function loadPage(content) {
    clear();
    content.classList.add('subcontainer');
    container.append(content);
};


// Setup
setup();

// Default page
loadPage(home());