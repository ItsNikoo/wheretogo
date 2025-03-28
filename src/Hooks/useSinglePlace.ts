import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {placeSchema} from "../Components/schema.ts";

async function fetchPlace(id: number) {
    try {
        const response = await axios.get(`/api/places/${id}/?lang=ru&fields=id,title,slug,location,subway,address,site_url,images`)
        const validData = placeSchema.parse(response.data);

        if(validData){
            return validData;
        }
    }catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
}

export function useSinglePlace(id: number) {
    const {data, isLoading, error} = useQuery({
        queryKey: ['place', id],
        queryFn: () => fetchPlace(id)
    })

    return {data, isLoading, error};
}