import axios from "axios";

export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETE = 'SHOW_COMPLETE';

// {type : ADD_TODO, text : '할일'}
export function addTodo(text){
    return {
        type : ADD_TODO,
        text,
    };
}

// {type: COMPLETE_TODO, index:3}
export function completeTodo(index){
    return {
        type : COMPLETE_TODO,
        index,
    };
}

export function showAll(){
    return {type: SHOW_ALL};
}

export function showComplete(){
    return {type: SHOW_COMPLETE};
}

//users
//깃헙 API호출을 시작하는 것을 의미
export const GET_USERS_START = 'GET_USERS_START';
//깃헙 API호출에 대한 응답이 성공적으로 돌아온 경우
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
//깃헙 API호출이 실패한 경우
export const GET_USERS_FAIL = 'GET_USERS_FAIL';

export function getUsersStart(){
    return {
        type: GET_USERS_START
    }
}

export function getUserssuccess(data){
    return {
        type: GET_USERS_SUCCESS,
        data,
    }
}

export function getUsersfail(error){
    return {
        type: GET_USERS_FAIL,
        error,
    }
}

export function getUsersThunk(){
    return async(dispatch)=>{
        try{
            dispatch(getUsersStart());
            const res = await axios.get('https://api.github.com/users');
            dispatch(getUserssuccess(res.data));
        }catch(error){
            dispatch(getUsersfail(error));
        }
    };
}

export const GET_USERS = 'GET_USER';
export const GET_USERS_FULFILLED = 'GET_USERS_FULFILLED';
export const GET_USERS_REJECTE = 'GET_USERS_REJECTE';

export function getUsersPromise(){
    return {
        type: GET_USERS,
        payload: async ()=>{
            const res = await axios.get('https://api.github.com/users');
            return res.data;
        }
    }
}
