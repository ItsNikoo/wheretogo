import axios from "axios";
import {APISchema} from "../Components/schema.ts";
import {useQuery} from "@tanstack/react-query";

interface HookProps {
    location: string;
    page: number;
    pageSize: 10 | 20 | 50 | 100;
}

async function fetchEvents(page: number, pageSize: number, location: string) {
    try {
        const response = await axios.get(`/api/places/`, {
            params: {
                showing_since: 1444385206,
                showing_until: 1444385206,
                categories: 'amusement',
                page,
                page_size: pageSize,
                location: location
            }
        });

        const validData = APISchema.parse(response.data);
        return validData;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
}

export function useEventsQuery({page, pageSize, location}: HookProps) {
    const {data, isLoading, error} = useQuery({
        queryKey: ['results', page, pageSize, location],
        queryFn: () => fetchEvents(page, pageSize, location)
    })

    return {data, isLoading, error}

}