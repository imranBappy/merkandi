import { Link } from "react-router-dom";
import logoImage from "../../assets/images/lws-logo-dark.svg";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../../features/auth/authSlice";

export default function Navigation() {
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(userLoggedOut())
        localStorage.clear()
    }
    const { user } = useSelector(state => state.auth)
    return (
        <nav className="border-general sticky top-0 z-40 border-b bg-violet-700 transition-colors">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/">
                        <img
                            className="h-10"
                            src={logoImage}
                            alt="Learn with Sumit"
                        />
                    </Link>
                    <ul>
                        <li className="text-white">
                            
                            <span className="px-2 py-1 mr-4 font-bold cursor-pointer ring-2 ring-sky-400  rounded">{user.name}</span>
                            <span className="cursor-pointer" onClick={logout}>Logout</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
