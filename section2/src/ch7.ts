// void

function void1(): string {
  return "hello";
}

function void2(): void {
  console.log("hello");
}

let a: void;

// a = 1;
// a = "A";
a = undefined;
// strictNullchecks: false 하면 null 넣을 수 있음

function und3(): undefined {
  // return undefined;
  return;
}

function null4(): null {
  return null;
}

// undefined나 null의 경우 return을 넣어줘야 하기 때문에
// reture을 사용하고 싶지 않은 함수는 void 타입 사용

// never
// 반환 값이 있는게 모순일때
function func5(): never {
  while (true) {}
}

function func6(): never {
  throw new Error();
}

let b: never;
let anyvar: any;
// b = 1;
// b = "a";
// b = undefined;
// b = null;
// b = anyvar;
