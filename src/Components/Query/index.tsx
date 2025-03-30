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
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <div className="w-[800px]">
                <ul className="bg-white rounded-lg shadow-md divide-y divide-gray-200 mb-6">
                    {data?.results.map((item: PlaceProps) => (
                        <li
                            key={item.id}
                            className="p-4 hover:bg-gray-50 transition-colors duration-200"
                        >
                            <Link
                                to={`/${city}/${item.id}`}
                                className="text-black font-medium text-lg"
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-center items-center gap-4">
                    <Pagination
                        count={totalPages}
                        color="primary"
                        page={page}
                        onChange={handleChange}
                    />
                    <select
                        onChange={handlePageSizeChange}
                        value={pageSize}
                        className="border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
            </div>
        </div>
    );
}