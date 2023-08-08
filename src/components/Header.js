import img from "../../public/img/logo.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus"
import UserContext from "../utils/UserContext";

const Header = () => {
    const userContextData = useContext(UserContext)
    const [logName, setLogName] = useState("Login");
    return (
        <div className="header flex flex-wrap justify-between bg-red-100">
            <div>
                <img className="logo w-12" src={img} alt="logo" />
            </div>
            <div className="nav ">
                <ul className="flex flex-wrap justify-between m-4">

                    <li className="px-3">{useOnlineStatus() ? "🟢" : "🔴"}</li>
                    <li className="px-3"><Link to="/">Home</Link></li>
                    <li className="px-3"><Link to="/about">About Us</Link></li>
                    <li className="px-3"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-3">{userContextData.loggedInUser}</li>
                    <li className="px-3"><button onClick={() => { logName === "Login" ? setLogName("Logout") : setLogName("Login") }}>{logName}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;