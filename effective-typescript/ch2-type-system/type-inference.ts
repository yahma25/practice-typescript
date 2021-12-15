/*
return 오류를 발생시키지 않으려면 if문에서 null이 아닌 경우를 체크해야 함
- && elOrId !== null
*/
function getElement(elementOrId: string | HTMLElement | null): HTMLElement {
  if (typeof elementOrId === 'object') {
    // 'typeof null은 object'이므로 elementOrId가 'null'일 수 있다는 것을 추론
    return elementOrId;
  } else if (elementOrId === null) {
    return document.body;
  } else {
    const el = document.getElementById(elementOrId);
    // 'document.getElementById'는 DOM API로서 찾지 못하는 경우 'null'을 반환하므로 elementOrId가 null일 수 있다는 것을 추론
    return el;
  }
}
