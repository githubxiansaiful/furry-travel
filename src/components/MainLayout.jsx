import { Outlet } from "react-router-dom";
import Header from "./header_footer/Header";
import Footer from "./header_footer/Footer"

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;