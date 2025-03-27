import {useLocation} from "react-router";

export default function Place() {

    const location = useLocation();
    const { placeData } = location.state || {};


    return (
        <div>
            <h4>Информация</h4>
            <p>{placeData.title}</p>
            <p>{placeData.slug}</p>
            <p>{placeData.address}</p>
            <pre>{JSON.stringify(placeData)}</pre>
        </div>
    )
}