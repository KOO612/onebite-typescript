// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
  // extra: string;
};

// 확장성, 협업, 스타일에 따라 선택하며, 복잡한 타입 조합이 필요하면 type,
// 라이브러리/프레임워크에서 확장성을 중시하면 interface를 더 많이 사용

interface User2 {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
}

let user: User = {
  id: 1,
  name: "lee",
  nickname: "leeeee",
  birth: "1997.06.12",
  bio: "hi",
  location: "수원",
};

let user2: User2 = {
  id: 2,
  name: "kim",
  nickname: "kimmmm",
  birth: "1997.06.12",
  bio: "hi",
  location: "수원",
};

// 인덱스 시그니처
type ContryCodes = {
  [key: string]: string;
};

let countryCodes: ContryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type ContryNumCodes = {
  [key: string]: number | string;
  Korea: number;
};

// let countryNumberCodes: ContryNumCodes = {
//   Korea: 410,
//   UnitedState: 840,
//   UnitedKingdom: 826,
// };

let countryNumberCodes: ContryNumCodes = {
  // Korea: 410
  UnitedState: "us",
};
