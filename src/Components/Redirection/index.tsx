import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useNavigate} from "react-router";
import {useState} from "react";
import {useParams} from "react-router";

export default function Redirection() {
    const {city} = useParams();
    const navigate = useNavigate();
    const [state, setState] = useState<string | undefined>(city);

    function handleChange(e: SelectChangeEvent<string>) {
        const newCity = e.target.value;
        setState(newCity)
        navigate(`/${newCity}`);
    }

    return (
        <div className="mt-3">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Выберите город</InputLabel>
                <Select
                    value={state}
                    onChange={handleChange}
                >
                    <MenuItem value={'moscow'}>Москва</MenuItem>
                    <MenuItem value={'saintp'}>Санкт-Петербург</MenuItem>
                    <MenuItem value={'newyork'}>Нью-Йорк</MenuItem>
                    <MenuItem value={'paris'}>Париж</MenuItem>
                    <MenuItem value={'london'}>Лондон</MenuItem>
                    <MenuItem value={'shanghai'}>Шанхай</MenuItem>
                    <MenuItem value={'tokyo'}>Токио</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}