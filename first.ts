const a: number = 5;
const b: number = 5 ;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = true; //의미 없음
const obj: {lat:number, lon: number} = { lat: 37.5, lon: 127.5} //object
const arr: string[] = ['123','345'] //array
const arr2: Array<number>= [1234,456] //array - generic 
const arr3: [number, number, string] = [123,456,'abc'] //tuple
const g : true = true //고정된 원시값

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
const enum Edriection {
  Up,
  Down,
  Left,
  Right
}
// const up = Edriection.Up;
// const left = Edriection.Left
function walk(dir: Edriection){
}

//7.객체 타입추론: 직접 타입 넣어주는 방법/ as const추가 - read only까지 추가됨
// const EDirection:{Up:0,Down:1,Left:2,Right:3} = {
//   Up:0,
//   Down:1,
//   Left:2,
//   Right:3
// }

// const ODirection = {
//   Up:0,
//   Down:1,
//   Left:2,
//   Right:3
// } as const