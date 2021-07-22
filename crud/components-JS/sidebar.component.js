class SideBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
          <aside
            style={{ backgroundColor: "#80BD3C" }}
            className="main-sidebar sidebar-dark-primary elevation-4"
          >
            {/* Brand Logo */}
            <a href="../index.html" className="brand-link">
              <img
                src="dist/img/kora.png"
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
                style={{ opacity: ".8" }}
              />
              <span className="brand-text font-weight-light text-dark font-weight-bold">
                Réservation Térrain
              </span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
              {/* Sidebar user (optional) */}
              <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                  <img
                    src="dist/img/avatar4.png"
                    className="img-circle elevation-2"
                    alt="User Image"
                  />
                </div>
                <div className="info">
                  <a href="#" className="d-block text-white">
                    Boughaba Khalid
                  </a>
                </div>
              </div>
              {/* Sidebar Menu */}
              <nav className="mt-2">
                <ul
                  className="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  {/* Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library */}
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-people-fill text-white mr-2 mb-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path
                          fill-rule="evenodd"
                          d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                        />
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                      </svg>
                      <p className="text-white">Réservation</p>
                    </a>
                  </li>
                </ul>
              </nav>
              {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
          </aside>
        );
    }
}