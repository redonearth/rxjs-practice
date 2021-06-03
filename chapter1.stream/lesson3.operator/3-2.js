const { interval } = rxjs;

const { tap, filter, map } = rxjs.operators;
const observable$ = interval(1000);

// ... observer 정의
// const observer = {};

observable$
  .pipe(
    tap(console.log),
    filter((x) => x % 2 === 0),
    map((x) => x * x)
  )
  .subscribe((x) => console.log(x, ' 발행'));
