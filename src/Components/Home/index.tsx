import PlaceCard from "./PlaceCard.tsx";
import "../../App.css";

export default function Home() {
    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-3xl font-bold font-sans mb-8">Выберите город:</h1>
            <ul className="bg-white rounded-lg shadow-md divide-y divide-gray-200 mb-6">
                <PlaceCard slug={`msk`} city={"Москва"} />
                <PlaceCard slug={`spb`} city={"Санкт-Петербург"} />
                <PlaceCard slug={`kzn`} city={"Казань"} />
                <PlaceCard slug={`ekb`} city={"Екатеринбург"} />
                <PlaceCard slug={`nnv`} city={"Нижний Новгород"} />
            </ul>
        </div>
    )
}