import React, { useState, useEffect } from "react";
import EventList from "../../components/events/event-list";
import { MothNum } from "../../data/dummy-data";
import EventSearch from "../../components/events/event-search";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { getFeaturedEvents } from "../../helpers/api_util";

function Events(props) {
  const [month, setMonth] = useState<MothNum | null>(null);
  const [year, setYear] = useState<string | null>(null);
  console.log(props.events);
  const router = useRouter();

  const onSelectYear = (year) => {
    if (year) {
      setYear(year);
    }
  };
  const onSelectMonth = (month) => {
    if (month) {
      setMonth(month);
    }
  };
  useEffect(() => {
    if (year && month) {
      const path = `/events/${year}/${month}`;
      router.push(path);
    }
  }, [month, year]);
    const email = React.useRef<HTMLInputElement | null>();
    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    };
  return (
    <React.Fragment>
      <EventSearch OnSelectMonth={onSelectMonth} OnSelectYear={onSelectYear} />
      <EventList items={props.events} />
      <form
        onSubmit={handleSubscribe}
        className="flex justify-center items-center m-4
       space-x-4"
      >
        <input
          type="email"
          className="px-4 py-2 rounded bg-gray-100 text-gray-700 
          border-2 border-purple-500 focus:ring-pink-500 focus:border-none
        focus:outline-none"
        />
        <button
          className="px-4 py-2 bg-purple-500 text-purple-100 rounded 
        "
        >
          subscribe
        </button>
      </form>
    </React.Fragment>
  );
}

export default Events;

export const getStaticProps: GetStaticProps = async (context) => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
};
