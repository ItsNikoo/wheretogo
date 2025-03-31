import {useParams} from "react-router";
import {useSinglePlace} from "../../Hooks/useSinglePlace.ts";
import {Link} from "@mui/material";
import Redirection from "../Redirection";

export default function Place() {

    const {id} = useParams();
    const numericId = id ? parseInt(id) : NaN;
    const {data, isLoading} = useSinglePlace(numericId);

    if (isNaN(numericId)) {
        return <div>Неверный ID места</div>;
    }

    if (isLoading) {
        return <div>Loading</div>
    }

    return (
        <div className="flex  flex-col min-h-[600px]">
            <Redirection />
            <div className="mx-5 my-2">
                <h1 className="text-3xl font-sans font-bold">{data?.title}</h1>
                <p className="py-3">{data?.address}</p>
                <p className="pb-3 font-bold">Метро {data?.subway}</p>
                <div className="mb-2">
                    <Link href={`${data?.site_url}`}>{data?.site_url}</Link>
                </div>
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-1 space-y-1">
                    {data?.images.map((img, index) => (
                        <img key={index} className="" src={`${img.image}`} alt=""/>
                    ))}
                </div>
            </div>
        </div>
    )
}