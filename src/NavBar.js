import {Link} from 'react-router-dom'

export default function NavBar(props) {
    return (
        <>
            <Link to="/cities">Cities//</Link>
            <Link to="/cities/new">New</Link>
        </>
    )
}