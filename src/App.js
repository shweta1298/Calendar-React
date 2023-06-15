import Calendar from './calendar-react/Calendar';

function App() {
  const events = [
    {
      date: "13-06-2023",
      title: "Meeting",
      description: "Discussion about rdg",
      allDayEvent: false,
      eventStartTime: "12:30",
      eventEndTime: "13:30",
      eventStyle: {
        backgroundColor: "skyblue",
        color: "black",
      }
    },
    {
      date: "13-06-2023",
      title: "Scrum",
      description: "Daily standup",
      allDayEvent: false,
      eventStartTime: "10:15",
      eventEndTime: "10:30",
      eventStyle: {
        backgroundColor: "green",
        color: "white",
      }
    },
    {
      date: "15-06-2023",
      title: "Call",
      description: "Discussion about scheduler",
      allDayEvent: false,
      eventStartTime: "15:30",
      eventEndTime: "16:30",
      eventStyle: {
        backgroundColor: "#fafafa",
        color: "black",
      }

    },
    {
      date: "08-06-2023",
      title: "Lunch",
      // description: "Discussion about gantt",
      allDayEvent: false,
      eventStartTime: "10:30",
      eventEndTime: "11:30",
      eventStyle: {
        backgroundColor: "red",
        color: "white",
      }
    },
  ]
  return (
    <Calendar
      showSideBar={true}
      events={events}
    // onDayClicked={(e)=>console.log('e :>> ', e)}

    />
  );
}

export default App;
