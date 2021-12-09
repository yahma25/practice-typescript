/**
 * strictNullChecks: true
 * 오류: Type 'null' is not assignable to type 'number'.ts(2322)
 */
const x: number = null;

const element = document.getElementById('foo');
// 오류: Object is possibly 'null'.ts(2531)
element.textContent = 'hi';

// 해결: 타입 단언문(Type Assertion)을 사용
element!.textContent = 'hi';
