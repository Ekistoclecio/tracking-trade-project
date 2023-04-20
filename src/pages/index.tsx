import Dashboad from "../components/Dashboard";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { useAuthContext } from "../providers/contexts/authContext";
import LoginScreen from "../components/LoginScreen";
import useStyleHomePage from "../hooks/useStyleHomePage";

export default function Home() {
  const { logged } = useAuthContext();
  const { LayoutRef, divRef, sideBarIsOpen, contenteWidth, setSideBarIsOpen } =
    useStyleHomePage();
  return !logged ? (
    <div
      ref={LayoutRef}
      className="d-flex flex-column align-items-center hv-100 w-100 justify-content-center"
      style={{ background: "#e9ecef" }}
    >
      <LoginScreen></LoginScreen>
      <span ref={divRef}></span>
    </div>
  ) : (
    <div
      ref={LayoutRef}
      className="d-flex flex-column flex-md-row w-100 overflow-hidden"
    >
      <div
        ref={divRef}
        className="d-flex h-100"
        style={{ minWidth: "max-content" }}
      >
        <SideBar openSideBar={sideBarIsOpen} />
      </div>
      <div
        className="d-flex flex-column"
        style={{ minWidth: `${contenteWidth}px` }}
      >
        <TopBar
          sideBarState={sideBarIsOpen}
          openCloseSideBar={setSideBarIsOpen}
        />
        <Dashboad />
      </div>
    </div>
  );
}
