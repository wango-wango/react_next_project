import { getFeaturedEvents } from "../dummy-data";

import EventList from "src/components/events/EventList";
function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
export default HomePage;
