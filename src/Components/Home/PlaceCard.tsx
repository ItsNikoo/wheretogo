import {Link} from "react-router";
import "../../App.css";


interface Props {
    slug: "msk" | "spb" | "kzn" | "ekb" | "nnv";
    city: string;
}

export default function PlaceCard({slug, city}: Props) {
    return(
        <div className="p-5 bg-gray-300 rounded-lg flex items-center">
            <Link
                to={slug}>
                <div className="text-center">
                    <h2 className="text-xl font-semibold">{city}</h2>
                </div>
            </Link>
        </div>
    )
};