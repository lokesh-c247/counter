import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counterslice";
import { useState } from "react";

const Counter = () => { 
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch();

    const [multiple , setMultiple] = useState(0);


    return (
        <div>
            <button onClick={()=> dispatch(increment())}>INCREMENT (+)</button>
            <span>{count}</span>
            <button onClick={()=> dispatch(decrement())}>DECREMENT (-)</button> <br/>
            <input type = "text" placeholder="Enter a value ....." onChange={(e)=>setMultiple(parseFloat(e.target.value))}/>
            <button onClick={()=> dispatch(incrementByAmount(multiple))}>Increment by multiple</button>
        </div>
    )
}

export default Counter;