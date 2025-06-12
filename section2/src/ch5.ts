// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// 숫자형 enum
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Lang {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "lee",
  role: Role.ADMIN,
  lang: Lang.korean,
};
const user2 = {
  name: "kim",
  role: Role.USER,
  Lang: Lang.english,
};

const user3 = {
  name: "홍길동",
  role: Role.GUEST,
};

console.log(user1, user2, user3);
