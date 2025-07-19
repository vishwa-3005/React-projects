import { Outlet } from "react-router";
import Header from "./component/Header/Header.jsx";
import Footer from "./component/Footer/Footer.jsx";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
