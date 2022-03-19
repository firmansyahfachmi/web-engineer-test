import Axios from 'axios'

export const getUser = (page) => {

    
    return{
        type:'GET_USER',
        payload: Axios.get(
            `https://randomuser.me/api/?page=${page}&pageSize=5&results=10`
        )
    }
        
}

export const getUserGender = (page, gender) => {
    return{
        type:'GET_USER_GENDER',
        payload: Axios.get(
            `https://randomuser.me/api/?page=${page}&pageSize=5&results=10&gender=${gender}`
        )
    }
        
}

export const getUserKeyword = (page, keyword) => {
    return{
        type:'GET_USER_KEYWORD',
        payload: Axios.get(
            `https://randomuser.me/api/?page=${page}&pageSize=5&results=10&keyword=${keyword}`
        )
    }
        
}

export const getUserSort = (page, sortBy, order) => {
    return{
        type:'GET_USER_SORT',
        payload: Axios.get(
            `https://randomuser.me/api/?page=${page}&pageSize=5&results=10&sortBy=${sortBy}&sortOrder=${order}`
        )
    }
        
}

