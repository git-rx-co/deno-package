import { newfn } from "./newfn.ts"
export function DenoTest(num:number) { 
    let f = newfn(); 
    let res:number = (num * num) + f;
    return res  ; 
}

export function newfn ( ){
 return 10;
}
