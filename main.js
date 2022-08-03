let navBtn = document.querySelectorAll('.nav>li>a')
let navList = document.querySelectorAll('.nav>li')
let subBtn = document.querySelectorAll('.sub_nav li a')
let subList = document.querySelectorAll('.sub_nav li')

// 1 depth

for(let i = 0; i < navBtn.length; i++) {
    (function(target){
        navBtn[target].addEventListener('mouseover', function(){
            navOn(target);
        });
    })(i);
}

function navOn(target) {
    for(let i = 0; i < navBtn.length; i++) {
        navList[i].classList.remove('on')
    }
    navList[target].classList.add('on')
}

for(let i = 0; i < navBtn.length; i++) {
    (function(target){
        navBtn[target].addEventListener('mouseleave', function(){
            navOut(target);
        });
    })(i);
}

function navOut(target) {
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

// 탭

let tabBtn = document.querySelectorAll('.tab>li>button')
let tabList = document.querySelectorAll('.tab>li')

function tabOn(tabClick) {
    let clickedTab = tabClick.currentTarget;  // 클릭한 tabBtn
    let tabSection = tabClick.currentTarget.parentNode.parentNode;  // 클릭한 tabBtn이 있는 .tab
    let tabList = tabSection.querySelectorAll(".tab>li") // 선택한 .tab 안에 있는 list
    for (let i = 0; i < tabList.length; i++) {
        tabList[i].classList.remove("on")
        //선택한 .tab 안에 있는 모든 list에 클래스 on 지우기
    }
    clickedTab.parentNode.classList.add("on") //선택한 btn의 부모 list에 클래스 on 추가
    tabClick.preventDefault(); // a 이동 안되게
}
    
for (i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener("click", tabOn)
    // 클릭했을 때 tabOn 함수 호출
    // for문 안에 있는 이유는 querySelectorAll로 선언한 변수일 때 인덱스값을 넣어야해서
}