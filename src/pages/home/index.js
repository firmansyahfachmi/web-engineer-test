import React, { useState, useEffect } from "react";
import {Container, Button, Pagination} from '@mui/material'

import Search from '../../components/search'
import Sort from '../../components/sort'
import TableData from '../../components/table'

import { connect } from "react-redux";
import {getUser} from '../../store/actions/user'
import {getUserGender} from '../../store/actions/user'
import {getUserKeyword} from '../../store/actions/user'
import {getUserSort} from '../../store/actions/user'



const Home = (props) => {

    
    const [dataUser, setUser] = useState([])
    const [onPage, setPage] = useState(1)
    const [order, setOrder] = useState('ascend')

    

    

    useEffect(() => {      
            
        hitAll()       
        
        
    }, [onPage])






    const changeGender = (val) => {
        hitGender(val)
        
      };

    const searchKeyword = (val) => {
        hitKeyword(val)
    
    };

    

    const hitAll = async () => {
        await props.dispatch(getUser(onPage))
        .then(data => {
            setUser(data.value.data.results)
            
        })
        .catch(() => {
        })
    }

    const hitKeyword = async (keyword) => {
        await props.dispatch(getUserKeyword(onPage, keyword))
        .then(data => {
            setUser(data.value.data.results)
            
        })
        .catch(() => {
        })
    }

    const hitGender = (val) => {
        let gen = val.toLocaleLowerCase()
        props.dispatch(getUserGender(onPage, gen))
        .then(data => {
            setUser(data.value.data.results)
            
        })
        .catch(() => {
        })
    }

    const hitSort = (val) => {
        props.dispatch(getUserSort(onPage, val, order))
        .then(data => {
            setUser(data.value.data.results)
            
        })
        .catch(() => {
        })
    }

    
    
    const onPageChange = (e, value) => {
        setPage(value)
    }

    const onSort = (value) => {
        hitSort(value)
    }
    
 return(
    
     <div>
        <Container maxWidth="xl" className="home">
            <h1>Example With Search and Filter</h1>
            <div className="home__top">
                <Search handleChange={searchKeyword}/>
                <Sort handleChange={changeGender} />
                <Button variant="contained" className="btn-reset" onClick={() => hitAll()}>Reset Filter</Button>
            </div>
            <div className="home__body">
                <TableData data={dataUser} handleSort={onSort} />
            </div>
            <div className="home__footer">
                <Pagination count={2} variant="outlined" shape="rounded" onChange={onPageChange}  />
            </div>
        </Container>
     </div>
 )
}

const mapStateToProps = state => {
    return {
      users: state.user.users,
      isLoading: state.user.isLoading
    };
  };

export default connect(mapStateToProps)(Home);