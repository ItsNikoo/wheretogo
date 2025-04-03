import {Link, useParams} from "react-router";
import "../../App.css";
import Redirection from "../Redirection";
import {motion} from "framer-motion";
import {citiesData} from "../../data.ts";
import {citiesSchema} from "../schema.ts";

interface CityData {
    id: number;
    title: string;
    slug: string;
    address: string;
    phone: string;
    site_url: string;
    subway: string;
}

interface Cities {
    moscow: CityData[];
    saintp: CityData[];
    newyork: CityData[];
    paris: CityData[];
    london: CityData[];
    shanghai: CityData[];
    tokyo: CityData[];
}

export default function City() {
    const {city} = useParams();

    const dictionary = {
        moscow: "Москва",
        saintp: "Санкт-Петербург",
        newyork: "Нью-Йорк",
        paris: "Париж",
        london: "Лондон",
        shanghai: "Шанхай",
        tokyo: "Токио",
    } as const;

    const cityName = city && city in dictionary
        ? dictionary[city as keyof typeof dictionary]
        : "Неизвестный город";

    // Валидация данных
    const validData = citiesSchema.parse(citiesData);

    // Находим данные для текущего города
    const currentCityData = validData.find(item => city && item[city as keyof Cities]);
    const places = currentCityData ? currentCityData[city as keyof Cities] : [];

    return (
        <div>
            <Redirection/>
            <motion.div className="flex flex-col items-center mt-10"
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.5}}>
                <h1 className="text-3xl font-bold mb-5">Места в городе: {cityName}</h1>

                <div className="w-full max-w-4xl">
                    {places.length > 0 ? (
                        <ul className="space-y-4">
                            {places.map((place) => (
                                <motion.li
                                    key={place.id}
                                    className="p-4 bg-white rounded-lg shadow-md"
                                    whileHover={{scale: 1.02}}
                                    transition={{type: "spring", stiffness: 400, damping: 10}}
                                >
                                    <Link to={`/${city}/${place.slug}`}
                                          state={place}
                                    >
                                        <h2 className="text-xl font-semibold">{place.title}</h2>
                                        <p className="text-gray-600">{place.address}</p>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-center text-gray-500">Нет данных о местах в этом городе</p>
                    )}
                </div>
            </motion.div>
        </div>
    );
}