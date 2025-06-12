// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "koo"];

let boolArr: Array<boolean> = [true, false, true];

let boolArr2: boolean[] = [true, false, true];

let boolArr3: (true | false)[] = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

let douArr2: Array<Array<number>> = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3];
// tup1 = ["1", "2"];

let tup2: [number, string, boolean] = [1, "2", true];

// const users = [
//   ["홍길동", 1],
//   ["임꺽정", 2],
//   ["박꺽정", 3],
//   ["김꺽정", 4],
//   [5, "최아무개"]
// ];

// 튜플 타입으로 값의 타입 순서를 잘못 입력하는것을 방지 할 수 있다.
const users: [string, number][] = [
  ["홍길동", 1],
  ["임꺽정", 2],
  ["박꺽정", 3],
  ["김꺽정", 4],
  [5, "최아무개"],
];
