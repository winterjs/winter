import {Core} from "./core";
import * as types from "./types"
export default (() => {
    let winter = <types.Winter>((fun:()=>string)=>{
        return new Core(fun);
    });
    return winter;
})()