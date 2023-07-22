import { React, useRef } from "react";
import Button from "../ui/button";
import classes from "src/styles/events-search.module.css";

function EventSearch(props) {
  const monthList = [
    { val: 1, name: "January" },
    { val: 2, name: "February" },
    { val: 3, name: "March" },
    { val: 4, name: "April" },
    { val: 5, name: "May" },
    { val: 6, name: "June" },
    { val: 7, name: "July" },
    { val: 8, name: "August" },
    { val: 9, name: "September" },
    { val: 10, name: "October" },
    { val: 11, name: "November" },
    { val: 12, name: "December" },
  ];
  const yearRef = useRef();
  const monthRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const year = yearRef.current.value;
    const month = monthRef.current.value;

    // 利用 onSearch 函式把此 component 的 year, month 值傳到父層
    props.onSearch(year, month);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select name="" id="year" ref={yearRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select name="" id="month" ref={monthRef}>
            {monthList.map((month) => (
              <option value={month.val} key={month.name}>
                {month.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventSearch;
