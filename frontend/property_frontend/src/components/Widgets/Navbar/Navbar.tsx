import { Link } from "react-router-dom";
import "./navbar.css";
import { FaChartLine, FaUser } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to={"/"}>
          <h6>
            RentApp<span>Logo</span>
          </h6>
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="nav-item parent iconed active">
            <Link to={"#!"} className="parent-link">
              <FaChartLine className="icon" />
            </Link>

            <ul className="nav-children">
              <li className="nav-child">
                <Link to={"/create-ads"}>Create Ads</Link>
              </li>

              <li className="nav-child">
                <Link to={"/my-ads"}>My Ads</Link>
              </li>

              <li className="nav-child">
                <Link to={"/favorite-ads"}>Favorites</Link>
              </li>

              <li className="nav-child">
                <Link to={"/promote-ads"}>Promote</Link>
              </li>
            </ul>
          </li>

          <li className="nav-item iconed">
            <Link to={"/profile"}>
              <FaUser className="icon" />
            </Link>
          </li>
        </ul>
      </div>

      {/* <nav id="mobile-menu">
        <ul>
          <li className="menu-item">
            <Link to="/create-ad">
              <span>Create An Ad</span>
            </Link>
          </li>
          <li className="menu-item active">
            <a href="/account">
              <span>My Account</span>
            </a>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Navbar;
