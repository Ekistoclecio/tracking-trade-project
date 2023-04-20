import Style from "./index.module.scss";
import { useAuthContext } from "../../providers/contexts/authContext";
import { TopBarProps } from "../../interfaces/interfaces";
import useTopBar from "../../hooks/useTopBar";

export default function TopBar({
  openCloseSideBar,
  sideBarState,
}: TopBarProps) {
  const {
    searchProductValue,
    localArrayProducts,
    initialsUserName,
    userName,
    logout,
    setSearchProductValue,
    setProduct,
    toggleFullScreen,
  } = useTopBar();

  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <div className="d-flex">
            <button
              className="navbar-toggler me-2 border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => openCloseSideBar(!sideBarState)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <form className="d-flex ">
              <div className="input-group bg-white border border-2 rounded-pill">
                <span
                  className="btn bg-white border-0 rounded-pill"
                  style={{ cursor: "default" }}
                >
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className={`border-0 rounded-pill ${Style.inputSearch}`}
                  placeholder="Search..."
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                  id="inputSearch"
                  value={searchProductValue}
                  onChange={(e) => setSearchProductValue(e.target.value)}
                />
                <ul
                  className="dropdown-menu mt-5 overflow-auto"
                  style={{
                    fontSize: "14px",
                    maxHeight: "300px",
                  }}
                  id="dropdownSearch"
                >
                  <li className="fw-bolder ms-3 mb-2">Products</li>
                  {localArrayProducts.map((item) => (
                    <li
                      key={item.id}
                      id={item.id}
                      className="dropdown-item d-flex align-items-center"
                      style={{ cursor: "pointer" }}
                      onClick={setProduct}
                    >
                      <img
                        style={{ maxWidth: "40px", minHeight: "40px" }}
                        src={
                          item.pictureUrl
                            ? item.pictureUrl
                            : "https://nitm.ac.in/htmls/images/defaultuser.jpg"
                        }
                        className="me-2"
                      />
                      <span className="d-flex flex-column">
                        <span className="fw-bolder">{item.name}</span>
                        <span
                          className="text-secondary"
                          style={{ fontSize: "12px" }}
                        >
                          {item.brand.name}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </form>
          </div>
          <span className="d-flex">
            <button
              className="border-0 bg-light mx-2"
              onClick={toggleFullScreen}
            >
              <i className="bi bi-fullscreen"></i>
            </button>
            <div className="nav-item dropdown d-flex">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span
                  className="rounded-circle bg-primary text-white p-2 d-flex align-items-center justify-content-center mx-2"
                  style={{ width: "35px", height: "35px" }}
                >
                  {initialsUserName}
                </span>
                {userName.split(" ")[0]}
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end mt-3 border-0 p-0"
                aria-labelledby="navbarDropdown"
              >
                <li className="dropdown-item my-1">
                  <a
                    className="dropdown-item p-0"
                    style={{ width: "120px", cursor: "pointer" }}
                    onClick={logout}
                  >
                    <i className="bi bi-power text-danger"></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </span>
        </div>
      </nav>
    </>
  );
}
