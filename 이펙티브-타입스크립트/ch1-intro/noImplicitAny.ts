/**
 * 추론: function add(a: any, b: any): any;
 * 
 * noImplicitAny: false
 * 경고: Parameter 'a' implicitly has an 'any' type, but a better type may be inferred from usage.ts(7044)
 * 
 * noImplicitAny: true
 * 오류: Parameter 'a' implicitly has an 'any' type.ts(7006)
 */
function add(a, b) {
  return a + b;
}

/**
 * noImplicitAny: true 오류 해결
 * 추론: function add2(a: number, b: number): number
 */
function add2(a: number, b: number) {
  return a + b;
}
