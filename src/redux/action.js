import { DECREMENT, INCREMENT,SHOW } from "./type"

 export const increment=()=>{
     return {
             type:INCREMENT
         }
     
 }

 export const decrement=()=>{
     return {
         type:DECREMENT
     }
 }
 export const show=()=>{
     return{
         type:SHOW
     }
 }
 