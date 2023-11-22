/**
 * 대수 타입
 * 여러개의 타입을 합성해 새롭게 만들어낸 타입
 * 합집합, 교집합
 */

import { type } from 'os';

/**
 * 합집합 Union타입
 */

let a: string | number;
a = 1;
a = 'hello';

let b: string | number | boolean;
b = 1;
b = 'hello';
b = true;

let arr: (number | string | boolean)[] = [1, 'hello', true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let u1: Union1 = {
  name: '',
  color: '',
};

let u2: Union1 = {
  name: '',
  language: '',
};

let u3: Union1 = {
  name: '',
  color: '',
  language: '',
};
