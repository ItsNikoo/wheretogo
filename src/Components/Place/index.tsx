import {useParams, useLocation, Link} from "react-router";
import Redirection from "../Redirection";
import {singlePlaceSchema} from "../schema.ts";
import {motion} from "framer-motion";
import {Button} from '@mui/material'

export default function Place() {
    const {city} = useParams<{ city?: string; id?: string }>();
    const location = useLocation();
    const receivedData = location.state || {};
    const validData = singlePlaceSchema.parse(receivedData);

    const cities: { [key: string]: string } = {
        moscow: "Москва",
        saintp: "Санкт-Петербург",
        newyork: "Нью-Йорк",
        paris: "Париж",
        london: "Лондон",
        shanghai: "Шанхай",
        tokyo: "Токио",
    };

    const cityName = city && cities[city] ? cities[city] : "Неизвестный город";

    return (
        <div className="flex flex-col">
            <Redirection/>
            <motion.div
                initial={{y: 25}}
                animate={{y: 0}}
                transition={{duration: 0.4}}
                className="m-5">
                <motion.h1
                    initial={{y: 25}}
                    animate={{y: 0}}
                    transition={{duration: 0.4}}
                    className="text-6xl font-bold mb-1">{validData.title}</motion.h1>
                <h3 className="text-lg text-gray-700">{cityName}</h3>
                <h3 className="text-lg text-gray-700">{validData.address}</h3>
                <h3 className="text-lg font-bold">{validData.phone}</h3>
                <a href={validData.site_url} className="text-blue-700 underline">Сайт</a>
                <div className="mt-3">
                    <Button variant="contained" component={Link} to="/">На главную</Button>
                </div>
            </motion.div>
        </div>
    );
}