import React from 'react'
import './style.css'
import SearchIcon from '@mui/icons-material/Search';

export default function MainSection() {
  return (
    <div className='main-sec-cont'>
        <div>
        <p className='company-name'>PerfectPayRent<span>Bid</span></p>
        <p className='subtitle'>For Renters Wanting a Choice</p>
        </div>

        <div className='search-box'>
            <p>Search</p>
            <div style={{height: 16, width: 1.5, backgroundColor: '#000', marginRight: 10, marginLeft: 10}}/>
            <input className='search-input' placeholder='Type, Bedroom, Bathroom, Street, City, State'/>
            <SearchIcon sx={{fontSize: 20}}/>
        </div>
    </div>
  )
}
