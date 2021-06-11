import {Item} from "../../app/types/item";
import image from "next/image";
import Link from "next/link";

interface EventItemProps {
    item: Item
}

const EventItem: React.FC<EventItemProps> = (props) => {
    const {item} = props;
    const formattedDate = new Date(item.date).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedAddress=item.location.replace(', ','\n');

    const link=`/events/${item.id}`;
    return( <div className=" text-xs  min-w-min  bg-white rounded-lg shadow-md dark:bg-purple-800 overflow-hidden">
                <img className="object-cover w-full h-64" src={"/"+item.image} alt={item.title}  />
                    <div className="p-6 flex flex-col  space-y-2 justify-between items-start">
                        <div>
                            <span className="font-medium text-blue-600 uppercase dark:text-blue-400">{item.title}</span>
                        </div>

                        <div className="flex flex-col items-start h-8 space-y-2" >
                            <div className="flex ">
                                <a href="#" className="mx-2  w-max font-semibold text-gray-700 dark:text-gray-200">{formattedAddress}</a>
                            </div>
                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{formattedDate}</span>
                        </div>
                        <Link href={link} >
                            <a className="cursor-pointer  block text-xl bg-gradient-to-r from-purple-500 via-yellow-500
                                 to-blue-700 bg-clip-text font-semibold  dark:text-white hover:text-gray-600
                                 hover:underline">
                                explore event
                            </a>
                        </Link>
                    </div>
            </div>)
};

export default EventItem;