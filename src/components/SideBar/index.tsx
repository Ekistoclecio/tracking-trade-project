import Style from "./index.module.scss";

interface SideBarProps {
  openSideBar?: boolean;
}

export default function SideBar({ openSideBar }: SideBarProps) {
  return (
    <>
      <div
        className={`${Style.sideBar} d-flex flex-column ${
          openSideBar ? "pt-lg-5" : `d-none d-lg-block`
        } pb-md-3 bg-dark ${Style.sideBarTransition} text-nowrap`}
        style={openSideBar ? { width: "240px" } : { width: "56px" }}
      >
        {openSideBar && (
          <p className="text-muted fw-bolder ms-3 d-none d-lg-block">MENU</p>
        )}
        <ul className={`nav nav-pills flex-column ${Style.ulSideBar}`}>
          <li className={`nav-item ${Style.menuOption}`}>
            <a
              href="#"
              className="nav-link p-0 py-2 text-white"
              aria-current="page"
            >
              <i
                className="bi bi-house-door mx-3"
                style={{ fontSize: "24px" }}
              ></i>
              <span className={openSideBar ? "" : "d-lg-none"}>Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
//active
