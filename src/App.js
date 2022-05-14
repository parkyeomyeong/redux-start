import logo from './logo.svg';
import './App.css';

import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';
import UserListContainer from './containers/UserListContainer';

function App() {
  // const state = useReduxState(); 쓸일없자나
  // const dispatch = useReduxDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <UserListContainer />
        <TodoListContainer />
        <TodoFormContainer />
      </header>
    </div>
  );

  // function click(){
  //   dispatch(addTodo("todo"));
  // }
}



export default App;
