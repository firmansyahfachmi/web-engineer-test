import Axios from 'axios'

export const getUser = (page) => {
    return{
        type:'GET_USER',
        payload: Axios.get(
            `https://randomuser.me/api/?page=${page}&pageSize=10&results=10`
        )
    }
        
}

export const getUserGender = (page, gender) => {
    return{
        type:'GET_USER_GENDER',
        payload: Axios.get(
            `https://randomuser.me/api/?page=${page}&pageSize=10&results=10&gender=${gender}`
        )
    }
        
}