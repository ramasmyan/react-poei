import { useForm} from 'react-hook-form';
import "../assets/style/signin.scss"
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {reset, decrement, increment} from "../Features/count/coutSlice";
function Toto() {
    const counter = useSelector(state => state.counter)

    const dispatch = useDispatch()

    return (
        <div>
            hello
            <h1>{counter}</h1>
            <button onClick={()=>dispatch(increment(1))}>+</button>
            <button onClick={()=>dispatch(decrement(1))}>-</button>
            <button onClick={()=>dispatch(reset())}>reset</button>

        </div>
    );
}

export default Toto;