import { Link } from "react-router-dom"
 
export default function About() {
    return (
        <div>
            <h2 style={{ fontSize: 44 }}>
                About
            </h2>
            <div>
                <Link to="/">
                    volver
                </Link>
            </div>
        </div>
    )
}