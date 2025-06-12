// object
let user: object = {
  id: 1,
  name: "홍길동",
};

// user.id;
// object 타입은 객체 라는것만 알려주고 그 안에 값은 모름

let user2: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "홍길동",
};

user2.id;

let dog: {
  name: string;
  color: string;
} = {
  name: "멍멍이",
  color: "red",
};

// 타입스크립트는
// 구조적 타입 시스템
// property based type system

// 명목적 타입 시스템

let user3: {
  // ? => property가 있어도 없어도 되는 경우
  // 선택적 property, optional property
  id?: number;
  name: string;
} = {
  id: 1,
  name: "홍길동",
};

user3 = {
  name: "홍길동",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "my api key",
};

// config.apiKey = "1234";
