import {Item} from "../app/types/item";
import firebase from "./api_url";

export const getAllEvents = async (): Promise<Item[]> => {
    const response = await firebase.get('/events.json');

    const events = [];
    for (const key in response.data) {
        events.push({
            id: key,
            ...response.data[key]
        })
    }

    return events;
}

export async function getFeaturedEvents(): Promise<Item[]> {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
}

export const getEvent = async (id): Promise<Item> => {
    const response = await firebase.get(`/events/${id}.json`);
    return response.data;
}
export const getFilteredEvents = async (dateFilter): Promise<Item[]> => {
    const {year, month} = dateFilter;
    const allEvents = await getAllEvents();

    return allEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
}
