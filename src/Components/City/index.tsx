import {useParams} from "react-router";
import "../../App.css";
import Query from "../Query";
import Redirection from "../Redirection";

interface cities {
    msk: string;
    spb: string;
    kzn: string;
    ekb: string;
    nnv: string;
}
export default function City() {
    const {city} = useParams();

    const dictionary: cities = {
        msk: "Москва",
        spb: "Санкт-Петербург",
        kzn: "Казань",
        ekb: "Екатеринбург",
        nnv: "Нижний Новгород",
    } as const;

    const cityName = city && city in dictionary
        ? dictionary[city as keyof typeof dictionary]
        : "Неизвестный город";


    return (
        <div>
            <Redirection />
            <div className="flex flex-col items-center mt-10">
                <h1 className="text-3xl font-bold mb-5">Места в городе: {cityName}</h1>
                <Query location={city || "msk"}/>
            </div>
        </div>
    );
}