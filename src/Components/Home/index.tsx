import PlaceCard from "./PlaceCard.tsx";
import "../../App.css";
import {motion} from "framer-motion";

export default function Home() {
    return (
        <div className="flex flex-col items-center mt-10">
            <motion.h1
                initial={{opacity: 0, y: -25}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0}}
                transition={{duration: 0.5}}
                className="text-3xl font-bold font-sans mb-8">Выберите город:
            </motion.h1>
            <motion.ul
                initial={{opacity: 0, y: -55}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0}}
                transition={{duration: 0.5}}
                className="bg-white rounded-lg shadow-md divide-y divide-gray-200 mb-6">
                <PlaceCard slug={`msk`} city={"Москва"}/>
                <PlaceCard slug={`spb`} city={"Санкт-Петербург"}/>
                <PlaceCard slug={`kzn`} city={"Казань"}/>
                <PlaceCard slug={`ekb`} city={"Екатеринбург"}/>
                <PlaceCard slug={`nnv`} city={"Нижний Новгород"}/>
            </motion.ul>
        </div>
    )
}