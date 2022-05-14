import axios from "axios";

//액션 타입 정의
export const GET_USERS_START = 'redux-start/users/GET_USERS_START';
export const GET_USERS_SUCCESS = 'redux-start/users/GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'redux-start/users/GET_USERS_FAIL';

const GET_USERS = 'redux-start/users/GET_USER';

export const GET_USERS_PENDING = 'redux-start/users/GET_USERS_PENDING';
export const GET_USERS_FULFILLED = 'redux-start/users/GET_USERS_FULFILLED';
export const GET_USERS_REJECTE = 'redux-start/users/GET_USERS_REJECTE';

//액션 생성 함수
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

// 초기값
const initialState =  {
    loading : false,
    data : [],
    error : null,
};

//리듀서
export default function reducer(state = initialState, action){
    if(action.type === GET_USERS_START){
        return {
            ...state,
            loading : true,
            error : null,
        };
    }

    if(action.type === GET_USERS_SUCCESS){
        return {
            ...state,
            loading : false,
            data : action.data,
        };
    }

    if(action.type === GET_USERS_FAIL){
        return {
            ...state,
            loading : false,
            error : action.error,
        };
    }
    return state;
}

//redux-thunk
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

//redux-promise-middleware
export function getUsersPromise(){
    return {
        type: GET_USERS,
        payload: async ()=>{
            const res = await axios.get('https://api.github.com/users');
            return res.data;
        }
    }
}