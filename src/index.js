import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import ReduxContext from './contexts/ReduxContext';
// import {addTodo, completeTodo, showComplete} from "./redux/actions"

//store에 변경사항 생기는걸 구독
//변경사항이 생기면 내장 함수를 실행함
// const unsubscibe = store.subscribe(()=>{
//   console.log(store.getState());  
// });

// console.log(store);
// console.log(store.getState());
//store에 액션을 추가하는 내장 함수가 dispatch
// store.dispatch(addTodo("coding"));
// store.dispatch(addTodo("eat ramen"));
// store.dispatch(addTodo("baseball"));

// //이제 구독 취소임
// unsubscibe();

// store.dispatch(addTodo('할일'));
// store.dispatch(completeTodo(0));
// store.dispatch(showComplete());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxContext.Provider value={store}>
      <App/>
    </ReduxContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
