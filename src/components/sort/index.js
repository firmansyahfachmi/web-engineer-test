import React, { useState, useEffect } from "react";
import {TextField, MenuItem} from '@mui/material'


const Sorter = (prop) => {
    const [gender, setGender] = useState('All')

    const genders = [
        {
          value: 'Man',
          label: 'Man',
        },
        {
          value: 'Woman',
          label: 'Woman',
        },
        {
          value: 'All',
          label: 'All',
        }
      ];


      const handleChange = (event) => {
        setGender(event.target.value);
      };

 return(
     <div>
         <TextField
          select
          label="Gender"
          value={gender}
          onChange={handleChange}
          className={`sort-field ${prop.cname}`}
          size="small"
          
        >
          {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
     </div>
 )
}

export default Sorter;