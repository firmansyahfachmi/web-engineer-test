import React, { useState, useEffect } from "react";
import {Container, Button, Pagination} from '@mui/material'

import Search from '../../components/search'
import Sort from '../../components/sort'
import TableData from '../../components/table'




const Home = () => {
 return(
     <div>
        <Container maxWidth="xl" className="home">
            <h1>Example With Search and Filter</h1>
            <div className="home__top">
                <Search/>
                <Sort  />
                <Button variant="contained" className="btn-reset">Reset Filter</Button>
            </div>
            <div className="home__body">
                <TableData />
            </div>
            <div className="home__footer">
                <Pagination count={2} variant="outlined" shape="rounded" />
            </div>
        </Container>
     </div>
 )
}

export default Home;