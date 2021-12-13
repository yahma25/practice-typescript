/*
return 오류를 발생시키지 않으려면 if문에서 null이 아닌 경우를 체크해야 함
- && elOrId !== null
*/
function getElement(elOrId: string | HTMLElement | null): HTMLElement {
  if (typeof elOrId === 'object') {
    // 'typeof null은 object'이므로 elOrId가 null일 수 있다는 것을 추론
    return elOrId;
  } else if (elOrId === null) {
    return document.body;
  } else {
    const el = document.getElementById(elOrId);
    // 'document.getElementById'는 DOM API로서 찾지 못하는 경우 null을 반환하므로 elOrId가 null일 수 있다는 것을 추론
    return el;
  }
}
