import {Link} from 'react-router'

export default function Home(){
    return (
        <div>
            <Link to={`msk`}>Москва</Link>
            <Link to={`spb`}>Санкт-Петербург</Link>
            <Link to={`kzn`}>Казань</Link>
            <Link to={`ekb`}>Екатеринбург</Link>
            <Link to={`nnv`}>Нижний Новгород</Link>
        </div>
    )
}