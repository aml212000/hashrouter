import { Link } from "react-router-dom"

export default function Contacts() {
    return (
        <div>
            <h2 style={{ fontSize: 44 }}>
                Contacts
            </h2>
            <div>
                <Link to="/">
                    volver
                </Link>
            </div>
        </div>
    )
}