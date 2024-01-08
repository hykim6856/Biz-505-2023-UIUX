# JS 의 유사 false 값들 : Falsy

- 일반적인 프로그래밍 언어에서 true, false 값은 boolean 이라는 데이터 type을 갖는다.
- `if(value)` 와 같은 코드는 value 값이 true 또는 false 인 boolean type의 변수이어야한다.
- `if(value == 3)` 와 같은 코드는 ()의 연산식 결과가 boolean type 이다.
- 그런데 JS 에서는 boolean type 의 변수가 아니면서 boolean 처럼 작동하는 코드가 있다.
- JS 에서는 이러한 값을 `거짓같은 값` 이라고 하고 `falsy` 라고 한다.
- JS 의 Falsy 값들

```js
const num1 = 0;
const num2 = -0;
const value1 = "";
const value2 = null;
const value3 = undefined;
const value4 = NaN;
//Not a Number
```

- JS에서는 `if()`와 Falsy 값이 만나면 false 인 것 처럼 동작한다.

```js
const value = "";
if (!value) {
}
if (value !== "") {
}

const num = 0;
if (num) {
  console.log("OK");
} else {
  console.log("fail");
}
if (num !== 0) {
  console.log("OK");
} else {
  console.log("fail");
}
```

```js
let value1 = "";
let value2 = "";
let value3 = "";

if (value1 !== "") {
  console.log(value1);
} else if (value2 !== "") {
  console.log(value2);
} else {
  console.log(value3);
}
console.log(value1 || value2 || value3);
//falsy  가 아닌 겂을 value4에 저장하라
let value4 = value1 || value2 || value3;
let value4 = "";
if (value !== "") {
  value4 = value1;
} else if (value2 !== "") {
  console.log(value2);
} else {
  console.log(value3);
}
```
