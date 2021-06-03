const { interval } = rxjs;

// 구독을 변수/상수로 지정한 뒤 unsubscribe() 사용
const obs$ = interval(1000);
const subscription = obs$.subscribe(console.log);

setTimeout((_) => subscription.unsubscribe(console.log('구독 종료')), 5500);

setTimeout((_) => obs$.subscribe(console.log), 7500);
