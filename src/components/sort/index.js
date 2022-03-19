import React, { useState, useEffect } from "react";
import {TextField, MenuItem} from '@mui/material'


const Sorter = (props) => {

  const [gender, setGender] = useState('All')

    const genders = [
        {
          value: 'Male',
          label: 'Male',
        },
        {
          value: 'Female',
          label: 'Female',
        },
        {
          value: 'All',
          label: 'All',
        }
      ];


      const changehe = (e) =>{

        setGender(e.target.value)

        props.handleChange(e.target.value)
      }



 return(
     <div>
         <TextField
          select
          label="Gender"
          value={gender}
          onChange={changehe}
          className={`sort-field ${props.cname}`}
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