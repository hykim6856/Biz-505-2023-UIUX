// DOMcontentLoaded : 화면에  DOM 요소들이 모두 완성되면...
// 이 이벤트를 설정함으로써 문서(dom)가 모두 화면에 나타난 후에 비로소 자바스크립트를 실행하기 시작한다
// js 코드가 html 위 , 아래 어디에 있던지 상관없이 실행가능하다

document.addEventListener("DOMContentLoaded", () => {
  const ulContent = document.querySelector("section.list ul");
  const todoinput = document.querySelector("section.input input");

  const todoList = ["체육관가기", "HTML 책읽기", "책상정리", "라면먹기"];
  const createLiTag = (todoContent) => {
    const spanComplete = document.createElement("SPAN");
    const spanTodo = document.createElement("SPAN");
    const spanClose = document.createElement("SPAN");
    const liTag = document.createElement("LI");

    //위에서 만들어진 span 태그에 각각 클래스를 부착하라.
    spanComplete.classList.add("complete");
    spanTodo.classList.add("todo");
    spanClose.classList.add("close");

    spanComplete.innerHTML = "&check;";
    spanTodo.innerHTML = todoContent;
    spanClose.innerHTML = "&times;";

    liTag.appendChild(spanComplete);
    liTag.appendChild(spanTodo);
    liTag.appendChild(spanClose);

    ulContent.appendChild(liTag);
  };

  const createTodoList = () => {
    ulContent.innerHTML = "";
    todoList.forEach((item) => createLiTag(item));
  };
  createTodoList();
  /*
    화면상에 li tag 가 여러개 있는데 querySelector 을 사용하여 요청하면 화마ㅕㄴ에서 최초로 발견되는 요소만 select 된다.
*/
  const liContent = document.querySelector("section.list li");
  ulContent.addEventListener("click", (event) => {
    /*ul tag 에  event 를 설정하고, 실제로는 li tag 에 대하여 event 코드를 처리할 것이다. 
    이때 실제 제일먼저 클릭된 요소는 event.target 이된다. 근데 이 화면에서 실제 이벤트 타겟은 span tag 가된다.
    그러면 스팬이 아닌 li태그에 대하여 어떤 처리를 하려고 한다.*/
    const target = event.target;
    if (target.tagName === "SPAN") {
      //스팬 태그에 클로즈 클래스가 부착된 친구인가?
      if (target.className === "close") {
        //삭제할지 물어보기
        if (confirm("TODO를 삭제할까요?")) {
          //삭제를 허락하면 현재 스팬의 부모인 li 태그를 감추기
          target.closest("LI").style.display = "none";
        }
        return false;
      }

      //   target.classList.add("complete");
      /*target.closest("LI")
        클릭된 요소를 감싸고 있는 부모들 중에 가장 가까히 있는 li태그 */
      const liTag = target.closest("LI");
      //LI 태그에 complete 라는 클래스를 추가하라
      //<li calss="complete"> 와 같은 코드가 된다.
      //   liTag.classList.add("complete");

      //tag 요소에 class 속성이 설정되면 classlist 에 해당 클래스명이 배열로 저장되어있다.
      //즉 , litag 에 class 속성이 있고, 값이 complete 이면 제거.
      //만약 없으면
      //클래스 변수?.aaa : 클래스 변수가 null 이 아닌 경우에만 aaa 코드 실행
      //만약 클래스변수가 null 이면 이 코ㅗ드 자체가 skip
      liTag?.classList.toggle("complete");
    } //end if
  }); //ul click event end

  const adBtn = document.querySelector("section.input button");
  adBtn.addEventListener("click", () => {
    const todo = todoinput.value;
    if (!todo) {
      alert("TODO내용을 입력해주세요");
      todoinput.select();
      return false;
    }
    //list(배열)의 끝에 새로운 값을 추가하기
    todoList.push(todo);
    createTodoList(todo);
    todoinput.value = "";
  }); //end addBtnclick

  const closeBtn = document.querySelector("");
}); //Dom contentloaded
