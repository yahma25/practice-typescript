/*
command: npx tsc "이펙티브-타입스크립트/ch2-type-system/type-operation.ts"

'as' 연산은 타입 연산이라서 트랜스파일 시 제거됨.
타입을 체크하려면 'typeof' 사용
*/
function asNumber(val) {
    return val;
}
function asNumberWithTypeof(val) {
    return typeof val === 'string' ? Number(val) : val;
}
