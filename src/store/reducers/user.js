const initialState = {
    users: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,


}


const user = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type){
        case 'GET_USER_PENDING':
            return{
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_USER_REJECTED':
            return{
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_USER_FULFILLED':
            return{
                ...state,
                isLoading: false,
                isFulfilled: true,
                users: action.payload.data.results
            }
        case 'GET_USER_GENDER_PENDING':
            return{
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_USER_GENDER_REJECTED':
            return{
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_USER_GENDER_FULFILLED':
            return{
                ...state,
                isLoading: false,
                isFulfilled: true,
                users: action.payload.data.results
            }
        case 'GET_USER_KEYWORD_PENDING':
            return{
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_USER_KEYWORD_REJECTED':
            return{
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_USER_KEYWORD_FULFILLED':
            return{
                ...state,
                isLoading: false,
                isFulfilled: true,
                users: action.payload.data.results
            }
        default :
            return state
    }
}

export default user;