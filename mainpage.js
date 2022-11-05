function start() {
    let menu = document.querySelector (".start-menu");
    if (menu.classList.contains("start-menu-display")==true){
        menu.classList.remove ("start-menu-display");
        menu.classList.remove ("start-menu-hidden");
    }
    else {
        menu.classList.add ("start-menu-display");
    } 
}

function closeScreen() {
    let menu = document.querySelector (".start-menu");
    if (menu.classList.contains("start-menu-display")==true){
        menu.classList.remove ("start-menu-display");
    }
}

function logout() {
    window.close(``, `_parent`, ``);
}

function minimizeWind() {
    
}

function maximizeWind() {
    
}

function closeWind(classElement,tabElement) {
    let wind = document.querySelector (classElement);
    let tab = document.querySelector (tabElement);
    if(wind.classList.contains("element-hidden")==false){
        wind.classList.add("element-hidden");
        tab.classList.remove("active"); 
    } 
}

function openWind(windElement, tabElement) {
    let wind = document.querySelector (windElement);
    let tab = document.querySelector (tabElement);
    if (wind.classList.contains("element-hidden")==true) {
        wind.classList.remove("element-hidden");
        tab.classList.add("active");     
    }
}