import PlaceCard from "./PlaceCard.tsx";
import "../../App.css";

export default function Home() {
    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Выберите город:</h1>
            <div className={`flex flex-row gap-10`}>
                <PlaceCard slug={`msk`} city={"Москва"} />
                <PlaceCard slug={`spb`} city={"Санкт-Петербург"} />
                <PlaceCard slug={`kzn`} city={"Казань"} />
                <PlaceCard slug={`ekb`} city={"Екатеринбург"} />
                <PlaceCard slug={`nnv`} city={"Нижний Новгород"} />
            </div>
        </div>
    )
}