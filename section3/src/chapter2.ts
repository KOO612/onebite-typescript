function unknownExam() {
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
  // 다운케스팅 불가능
  // 업케스팅 가능

  let unknownVar: unknown;
  // let num: number = unknownVar;
  // let str:string = unknownVar;
}

/**
 * never 타입 공집합
 */

function nvEx() {
  function nvF(): never {
    while (true) {}
  }

  let num: number = nvF();
  let str: string = nvF();
  let bool: boolean = nvF();
  // 업케스팅 이라 가능

  // let nev1: never = 10;
  // 다운케스팅이라 불가능

  //어떤값도 저장할 수 없는 타입에 사용하기 좋음
}

/**
 * void 타입
 */

function voE() {
  function vf(): void {
    console.log('hi');
    return undefined;
  }

  let vV: void = undefined;
}

/**
 * any 타입
 */

// 모든 타입의 슈퍼 타입 가능
// 모든 타입의 서브 타입 가능 never 제외
// 타입 계층도 무시
// 위험해서 가능한 사용 x 권장

function an() {
  let unknownVar: unknown;
  let aVar: any;
  let und: undefined;
  let nvar: never;

  aVar = unknownVar;
  und = aVar;
  // nvar = aVar;
  // never 타입은 공집합이기 때문에 any도 다운케스팅 불가능
}
