import {ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE} from "./actions";
import { combineReducers } from "redux";
// state의 모습을 구성해보자면
// ['코딩', '점심먹기']; 이런 식
// 2번째로 바꾼거는 [{text : "coding", done: false}, {text : "test", done: false}] 이런식
// 3번째는 이렇게 {todoes : [{text : "coding", done: false}, {text : "test", done: false}], filter: 'ALL'}
const initialState = {todos:[], filter: 'ALL'};

//근데 각각reducer에 들어가는 initialState는 해당 것만 챙겨야함 다음과같이
const todosInitialState = initialState.todos;
const filterInitialState = initialState.filter;

// reducer를 각각의 state properties로 지정해서 세팅을 해주면 된다?
// 이렇게 combine한 reducer가 최종 reduce임
const reducer = combineReducers({
    todos: todosReducer,
    filter: filterReducer,
});

export default reducer;


export function todosReducer(previousState = todosInitialState, action){
 
    if( action.type === ADD_TODO){
        return [...previousState, { text: action.text, done : false}];
    }

    if (action.type ===COMPLETE_TODO){
        return previousState.map((todo, index)=>{
            if(index === action.index){
                return {...todo, done: true};
            }
            return todo;
        });
    }

    return previousState;
}
export function filterReducer(previousState = filterInitialState, action){

    if(action.type === SHOW_COMPLETE){
        return 'COMPLETE';
    }

    if(action.type === SHOW_ALL){
        return 'ALL';
    }

    return previousState;
}

//맨 처음한건데 나중에 그냥 보기로 남겨놨음 combinereducer로 하기 전에 코드
// export function todoApp(previousState = initialState, action){
//     // 초기값을 설정해주는 부분(만약 todolist가 없는 맨 처음일때)
//     // if (previousState === undefined){
//     //     return [];
//     // }

//     //근데 아래 로직들이 너무 복잡해져서 소 reducer로 나눠서 나중에 combine하는방법이 있음
//     if( action.type === ADD_TODO){
//         return {
//             ...previousState,
//             todos: [...previousState.todos, { text: action.text, done : false}]
//         };
//     }

//     if (action.type ===COMPLETE_TODO){
//         return {
//             ...previousState,
//             todos:previousState.todos.map((todo, index)=>{
//             if(index === action.index){
//                 return {...todo, done: true};
//             }
//             return todo;
//         })}
//     }

//     if(action.type === SHOW_COMPLETE){
//         return {
//             ...previousState,
//             filter : 'COMPLETE',
//         }
//     }

//     if(action.type === SHOW_ALL){
//         return {
//             ...previousState,
//             filter : 'ALL',
//         }
//     }

//     return previousState;
// }