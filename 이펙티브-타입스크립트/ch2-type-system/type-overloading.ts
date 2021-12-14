// command: npx tsc "이펙티브-타입스크립트/1장-타입스크립트-알아보기/type-overloading.ts"

function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b: any): any {
  return a + b;
}

add(2, 3);
add(2, '3');
