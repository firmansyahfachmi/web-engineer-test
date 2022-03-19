import React, { useState, useEffect } from "react";
import {TextField, Button} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';



const Search = (prop) => {

    const [searchInput, setSearch] = useState('')

    const formChange = (e) => {
        setSearch(e.target.value)
    }
 return(
     <div className="box-search">
          <TextField
          id="outlined-textarea"
          label="Search"
          placeholder="Search.."
          multiline
          onChange={formChange}
          className={`box-search__input ${prop.cname}`}
            size="small"

            
        />
        
        <Button variant="contained" className="box-search__btn" size="small" onClick={() => prop.handleChange(searchInput)}>
            
                <SearchIcon/>
            
        </Button>
     </div>
 )
}



export default Search;