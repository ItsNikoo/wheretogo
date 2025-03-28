import {useState, useEffect} from "react";
import {Pagination} from "@mui/material";
import {usePlacesQuery} from "../../Hooks/usePlacesQuery.ts";
import {Link, useParams} from "react-router";
import "../../App.css";

interface PlaceProps {
    id: number
    title: string
    slug: string
}

interface QueryProps {
    location: string
}

export default function Query({location}: QueryProps) {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState<10 | 20 | 50 | 100>(10);
    const [totalPages, setTotalPages] = useState(28);

    const {city} = useParams();

    const {data, isLoading, error} = usePlacesQuery({page, pageSize, location})

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
        <div className="flex flex-col items-center">
            <ul>
                {data?.results.map((item: PlaceProps) => (
                    <li key={item.id}>
                        <Link to={`/${city}/${item.id}`}
                              state={{
                                  placeData: item,  // Передаем весь объект
                                  from: 'list-page' // Дополнительные мета-данные
                              }}>
                            {item.title}
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