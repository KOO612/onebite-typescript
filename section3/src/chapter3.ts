import { type } from 'os';

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;
// 업케스팅

// num2 = num1;
// 다운케스팅이라 불가능

/**
 * 객체 타입간의 호환성
 * 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type anm = {
  name: string;
  color: string;
};

type dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: anm = {
  name: '기린',
  color: 'yel',
};

let dog: dog = {
  name: '돌돌이',
  color: 'red',
  breed: 'gold',
};

animal = dog;

// dog = animal;
