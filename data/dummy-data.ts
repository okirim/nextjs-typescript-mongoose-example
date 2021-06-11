import {Item} from "../app/types/item";

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Programming for everyone',
        description:
            'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
        location: 'Somestreet 25, 12345 San Somewhereo',
        date: '2021-05-12',
        image: 'images/coding-event.jpg',
        isFeatured: false,
    },
    {
        id: 'e2',
        title: 'Networking for introverts',
        description:
            "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
        location: 'New Wall Street 5, 98765 New Work',
        date: '2021-05-30',
        image: 'images/introvert-event.jpg',
        isFeatured: true,
    },
    {
        id: 'e3',
        title: 'Networking for extroverts',
        description:
            'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
        location: 'My Street 12, 10115 Broke City',
        date: '2022-04-10',
        image: 'images/extrovert-event.jpg',
        isFeatured: true,
    },
];

export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
    return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
    const {year, month} = dateFilter;

    let filteredEvents = DUMMY_EVENTS.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
}

export function getEventById(id: unknown): Item {
    return DUMMY_EVENTS.find((event) => event.id === id);
}
export type Months='January'|'February'|'March'|'April'|'May'|'June'|'July'|'August'|'September'|'October'|'November'|'December';
export type MothNum='1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12';
export interface Month{
    name:Months,
    val:MothNum
}
export const months = [
    {
        name: 'January',
        val: '1'
    }, {
        name: 'February',
        val: '2'
    }, {
        name: 'March',
        val: '3'
    }, {
        name: 'April',
        val: '4'
    }, {
        name: 'May',
        val: '5'
    }, {
        name: 'June',
        val: '6'
    }, {
        name: 'July',
        val: '7'
    }, {
        name: 'August',
        val: '8'
    }, {
        name: 'September',
        val: '9'
    }, {
        name: 'October',
        val: '10'
    }, {
        name: 'November',
        val: '11'
    }, {
        name: 'December',
        val: '12'
    },
];

export const years=[{
    name:'2021',
    val:'2021'
},{
    name:'2022',
    val:'2022'
}];