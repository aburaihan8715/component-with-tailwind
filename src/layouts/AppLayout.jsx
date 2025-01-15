import { Outlet } from "react-router-dom";
import AppNavigation from "../ui/AppNavigation";
import Footer from "../ui/Footer";

const AppLayout = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between border p-10">
      <AppNavigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
