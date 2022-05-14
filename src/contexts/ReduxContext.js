import { createContext } from "react";

const ReduxContext = createContext();
// 최상위에 Context를 두고 그 안에 store를 넣어서 하위 컴포넌트들은 자유롭게 쓸 수 있게만듬
export default ReduxContext;