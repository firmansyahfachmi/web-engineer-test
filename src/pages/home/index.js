import React, { useState, useEffect } from "react";
import {Container, Button, Pagination} from '@mui/material'

import Search from '../../components/search'
import Sort from '../../components/sort'
import TableData from '../../components/table'

import { connect } from "react-redux";
import {getUser} from '../../store/actions/user'
import {getUserGender} from '../../store/actions/user'



const Home = (props) => {

    
    const [dataUser, setUser] = useState([])
    const [onPage, setPage] = useState(1)
    

    

    useEffect(() => {      
            
        hitAll()       
        
        
    }, [])




    const changeGender = (val) => {
      
        hitGender(val)
        
      };

    

    const hitAll = async () => {
        await props.dispatch(getUser(onPage))
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

    

    
    
 return(
    
     <div>
        <Container maxWidth="xl" className="home">
            <h1>Example With Search and Filter</h1>
            <div className="home__top">
                <Search/>
                <Sort handleChange={changeGender} />
                <Button variant="contained" className="btn-reset" onClick={() => hitAll()}>Reset Filter</Button>
            </div>
            <div className="home__body">
                <TableData data={dataUser} />
            </div>
            <div className="home__footer">
                <Pagination count={2} variant="outlined" shape="rounded"  />
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