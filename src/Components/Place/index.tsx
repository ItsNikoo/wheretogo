import {useParams} from "react-router";
import Redirection from "../Redirection";


export default function Place() {

    const {id} = useParams<string>();

    return (
        <div className="flex flex-col min-h-[600px]">
            <Redirection/>
            <p>{id}</p>
        </div>
    )
}