import './App.css'
import {Routes, Route} from 'react-router'
import Home from "./Components/Home"
import City from "./Components/City";
import Place from "./Components/Place"

function App() {

    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path={`/:city`} element={<City />} />
                <Route path={`/:city/:slug`} element={<Place />} />
            </Routes>
        </>
    )
}

export default App
