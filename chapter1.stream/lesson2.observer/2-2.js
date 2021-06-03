/*
 * Error와 Complete 살펴보기
 */

const { Observable } = rxjs;

const obs$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  // null[0]; // Error
  subscriber.complete(); // Complete
  subscriber.next(4);
});

obs$.subscribe(
  console.log,
  (err) => console.error('발행중 오류', err),
  (_) => console.log('발행물 완결')
);
