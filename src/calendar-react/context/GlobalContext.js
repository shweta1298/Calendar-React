import dayjs from 'dayjs';
import React from 'react'

const GlobalContext=React.createContext({
    monthIndex:0,
    setMonthIndex:(index)=>{},
 
})

export default GlobalContext;