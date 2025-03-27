import {useState, useEffect} from "react";
import {Pagination} from "@mui/material";
import {useEventsQuery} from "../Hooks/useEventsQuery.ts";
import {Link, useParams} from "react-router";

interface PlaceProps {
    id: number
    title: string
    slug: string
    address: string
    phone: string
    site_url: string
    subway: string
    is_closed: boolean
    location: string
    has_parking_lot: boolean
}

interface QueryProps {
    location: string
}

export default function Query({location}: QueryProps) {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState<10 | 20 | 50 | 100>(10);
    const [totalPages, setTotalPages] = useState(28);

    const {city} = useParams();

    const {data, isLoading, error} = useEventsQuery({page, pageSize, location})

    useEffect(() => {
        if (data) {
            console.log(data?.count);
            setTotalPages(Math.ceil(data?.count / pageSize));
        }
    }, [data, pageSize])

    useEffect(() => {
        setPage(1)
    }, [pageSize]);

    const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(e.target.value) as 10 | 20 | 50 | 100;
        setPageSize(value);
    };

    const handleChange = (_: unknown, value: number) => {
        setPage(value);
    };

    if (isLoading) return <div>Loading</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <ul>
                {data?.results.map((item: PlaceProps) => (
                    <li key={item.id}>
                        <Link to={`/${city}/${item.slug}`}
                              state={{
                                  placeData: item,  // Передаем весь объект
                                  from: 'list-page' // Дополнительные мета-данные
                              }}>
                            {item.title} {item.location} {item.subway}
                        </Link>
                    </li>
                ))}
            </ul>
            <Pagination
                count={totalPages}
                color={`primary`}
                page={page}
                onChange={handleChange}
            />
            <select onChange={handlePageSizeChange} value={pageSize}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        </div>
    )
}