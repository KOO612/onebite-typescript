let numArr: number[] = [1, 2, 3];

let strArr: string[] = ['a', 'b', 'c'];

let boolArr: Array<boolean> = [true, false, true];
// 제네릭 타입

let mulArr: (number | string)[] = [1, 'a'];

//다차원 배열 타입 정의
let douArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

//다차원 다 타입 배열
let dmArr: (string | number | boolean)[][] = [
  [1, 'a'],
  [3, true, 'c'],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3]; error

let tup2: [number, string, boolean] = [1, '2', true];

tup1.push(1);
// 배열 메서드 사용 시 튜플의 길이 제한 발동 x

// 예
const users = [
  ['kim', 1],
  ['lee', 2],
  ['park', 3],
  ['koo', 4],
  // [5, 'kang']
];

const users2: [string, number][] = [
  ['kim', 1],
  ['lee', 2],
  ['park', 3],
  ['koo', 4],
  // [5, 'kang']
];
