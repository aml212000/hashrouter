import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h2 style={{ fontSize: 44 }}>
                Home
            </h2>
            <div>
                <Link to="/about">
                    Sobre nosotros
                </Link>
            </div>
            <div>
                <Link to="/contacts">
                    Contactos
                </Link>
            </div>
        </div>
    )
}