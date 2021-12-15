/*
any 타입 자동 완성
*/

const obj = {
  foo: 'foo 값',
  bar: 3,
};

// 추론: (property) foo: string
obj.foo;

const obj2: any = {
  foo: 'foo',
  bar: 5,
};

// 추론: any
obj2.foo;

/*
any 타입 리팩터링
- Person 인터페이스의 속성 이름 수정 시 Person으로 타입 선언된(formatName) 코드만 이름이 수정됨
- Rename Symbol 기능으로 수정
*/
interface Person {
  first: string;
  last: string;
}

const formatName = (p: Person) => `${p.first} ${p.last}`;
const formatNameAny = (p: any) => `${p.first} ${p.last}`;
