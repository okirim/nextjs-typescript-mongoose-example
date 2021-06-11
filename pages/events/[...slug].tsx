import React from 'react';
import {useRouter} from "next/router";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import EventList from "../../components/events/event-list";
import {GetServerSideProps} from "next";
import {getFilteredEvents} from '../../helpers/api_util';
import {Item} from "../../app/types/item";

interface FilterEventProps {
    events: Item[],
}

const FilteredEvent: React.FC<FilterEventProps> = (props) => {
    const filteredEvents = props.events;

    const router = useRouter();
    if(!filteredEvents){
      router.push('/not-found')
    }
    const dateFilter = router.query.slug;


    if (!dateFilter) {
        return <div className="flex items-center justify-center  w-screen h-screen">
            <LoadingSpinner h={16} w={16} color={'gray-900'}/>
        </div>
    }




    return (<div>
        <EventList items={filteredEvents}/>
    </div>)
}
export default FilteredEvent;


export const getServerSideProps: GetServerSideProps = async (context) => {
    const dateFilter = context.params.slug;
    const year = +dateFilter[0];
    const month = +dateFilter[1];
    const dateFilterFormatted = {year, month};
    const filteredEvents = await getFilteredEvents(dateFilterFormatted);
    return {
        props: {
            events: filteredEvents
        },
    }
};

// export const getStaticPaths: GetStaticPaths = async () => {
//     const events = await getAllEvents();
//
//     const paths = events.map(e => {
//         const year = new Date(e.date).getFullYear();
//         const month = new Date(e.date).getMonth();
//
//         return {
//             params: {
//                 slug: [year.toString(), month.toString()],
//             }
//         }
//     });
//     //[{prams:{id_one:id_one_value}}]
//     return {
//         paths,
//         fallback: true
//     }
// }