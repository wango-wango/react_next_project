import React, { Fragment } from "react";
import { getFilteredEvents } from "src/dummy-data";
import { useRouter } from "next/router";
import EventList from "src/components/events/EventList";
import ResultsTitle from "src/components/events/results-title";
import Button from "src/components/ui/button";
import ErrorAlert from "src/components/events/error-alert";
function FilterEvent() {
  const router = useRouter();
  const filterData = router.query.slug;

  // 預防第一次進入該頁面時，無法取得 router.query
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }
  const year = +filterData[0];
  const month = +filterData[1];

  // 確認是否查詢資料有誤
  const check = () => {
    return (
      isNaN(year) ||
      isNaN(month) ||
      year > 2030 ||
      year < 2021 ||
      month < 1 ||
      month > 12
    );
  };
  if (check()) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter, please adjust your values! </p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  // 利用 router.query.slug 取得查詢年月，並取得該 filter 後的資料
  const filteredEvents = getFilteredEvents({ year, month });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(year, month - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilterEvent;
