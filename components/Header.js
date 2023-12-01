import Navbar from "./components/NavBar";
import Header from "./componets/Header";

export default function Header() {
  return (
    <> 
      <Header>
           <Navbar />
        </Header>
       <Outlet />
    </>
  );
};
