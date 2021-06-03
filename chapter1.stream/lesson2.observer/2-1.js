const { from } = rxjs;
const observable$ = from([1, 2, 3, 4, 5]);

// 구독자 생성 코드
const observer = {
  next: console.log,
  error: (err) => console.error('발행중 오류', err),
  complete: () => console.log('발행물 완결'),
};

observable$.subscribe(observer);

// 다음과 같이 적용 가능
// observable$.subscribe(
//   console.log,
//   (err) => console.error('발행중 오류', err),
//   (_) => console.log('발행물 완결')
// );

// 부분적으로만 지정 가능
const observer_1 = {
  next: console.log,
  error: (err) => console.error('발행중 오류', err),
};

const observer_2 = {
  next: console.log,
};
