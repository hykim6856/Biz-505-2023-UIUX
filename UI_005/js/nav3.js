//dom 객체를 변수에 할당하여, js 코드에서 사용할 준비를 하기
const nav_list = document.querySelectorAll("li.main_nav");

nav_list.forEach((item) => {
  item.addEventListener("click", (event) => {
    const target = event.target;
    const nav_text = target.innerText;

    alert(nav_text + " 메뉴 클릭");
  });
});
// js 에서는 함수의 매개변수로 직접 함수를 전달 할 수 있다.
