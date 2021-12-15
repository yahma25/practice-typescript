/*
command
- npx tsc "이펙티브-타입스크립트/ch2-type-system/structural-typing.ts"
- node "이펙티브-타입스크립트/ch2-type-system/structural-typing.js"
*/

interface Vector2D {
  x: number;
  y: number;
}

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

interface NamedVector {
  name: string;
  x: number;
  y: number;
}

const v: NamedVector = {
  x: 3,
  y: 4,
  name: 'Zee',
};
console.log(calculateLength(v)); // 정상, 결과는 5

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function normalize(v: Vector3D) {
  const length = calculateLength(v);
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}
console.log(normalize({ x: 3, y: 4, z: 5 })); // 정상, 결과는 { x: 0.6, y: 0.8, z: 1 }

function calculateLengthL1(v: Vector3D) {
  let length = 0;
  for (const axis of Object.keys(v)) {
    console.log('axis', axis);

    const coord = v[axis];
    length += Math.abs(coord);
  }
  return length;
}
const vec3D = {x: 3, y: 4, z: 1, address: '123 Broadway'};
console.log(calculateLengthL1(vec3D)); // 정상, Nah 반환합니다.