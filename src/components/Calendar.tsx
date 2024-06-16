import "./Calendar.css";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thur", "Fri"];
const TIMESLOTS = [
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

export default function Calendar() {
  return (
    <div className="container rounded-2xl bg-white mx-auto p-4">
      <div className="flex relative justify-center">
        <div className="border-2 rounded-xl text-center w-16 absolute left-1">
          <h3 className="text-sm">0 Credits</h3>
        </div>
        <div className="mb-4">
          <h2 className="">Schedule</h2>
        </div>
      </div>

      {/* grid container */}
      <div className="grid calendar-container text-center">
        {/* header */}
        <div className="header">
          <div className="grid grid-cols-5 weekday">
            {WEEKDAYS.map((day) => {
              return (
                <div className="p-4" key={day}>
                  {day}
                </div>
              );
            })}
          </div>
        </div>

        {/* timeslots */}
        <div className="timeslots-container relative">
          <div className="flex flex-col items-center timeslot">
            {TIMESLOTS.map((timeslot) => {
              return (
                <div className="pb-12 text-sm" key={timeslot}>
                  {timeslot}
                </div>
              );
            })}
          </div>
        </div>

        <div className="event-calendar relative grid grid-cols-5 grid-rows-12">
            <div className="border rounded border-blue-600 bg-blue-50 col-start-1 row-start-5 h-1/2">
                CSC 1234
            </div>
        </div>
      </div>
    </div>
  );
}
