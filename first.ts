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
interface Add{
  (x:number, y:number): number;
}

//2. 화살표 함수 
const add: Add = (x, y) => x + y;
