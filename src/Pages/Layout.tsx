import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";



function Layout() {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
