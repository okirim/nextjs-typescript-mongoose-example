import Select from "../ui/Select";
import {months, years} from "../../data/dummy-data";
import {FnVoid} from "../../app/types/commons.types";

interface EventSearchProps{
    OnSelectYear:FnVoid,
    OnSelectMonth:FnVoid,
}
const EventSearch :React.FC<EventSearchProps>= (props) => {


    return (<div className="flex justify-center items-center mx-auto my-8 space-x-4 w-full lg:w-6/12">
        <div className="w-1/2">
            <Select onSelect={props.OnSelectYear} data={years} selectLabel='year'/>
        </div>
        <div className="w-1/2">
            <Select onSelect={props.OnSelectMonth} data={months} selectLabel='month'/>
        </div>
    </div>)
};

export default EventSearch;