const months = [
    { name: "January", value: "1" },
    { name: "February", value: "2" },
    { name: "March", value: "3" },
    { name: "April", value: "4" },
    { name: "May", value: "5" },
    { name: "June", value: "6" },
    { name: "July", value: "7" },
    { name: "August", value: "8" },
    { name: "September", value: "9" },
    { name: "October", value: "10" },
    { name: "November", value: "11" },
    { name: "December", value: "12" },
  ];
const Date = () => {
  const [Data2, changeData2] = useState({ day: "", month: "", year: "" });
  const Data2_Handler = (evt) => {
    const changedelement = evt.target.name;
    const newvalue = evt.target.value;
    changeData2((cur) => {
      cur[changedelement] = newvalue;
      return { ...cur };
    });
  };
  const Render_Days = () => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    if (
      Data2.month === "4" ||
      Data2.month === "6" ||
      Data2.month === "9" ||
      Data2.month === "11"
    ) {
      return days.filter((day) => day !== 31);
    } else if (Data2.month === "2") {
      const isLeapYear =
        (Data2.year % 4 === 0 && Data2.year % 100 !== 0) ||
        Data2.year % 400 === 0;
      return isLeapYear ? days.slice(0, 29) : days.slice(0, 28);
    }
    return days;
  };
  const Render_Months = () => {
    return months.map((month) => (
      // key,value is a must for proper rendering
      <option key={month.value} value={month.value}>
        {month.name}
      </option>
    ));
  };
  const Render_Years = () => {
    const years = Array.from({ length: 121 }, (_, i) => 2023 - i);
    return years.map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ));
  };
  return (
    <div className="signup-date">
      <h4>{date}</h4>
      <p>{p1}</p>
      <p>{p2}</p>
      <div className="twitter-date-picker">
        <div className="dropdown">
          <select
            value={Data2.month}
            onChange={Data2_Handler}
            name="month"
            style={{ width: "200px" }}
          >
            <option value="" disabled hidden>
              Month
            </option>
            {Render_Months()}
          </select>
        </div>
        <div className="dropdown">
          <select
            value={Data2.day}
            onChange={Data2_Handler}
            name="day"
            style={{ width: "90px" }}
          >
            <option value="" disabled hidden>
              Day
            </option>
            {Render_Days().map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div className="dropdown">
          <select
            value={Data2.year}
            onChange={Data2_Handler}
            name="year"
            style={{ width: "120px" }}
          >
            <option value="" disabled hidden>
              Year
            </option>
            {Render_Years()}
          </select>
        </div>
      </div>
    </div>
  );
};
export default Date;
