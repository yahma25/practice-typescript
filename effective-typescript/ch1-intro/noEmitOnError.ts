/*
tsconfig: noEmitOnError: true
오류가 발생하면 트랜스파일(js파일 생성) 하지 않음
command: npx tsc --noEmitOnError "이펙티브-타입스크립트/1장-타입스크립트-알아보기/noEmitOnError.ts"
- '--noEmitOnError' 파라미터를 보내지 않고 실행하면 js파일이 생성됨
- bundler나 'npx tsc --p ./tsconfig.json'과 같이 설정 파일 기반으로 실행될 때는 생성하지 않음
*/

let hi = 'hi';

hi = 123;
