import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const index = () => {
    return (
        <main className="flex flex-col items-center">
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    );
};

export default index;
