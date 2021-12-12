/*
command: npx tsc "이펙티브-타입스크립트/1장-타입스크립트-알아보기/type-operation.ts"

'as' 연산은 타입 연산이라서 트랜스파일 시 제거됨.
타입을 체크하려면 'typeof' 사용
*/

function asNumber(val: number | string): number {
  return val as number;
}

function asNumberWithTypeof(val: number | string): number {
  return typeof val === 'string' ? Number(val) : val;
}