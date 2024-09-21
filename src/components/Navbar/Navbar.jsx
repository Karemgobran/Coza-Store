import "./Navbar.css"
import { Link, Outlet } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react";
import { LoginContext } from '../../Context/Login/Login'; // تأكد إن المسار صحيح

export function Navbar() {
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext); // استخدام LoginContext

    const handleLogout = () => {
        setIsLoggedIn(false); // تعيين حالة تسجيل الخروج
        // هنا يمكنك إضافة كود لحذف بيانات المستخدم إذا لزم الأمر
    };

    return (
        <>
            <div className="Header">
                <div className="container">
                    <div className="image">
                        <img src="/src/image/logo-01.png" alt="MiniStore" />
                    </div>
                    <div className="services">
                        <ul>
                            <li><Link to="/" className="active">HOME</Link></li>
                            <li><Link to="/about">Shop</Link></li>
                            <li><Link to="/services">Features</Link></li>
                            <li><Link to="">Blog</Link></li>
                            <li><Link to="">About</Link></li>
                            <li><Link to="/">contact</Link></li>
                        </ul>
                    </div>
                    <div className="icons">
                        {isLoggedIn && ( // تظهر الأيقونات بس لو المستخدم مسجل دخول
                            <>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon icon" />
                                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon icon" />
                                <button onClick={handleLogout} className="logout-button">Log out</button>
                            </>
                        )}
                        {!isLoggedIn && <button> <Link to="/signup">SignUp</Link></button>}

                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
