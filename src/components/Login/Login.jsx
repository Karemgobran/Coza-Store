import "./Login.css";
import { useContext, useState } from "react";
import { LoginContext } from "../../Context/Login/Login";
import { useNavigate } from "react-router-dom";

export function Login() {
    const { setuserName, setIsLoggedIn } = useContext(LoginContext);
    const [user, setuser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const storedUser = JSON.parse(localStorage.getItem("signupData")) || {};

    function handelogin(e) {
        e.preventDefault();

        if (user === storedUser.email && password === storedUser.password) {
            setuserName(user);
            setIsLoggedIn(true);
            navigate("/profile");
        } else {
            setError("Invalid email or password");
        }
    }

    return (
        <div className="continear">
            <div className="wrapper">
                <div className="title"><span>Login form</span></div>
                <form action="#" onSubmit={handelogin}>
                    <div className="row">
                        <i className='bx bxs-user'></i>
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            onChange={(e) => setuser(e.target.value)}
                        />
                    </div>
                    <div className="row">
                        <i className='bx bxs-lock-alt'></i>
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <div className="pass"><a href="#">Forget password?</a></div>
                    <div className="row button">
                        <input type="submit" value="Login" />
                        <div className="signup-link">
                            Not a member? <a href="#">Signup Now</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
