// 타입 구문이 없는 경우
const people = [
	{ name: 'kim', agt: 30 },
	{ name: 'lee', agt: 40 }
];

for (const person of people) {
  console.log(person.age); // Property 'age' does not exist on type '{ name: string; agt: number; }'.
}

// 타입 구문을 선언해 놓으면 의도를 파악하여 빠르게 오류를 확인 할 수 있음
interface Person {
	name: string;
	age: number;
}

const peopleTyped: Person[] = [
  { name: 'kim', agt: 30 },
  { name: 'lee', agt: 40 },
  // Type '{ name: string; agt: number; }' is not assignable to type 'Person'.
  // Object literal may only specify known properties, and 'agt' does not exist in type 'Person'.ts(2322)
];

for (const person of people) {
  console.log(person.age); // Property 'age' does not exist on type '{ name: string; agt: number; }'.ts(2339)
}
