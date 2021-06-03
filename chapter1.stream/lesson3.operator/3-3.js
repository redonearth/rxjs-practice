const { fromEvent } = rxjs;

const { map } = rxjs.operators;
const observable$ = fromEvent(document, 'click');

// ... observer 정의
// const observer = {};

observable$
  .pipe(map((e) => e.x + ' ' + e.y))
  .subscribe((x) => console.log(x, ' 발행'));
