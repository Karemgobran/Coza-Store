import "./Profile.css"
import { useContext } from "react"
import { LoginContext } from "../../Context/Login/Login"
export function Profile() {
    const { userName } = useContext(LoginContext)
    return (

        <>
            <h1>YOUR Email: {userName}</h1>
        </>
    )
}