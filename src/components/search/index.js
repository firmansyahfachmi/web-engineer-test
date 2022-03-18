import React, { useState, useEffect } from "react";
import {TextField, Button} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';


const Search = (prop) => {
 return(
     <div className="box-search">
          <TextField
          id="outlined-textarea"
          label="Search"
          placeholder="Search.."
          multiline
          className={`box-search__input ${prop.cname}`}
            size="small"

            
        />
        
        <Button variant="contained" className="box-search__btn" size="small">
            
                <SearchIcon/>
            
        </Button>
     </div>
 )
}



export default Search;