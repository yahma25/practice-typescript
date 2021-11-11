/*
  4 - Pick
  -------
  by Anthony Fu (@antfu) #easy #union #built-in
  
  ### Question
  
  Implement the built-in `Pick<T, K>` generic without using it.
  
  Constructs a type by picking the set of properties `K` from `T`
  
  For example
  
  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  type TodoPreview = MyPick<Todo, 'title' | 'completed'>
  
  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  ```
  
  > View on GitHub: https://tsch.js.org/4
*/

/* _____________ Your Code Here _____________ */

/**
 * T: 메인 타입
 * K extends keyof T: T의 하위집합으로서 T에 해당하는 타입을 받을 수 있으며(extends), T 타입의 key만 해당되도록 함 (keyof)
 * [key in K]: K 타입에 있는 key만 해당
 * T[key]: T 타입에 있는 key property
 */
type MyPick<T, K extends keyof T> = {[key in K]: T[key]}; // = Pick<T, K>

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  // 'invalid'는 Todo 인터페이스에 존재하지 않는 key이므로 오류
  MyPick<Todo, 'title' | 'completed' | 'invalid'>
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4/answer
  > View solutions: https://tsch.js.org/4/solutions
  > More Challenges: https://tsch.js.org
*/
