// Any unknown
// 특정 변수의 타입을 우리가 확실히 모를때
let anyVar: any = 10;
anyVar = "hello";

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;

// num = unknownVar;

// 타입 정제
if (typeof unknownVar == "number") {
  num == unknownVar;
}
