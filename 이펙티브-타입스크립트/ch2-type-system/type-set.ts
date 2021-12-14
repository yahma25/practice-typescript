type A = 'A';
type B = 'B';
type Twelve = 12;

type AB = 'A' | 'B';
type AB12 = 'A' | 'B' | 12;

const a: AB = 'A';
const c: AB = 'C';

const ab: AB = Math.random() < 0.5 ? 'A' : 'B';
const abl2: AB12 = ab;
declare let twelve: AB12;
const back: AB = twelve;

//

interface Person {
  name: string;
}
interface Lifespan {
  birth: Date;
  death?: Date;
}
type PersonSpan = Person & Lifespan;
type K = keyof (Person | Lifespan); // type K: never. Person과 Lifespan의 교집합이 되는 key가 없음

//

const triple: [number, number, number] = [1, 2, 3];
const double: [number, number] = triple;

//

// string or number 타입을 제외
type T = Exclude<string | Date, string | number>;
const date1: T = new Date();
// Type 'string' is not assignable to type 'Date'.ts(2322)
const dateStr: T = '2021-12-14';
// Type 'number' is not assignable to type 'Date'.ts(2322)
const dateNum: T = 123;

// number 타입은 유지되어 0 세팅 가능
type NonZeroNums = Exclude<number, 0>;
const nonZeroNums: NonZeroNums = 0;
