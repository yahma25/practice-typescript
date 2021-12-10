// command: npx tsc "이펙티브-타입스크립트/1장-타입스크립트-알아보기/transpile-ignore-error.ts"
var hello = 'Hello';
hello = 5555;
/*
오류 메시지

이펙티브-타입스크립트/1장-타입스크립트-알아보기/transpile-ignore-error.ts:4:1 - error TS2322: Type 'number' is not assignable to type 'string'.

4 hello = 5555;
  ~~~~~


Found 1 error.
*/ 
