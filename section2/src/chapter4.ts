// 타입 별칭

import { type } from 'os';

// 동일 스코프 안에서는 동일 별칭 불가능
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
  extra?: string;
};

let kim: User = {
  id: 1,
  name: 'kim',
  nickname: 'winterlood',
  birth: '1997.01.07',
  bio: '안녕하세요',
  location: '부천시',
};

let park: User = {
  id: 2,
  name: 'park',
  nickname: 'winterlood',
  birth: '1997.01.07',
  bio: '안녕하세요',
  location: '부천시',
};

// 인덱스 시그니쳐
type ContryCodes = {
  [key: string]: string;
};

let contryCodes: ContryCodes = {
  korea: 'ko',
  us: 'us',
  uk: 'uk',
};

type ContryNumCodes = {
  [key: string]: number;
  korea: number;
};

let contryNumCodes: ContryNumCodes = {
  korea: 410,
};
