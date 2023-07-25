import { getFeaturedEvents } from "../dummy-data";
import Link from "next/link";
import EventList from "src/components/events/EventList";
function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
      <Link href="test" >test</Link>
    </div>
  );
}
export default HomePage;
