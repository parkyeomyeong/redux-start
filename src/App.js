import logo from './logo.svg';
import './App.css';

import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';

function App() {
  // const state = useReduxState(); 쓸일없자나
  // const dispatch = useReduxDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* {JSON.stringify(state)} */}
        <TodoListContainer />
        <TodoFormContainer />
        {/* <button onClick={click}> 추가</button> */}
      </header>
    </div>
  );

  // function click(){
  //   dispatch(addTodo("todo"));
  // }
}



export default App;
