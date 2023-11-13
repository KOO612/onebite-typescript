// object
let user: object = {
  id: 1,
  name: 'koo',
};

// user.id;

// 객체 리터럴 타입
let user2: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: 'koo',
};

user2.id;

let dog: {
  name: string;
  color: string;
} = {
  name: '돌돌이',
  color: 'brown',
};

dog.name;

// 구조적 타입 시스템
// property based type system

// 선택적 property
// 옵셔널 property
// id? : number;
user2 = {
  name: 'song',
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: 'my api key',
};

// readonly 수정 불가
// config.apiKey = 'head';
