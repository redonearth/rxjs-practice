const { range } = rxjs;

const { filter, map } = rxjs.operators;
const observable$ = range(1, 10);

const observer = {
  next: (x) => console.log(x + ' 발행'),
  error: (err) => console.error('발행중 오류', err),
  complete: () => console.log('발행물 완결'),
};

observable$
  .pipe(
    filter((x) => x % 2 === 0),
    // map 추가
    map((x) => x * x),
    map((x) => x + 10)
  )
  .subscribe(observer);
