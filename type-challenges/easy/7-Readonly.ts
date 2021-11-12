/*
  7 - Readonly
  -------
  by Anthony Fu (@antfu) #easy #built-in #readonly #object-keys
  
  ### Question
  
  Implement the built-in `Readonly<T>` generic without using it.
  
  Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.
  
  For example
  
  ```ts
  interface Todo {
    title: string
    description: string
  }
  
  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }
  
  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  ```
  
  > View on GitHub: https://tsch.js.org/7
*/

/* _____________ Your Code Here _____________ */

/**
 * readonly 키워드 사용
 * [key in keyof T]: 받은 타입(T)의 key 이름을 key로 사용
 * T[key]: 타입 T의 key이름을 가진 속성에 정의된 타입으로 선언
 * @example
 * const myReadonly: MyReadonly<Todo1> = {title: 'abc', description: 'def', completed: false, meta: {author: 'mhkim'}};
 */
type MyReadonly<T> = { readonly [key in keyof T]: T[key] };

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/7/answer
  > View solutions: https://tsch.js.org/7/solutions
  > More Challenges: https://tsch.js.org
*/
