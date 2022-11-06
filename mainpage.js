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

function openLink(windElement, tabElement){
    let tab = document.querySelector (tabElement);
    if(tabElement == '#tab-my-twitter'){
        // ouvrir twitter
        if(!tab.classList.contains("active")){
            window.open("https://twitter.com/home");
            tab.classList.add("active"); 
        }else{
            tab.classList.remove("active"); 
        }
    }else if(tabElement == '#tab-my-github'){
        // ouvrir github
        if(!tab.classList.contains("active")){
            window.open("https://github.com/Ateioss");
            tab.classList.add("active"); 
        }else{
            tab.classList.remove("active"); 
        }
    }else if(tabElement == '#tab-my-linkdin'){
        // ouvrir linkdin
        if(!tab.classList.contains("active")){
            window.open("https://www.linkedin.com/in/mathis-noel-656331233/");
            tab.classList.add("active"); 
        }else{
            tab.classList.remove("active"); 
        }
    }
}

function ontest(){
    alert("fin");
}