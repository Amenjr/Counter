import { useSelector,useDispatch } from "react-redux";
import { decrement, increment } from "../redux/action";

const Counter=()=>{
 const dispatch = useDispatch();
const count = useSelector(state => state.count);

    
    return(
        <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <span>{count}</span>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
    )




}
export default Counter;