function newfn ( ){
 return 10;
}
export function DenoTest(num:number) { 
    let f = newfn(); 
    let res:number = (num * num) + f;
    return res  ; 
}

