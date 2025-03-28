import { useParams } from "react-router";
import Query from "../Query/Query.tsx";
import "../../App.css";

export default function City() {
    const { city } = useParams();

    const dictionary = {
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
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-3xl font-bold mb-5">События в городе: {cityName}</h1>
            <Query location={city || "msk"} />
        </div>
    );
}