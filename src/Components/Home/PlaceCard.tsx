import {Link} from "react-router";
import "../../App.css";


interface Props {
    slug: string;
    city: string;
}

export default function PlaceCard({slug, city}: Props) {
    return (
        <li className="p-6 hover:bg-gray-50 transition-colors duration-200 text-center">
            <Link to={slug}>
                <h2 className="text-xl font-sans font-bold">{city}</h2>
            </Link>
        </li>
    )
};