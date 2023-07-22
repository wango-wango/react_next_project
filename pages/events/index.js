import React from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "src/dummy-data";
import EventList from "src/components/events/EventList";
import EventSearch from "src/components/events/EventSearch";
function Event() {
  const router = useRouter();
  const events = getAllEvents();
  const onSearch = (year, month) => {
    console.log(year, month);
    const fullPath = `/events/${year}/${month}`;
    // 如果只在 events/ 後面設定一個參數，next 會導入頁面到[eventId]
    // 如果在 events/ 後面設定多於一個參數，next 會導入頁面到 [...slug]
    router.push(fullPath);
  };
  return (
    <div>
      <EventSearch onSearch={onSearch} />
      <EventList items={events} />
    </div>
  );
}

export default Event;
