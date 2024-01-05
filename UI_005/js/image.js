//누구한테 클릭 이벤트를 부착할 것인가.
//클릭 이벤트를 부착할 대상(셀렉터)찾아서(쿼리)
//있으면 그 친구를 이미지 3 변수에 할당하라.
// 대상 특정
const img_0001 = document.querySelector(".img_0001");
const img_0002 = document.querySelector(".img_0002");
const img_0003 = document.querySelector(".img_0003");
const img_0004 = document.querySelector(".img_0004");
const img_0005 = document.querySelector(".img_0005");
const img_0006 = document.querySelector(".img_0006");

//이벤트 핸들러를 선언하기
const img_0001_click_handler = () => {
  //현재화면에 보이는 페이지를 01.html 페이지로 전환하라.
  document.location.href = "./01.html";
};
const img_0002_click_event = () => {
  document.location.href = "./02.html";
};
const img_0003_click_event = () => {
  document.location.href = "./03.html";
};
const img_0004_click_event = () => {
  document.location.href = "./04.html";
};
const img_0005_click_event = () => {
  document.location.href = "./05.html";
};
const img_0006_click_event = () => {
  document.location.href = "./06.html";
};
// 클릭 이벤트가 발생하면 클릭 핸들러 실행.
// 클릭 이벤트가 발생하면 실행한 이벤트 핸들러 연결.
img_0001.addEventListener("click", img_0001_click_handler);
img_0002.addEventListener("click", img_0002_click_event);
img_0003.addEventListener("click", img_0003_click_event);
img_0004.addEventListener("click", img_0004_click_event);
img_0005.addEventListener("click", img_0005_click_event);
img_0006.addEventListener("click", img_0006_click_event);
