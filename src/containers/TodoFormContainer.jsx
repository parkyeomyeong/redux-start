import { useCallback } from "react";
import { connect, useDispatch } from "react-redux";
import TodoForm from "../components/TodoForm"
import { addTodo } from "../redux/modules/todos";

const TodoFormContainer = connect(
    (state) => ({}),
    (dispatch) => ({
        add : (text)=>{
            dispatch(addTodo(text));
        },
    })
)(TodoForm);

//마찬가지로 hook(? 나도 정확히 뭔말인지를 모르겠다;)을 이용한 방법
// function TodoFormContainer2(){

//     //useDispatch라는 hook을 제공함
//     const dispatch = useDispatch();
    
//     const add = useCallback((text) =>{
//         dispatch(addTodo(text));
//     },[dispatch]);

//     return <TodoForm add={add}/>;
// }
export default TodoFormContainer;