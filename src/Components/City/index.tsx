import {useParams} from "react-router";
import "../../App.css";
import Query from "../Query";
import Redirection from "../Redirection";
import {motion} from "framer-motion";

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
            <Redirection/>
            <motion.div className="flex flex-col items-center mt-10"
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.5}}>
                <h1 className="text-3xl font-bold mb-5">Места в городе: {cityName}</h1>
                <Query location={city || "msk"}/>
            </motion.div>
        </div>
    );
}