import {useParams} from "react-router";
import {useSinglePlace} from "../../Hooks/useSinglePlace.ts";

export default function Place() {

    const {id} = useParams();
    const numericId = id ? parseInt(id) : NaN;
    const { data, isLoading } = useSinglePlace(numericId);

    if (isNaN(numericId)) {
        return <div>Неверный ID места</div>;
    }

    if (isLoading) {
        return <div>Loading</div>
    }

    return (
        <div>
            <h4>Информация</h4>
            <pre>{JSON.stringify(data)}</pre>
        </div>
    )
}