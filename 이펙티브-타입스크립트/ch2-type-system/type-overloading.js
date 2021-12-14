// command: npx tsc "이펙티브-타입스크립트/ch2-type-system/type-overloading.ts"
function add(a, b) {
    return a + b;
}
add(2, 3);
add(2, '3');
