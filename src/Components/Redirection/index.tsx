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
                    <MenuItem value={'msk'}>Москва</MenuItem>
                    <MenuItem value={'spb'}>Санкт-Петербург</MenuItem>
                    <MenuItem value={'kzn'}>Казань</MenuItem>
                    <MenuItem value={'ekb'}>Екатеринбург</MenuItem>
                    <MenuItem value={'nnv'}>Нижний Новгород</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}