// js 코드를 어디에 있던 지 정상 실행되도록 만드는 시작코드
document.addEventListener("DOMContentLoaded", () => {
  const btn_login = document.querySelector("button.btn_login");

  const input_username = document.querySelector("input[name='username']");
  const input_password = document.querySelector("#password");

  btn_login?.addEventListener("click", () => {
    //로그인을 시도 버튼이 클릭된 시점에 인풋박스에 입력된 값을 캐치하라
    const txt_username = input_username.value;
    const txt_password = input_password.value;

    if (!txt_username) {
      alert("USER NAME 을 입력해주세요");
      input_username.focus();
      //js 에선 함수코드의 진행을 중단할때 리턴 false실행
      return false;
    }

    // txt_password 값이 ""이면?
    if (!txt_password) {
      alert("password 을 입력해주세요");
      input_password.focus();
      //js 에선 함수코드의 진행을 중단할때 리턴 false실행
      return false;
    }

    //여기에 코드가 도달하면 입력이 된 상태
    //데이터를 서버로 전송
    document.querySelector("form").submit();
  });
});
