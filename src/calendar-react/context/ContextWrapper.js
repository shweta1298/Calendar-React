import React, { useMemo, useState } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

export default function ContextWrapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    const [year, setYear] = useState(dayjs().year())
    const [showEventModal, setShowEventModal] = useState(false)
    const [currentEvent, setCurrentEvent] = useState(
        {
            allDayEvent: false,
            date: "",
            description: "",
            eventEndTime: "",
            eventStartTime: "",
            backgroundColor: "#182640d3",
            color: "white",
            title: "Create New Task"
        })
    const GlobalContextProviderValue = useMemo(() => (
        {
            monthIndex,
            setMonthIndex,
            year,
            setYear,
            showEventModal,
            setShowEventModal,
            currentEvent,
            setCurrentEvent,
        }), [monthIndex, year, showEventModal, currentEvent]
    );

    return (
        <GlobalContext.Provider value={GlobalContextProviderValue}>
            {props.children}
        </GlobalContext.Provider>
    )
}
