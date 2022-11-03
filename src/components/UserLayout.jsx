import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from "react-router-dom";
import userLayout from '../style/userLayout.css'


const UserLayout = () => {
    return (
        <div className="userLayout">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};


export default UserLayout