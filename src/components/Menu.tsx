import { Link } from "react-router-dom"

function Menu() {
    return (
        <nav className="bg-gray-800 text-white p-4 flex gap-4">
            <Link to="/" className="hover:text-blue-400">
                Accueil
            </Link>
        </nav>
    )
}

export default Menu