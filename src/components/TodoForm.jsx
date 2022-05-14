import { useRef } from "react";
import useReduxDispatch from "../hooks/useReduxDispatch";
import { addTodo } from "../redux/actions";

export default function TodoForm(){
    const inputRef = useRef();//요놈 뭐였지 복습이 필요하다..!
    const dispatch = useReduxDispatch();

    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={click}>추가</button>
        </div>
    )

    function click(){
        dispatch(addTodo(inputRef.current.value));
    }
}