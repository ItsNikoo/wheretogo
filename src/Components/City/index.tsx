import {useParams} from "react-router";
import Query from "../Query.tsx";

export default function City() {
    const { city } = useParams();

    return (
        <div>
            <h1>Информация о городе: {city}</h1>
            <Query location={city || "msk"} />
        </div>
    )
}