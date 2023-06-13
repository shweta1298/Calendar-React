import React, { useMemo, useState } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

export default function ContextWrapper(props) {
    const [monthIndex,setMonthIndex]=useState(dayjs().month())
    const [year,setYear]=useState(dayjs().year())
    const GlobalContextProviderValue= useMemo(() => ({ monthIndex, setMonthIndex, year, setYear }), [monthIndex, year]);

    return (
        <GlobalContext.Provider value={GlobalContextProviderValue}>
            {props.children}
        </GlobalContext.Provider>
    )
}
