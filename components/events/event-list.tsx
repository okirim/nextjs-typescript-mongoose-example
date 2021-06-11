import React from "react";
import {Item} from "../../app/types/item";
import EventItem from "./event-item";


interface EventListProps {
    items: Item[]
}

const EventList: React.FC<EventListProps> = (props) => {
    const {items} = props;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 py-2 gap-4">
            {items.map((item: Item) =>
                <EventItem key={item.id} item={item}/>
            )}
        </div>
    )
};

export default EventList;