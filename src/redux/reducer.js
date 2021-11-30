import { DECREMENT, INCREMENT, SHOW } from "./type";


const inistate={
    count:0,
    show:false
}


const rootReducer=(state=inistate,action)=>{


  switch (action.type) {
      case INCREMENT:
          return{...state,count:state.count+1}
      case DECREMENT:
          return({...state,count: state.count>0 ? state.count-1 : 0})
      case SHOW:
          return{...state,show: !state.show}
      default: return state
  }

}
export default rootReducer;