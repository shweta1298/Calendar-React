import { createContext } from 'react'

const GlobalContext = createContext({
    monthIndex: 0,
    year: "",
    setMonthIndex: (index) => { },
    setYear: (newYear) => { },


})

export default GlobalContext;