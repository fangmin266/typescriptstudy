// const a: number = 5;
// const b: number = 5 ;
// const c: boolean = true;
// const d: undefined = undefined;
// const e: null = null;
// const f: any = true; //의미 없음
// const obj: {lat:number, lon: number} = { lat: 37.5, lon: 127.5} //object
// const arr: string[] = ['123','345'] //array
// const arr2: Array<number>= [1234,456] //array - generic 
// const arr3: [number, number, string] = [123,456,'abc'] //tuple
// const g : true = true //고정된 원시값

//1.function
//function add(x: number, y:number):number {return x + y} //매개변수, function, return 값에 모두 type 붙여줘야함

//2-1.함수 타입 : type 
//type Add = (x: number, y: number) =>number //함수에 대한 type (매개변수) =>return값
//2-2.함수 타입: interface
// interface Add{
//   (x:number, y:number): number;
// }

//2-3. 화살표 함수 
// const add: Add = (x, y) => x + y;

//3. never 타입(빈배열)  / ! / Element (tag관련된 타입)
// const head = document.querySelector('#head')
// if(head){
//   head.innerHTML = 'heallo'; //null걸러주기
// }

//4.type은 무조건 소문자로 시작 대문자 쓸경우는 거의 없다.
//type 생성시에는 대문자 명명 사용, 타입내에서도 사용가능 - 자동완성 기능
// type World = 'world' | 'hell'
// const aa:World='world'
// type Greeting = `hello ${World}`

//5. ...args 활용
// function rest(a:number, ...args:string[]){
//   console.log(a, args)
// }
// rest(1,'2','3')

//6.enum - dir (enum 예시 4개중의 하나여야함)
// const enum Edriection {
//   Up,
//   Down,
//   Left,
//   Right
// }
// const up = Edriection.Up;
// const left = Edriection.Left
// function walk(dir: Edriection){
// }
//6.enum 대신 객체방식으로 사용 =>장점 javascript 변환시 사라지지 않음, 단점 타입정의가 까다로움

//7.객체 타입추론: 직접 타입 넣어주는 방법/ as const추가 - read only까지 추가됨
// const ODirection = {
//   Up: 0,
//   Down:1,
//   Left: 2,
//   Right: 3
// } as const;
// const obj2 = {a:'123',b:'hello',c:'world'} as const;
// type Key = typeof obj2[keyof typeof obj2]//value만 가져오고 싶다
// type Direction = typeof ODirection[keyof typeof ODirection];
// function run(dir:Direction){}

//8.객체typing interface(복잡, 객체지향프로그래밍)
// type A = {a: string}
// const a:A = {a:'hello'}
// interface B {a:string}
// const b: B = {a:'hello'}

//9.union (| 또는 관계, 타입추론이 제대로 안됌), &(인터섹션)
// // 안좋은예)
// function add(x:string| number, y:string|number): string|number {return x+y}
// const result: string | number = add(1,2)
// type A = {hello:'world'} | {zero:'cho'};//여러개중 하나
// type A = {hello:'world'} & {zero:'cho'};//모두만족
// const a:A = {hello:'world', zero:'cho'}

// 10.type과 interface 차이 -type이 간단하지만 interface처럼 복잡한 형태를 넣지 못함 / interface는 중복으로 부를수 있다(선언할떄마다 합쳐져, 이 특성으로 남의 라이브러리를 수정 가능)
//=>명확하게 기능이 구분되있는건 아니다.
// type A = {breath:true}
// interface IA {breath:true}
// interface IB extends IA {
//   breed:true
// }
// // const B = A & IB
// interface IB {}
// interface IB {}

//11.타입(좁은타입 넓은타입으로 대입이 가능)
// type A = string | number; //넓은타입
// type B = string;
// type C = string & number; //좁은타입

//11-1.잉여속성검사(객체리터럴 검사)
// type A = {name:string}
// type B = {age:number}
// type C = A&B
// const c: C = {name:'aaa',age:1,married:true} //좁은타입 넓은타입 검사시 그 이후 바로 객체요소를 넣을경우 에러뜸
// const ab= {name:'aaa',age:1,married:true}
// const c2: C = ab
