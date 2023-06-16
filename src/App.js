import Calendar from './calendar-react/Calendar';

function App() {
  const events = [
    {
      date: "2023-06-13",
      title: "Meeting",
      description: "Discussion about rdg",
      allDayEvent: false,
      eventStartTime: "12:30",
      eventEndTime: "13:30",
      backgroundColor: "skyblue",
      color: "black",

    },
    {
      date: "2023-06-13",
      title: "Scrum",
      description: "Daily standup",
      allDayEvent: false,
      eventStartTime: "10:15",
      eventEndTime: "10:30",
      backgroundColor: "green",
      color: "white",
    },
    {
      date: "2023-06-15",
      title: "Call",
      description: "Discussion about scheduler",
      allDayEvent: false,
      eventStartTime: "15:30",
      eventEndTime: "16:30",
      backgroundColor: "gray",
      color: "black",
    },
    {
      date: "2023-06-08",
      title: "Lunch",
      // description: "Discussion about gantt",
      allDayEvent: false,
      eventStartTime: "10:30",
      eventEndTime: "11:30",
      backgroundColor: "red",
      color: "white",

    },
  ]
  return (
    <Calendar
      showSideBar={true}
      events={events}
    onDayClicked={(e)=>console.log('e :>> ', e)}
    />
  );
}

export default App;
