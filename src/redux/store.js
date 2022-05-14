import { applyMiddleware, createStore } from "redux";
//{}를 안하면 특정 함수같은걸 가져오는게 아니라 export default를 가져오쥐
// reducers.js에서 보면 export default로 한게 reducer니까 reducer->todoApp으로 바꿔 받은것!
import todoApp from "./reducers/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

// function middleware1(store){
//     console.log('middleware1', 0);
//     // next는 다음 middleware
//     return (next)=>{
//         console.log('middleware1', 1);
//         return action =>{
//             console.log('middleware1', 2);
//             const returnValue = next(action);
//             console.log('middleware1', 3);

//             return returnValue;
//         }
//     }
// }

const store = createStore(todoApp, composeWithDevTools(applyMiddleware(thunk, promise)));

export default store;