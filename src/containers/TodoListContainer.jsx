import { connect, useSelector } from "react-redux";
import TodoList from "../components/TodoList";

const mapStateToProps = (state)=>{
    return {
        todos: state.todos,
    };
};
const mapDispatchToProps = (dispatch)=>{
    return {
    };
};

// connect()() 는 connect 실행한 결과가 함수고 그걸 실행하면 결과가 conatainer
const TodoListContainer = connect(
    //config
    mapStateToProps,
    mapDispatchToProps
    )(TodoList);

// 이걸 Hook으로 구현한거 (하위 컴포넌트한테 props 바로 찔러준거)
// function TodoListContainer2(){
//     //react-redux에서 제공하는 hook이래
//     const todos = useSelector((state) => state.todos);
//     return <TodoList todos={todos}/>;
// }
export default TodoListContainer;