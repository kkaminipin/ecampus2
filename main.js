let navBtn = document.querySelectorAll('.nav>li>a')
let navList = document.querySelectorAll('.nav>li')
let subNav = document.getElementsByClassName('sub_nav')
let subBtn = document.querySelectorAll('.sub_nav li a')
let subList = document.querySelectorAll('.sub_nav li')
let subBg = document.getElementsByClassName('subnav')

let tab = document.querySelectorAll('.tab>li>button')
let tabList = document.querySelectorAll('.tab>li')

console.log(navBtn)
console.log(subNav)
console.log(subBtn)
console.log(subBg)

// 1 depth

for(let i = 0; i < navBtn.length; i++) {
    (function(target){
        navBtn[target].addEventListener('mouseover', function(){
            navSlideDown(target);
        });
    })(i);
}

function navSlideDown(target) {
    for(let i = 0; i < navBtn.length; i++) {
        subNav[i].style.display='block'
        navList[i].classList.remove('on')
    }
    subBg[0].style.display='block'
    navList[target].classList.add('on')
}

for(let i = 0; i < navBtn.length; i++) {
    (function(target){
        navBtn[target].addEventListener('mouseleave', function(){
            navSlideUp(target);
        });
    })(i);
}

function navSlideUp(target) {
    for(let i = 0; i < navBtn.length; i++) {
        navList[i].classList.remove('on')
    }
}


// 2 depth

for(let i = 0; i < subBtn.length; i++) {
    (function(target){
        subBtn[target].addEventListener('mouseover', function(){
            navClassAdd(target);
        });
    })(i);
}

function navClassAdd(target) {
    for(let i = 0; i < subBtn.length; i++) {
        subList[i].classList.remove('on')
    }
    subList[target].classList.add('on')
}

for(let i = 0; i < subBtn.length; i++) {
    (function(target){
        subBtn[target].addEventListener('mouseleave', function(){
            navClassRemove(target);
        });
    })(i);
}

function navClassRemove(target) {
    for(let i = 0; i < subBtn.length; i++) {
        subList[i].classList.remove('on')
    }
}

// 벗어났을 때
// 닫을 수 없어................

function removeBg() {
    for(let i = 0; i < subBtn.length; i++) {
        subNav[i].style.display = "none"
    }
    subBg[0].style.display = "none"
}



// 탭
// 통합된 탭.............

tabList[0].classList.add('on');

for(let i = 0; i < tab.length; i++) {
    (function(target){
        tab[target].addEventListener('click', function(){
            tabOn(target);
        });
    })(i);
}

function tabOn(target) {
    for(let i = 0; i < tab.length; i++) {
        tabList[i].classList.remove('on')
    }
    tabList[target].classList.add('on')
}