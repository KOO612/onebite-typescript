// enum
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN, // 0 할당(자동)
  USER, // 1 할당(자동)
  GUEST, // 2 할당(자동)
}

enum Language {
  korean = 'ko',
  english = 'en',
}

const user1 = {
  name: '이정환',
  role: Role.ADMIN, // 0
  language: Language.korean, // "ko"
};

const user2 = {
  name: '홍길동',
  role: Role.USER, // 회원
};

const user3 = {
  name: '아무개',
  role: Role.GUEST, // 게스트
};
