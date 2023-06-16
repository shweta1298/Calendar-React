import { createContext } from 'react'

const GlobalContext = createContext({
    monthIndex: 0,
    year: "",
    setMonthIndex: (index) => { },
    setYear: (newYear) => { },
    showEventModal: false,
    setShowEventModal: () => { },
    currentEvent: {},
    setCurrentEvent: (newEvent) => { }
})

export default GlobalContext;