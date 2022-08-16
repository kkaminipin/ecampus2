let navBtn = document.querySelectorAll("nav ul>li>a");
let navList = document.querySelectorAll("nav ul>li");

// nav 클래스 추가

for (let i = 0; i < navBtn.length; i++) {
    (function (target) {
        navBtn[target].addEventListener("mouseover", function () {
            navOn(target);
        });
    })(i);
}

for (let i = 0; i < navBtn.length; i++) {
    (function (target) {
        navBtn[target].addEventListener("mouseleave", function () {
            navOut(target);
        });
    })(i);
}

function navOn(target) {
    navList[target].classList.add("on");
}

function navOut(target) {
    navList[target].classList.remove("on");
}

// 탭

let tabBtn = document.querySelectorAll(".tab>li>button");

function tabOn(tabClick) {
    let clickedTab = tabClick.currentTarget; // 클릭한 tabBtn
    let tabSection = tabClick.currentTarget.parentNode.parentNode; // 클릭한 tabBtn이 있는 .tab
    let tabList = tabSection.querySelectorAll(".tab>li"); // 선택한 .tab 안에 있는 list
    for (let i = 0; i < tabList.length; i++) {
        tabList[i].classList.remove("on");
        //선택한 .tab 안에 있는 모든 list에 클래스 on 지우기
    }
    clickedTab.parentNode.classList.add("on"); //선택한 btn의 부모 list에 클래스 on 추가
}

for (i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener("click", tabOn);
    // 클릭했을 때 tabOn 함수 호출
    // for문 안에 있는 이유는 querySelectorAll로 선언한 변수일 때 인덱스값을 넣어야해서
}

// 검색창

let searchBtn = document.querySelector(".search");
let searchArea = document.querySelector(".searchArea");

function searchOn() {
    searchBtn.classList.toggle("active");
    searchArea.classList.toggle("active");

    let searchInput = document.querySelector(".searchArea input");
    searchInput.value = "";
}

searchBtn.addEventListener("click", searchOn);
