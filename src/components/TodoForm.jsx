import { useRef } from "react";

export default function TodoForm({add}){
    const inputRef = useRef();//요놈 뭐였지 복습이 필요하다..!

    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={click}>추가</button>
        </div>
    )

    function click(){
        add(inputRef.current.value);
    }
}

