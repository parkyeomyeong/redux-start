import { createStore } from "redux";
import todoApp from "./reducers/reducer";
//{}를 안하면 특정 함수같은걸 가져오는게 아니라 export default를 가져오쥐
// reducers.js에서 보면 export default로 한게 reducer니까 reducer->todoApp으로 바꿔 받은것!
const store = createStore(todoApp);

export default store;