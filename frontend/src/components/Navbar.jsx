import { Link } from "react-router-dom";
import AuthenticationService from ".././AuthenticationService.jsx";
export default function Navbar() {
  const loginUrl = AuthenticationService.getLoginUrl();
  const logoutUrl = AuthenticationService.getLogoutUrl();

  return (
    <div className="d-flex justify-content-between">
      <h1 className="">KeyCloak App</h1>
      <ul className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to={loginUrl} className="nav-link">
          Login
        </Link>
        <Link to={logoutUrl} className="nav-link">
          Logout
        </Link>
        {AuthenticationService.isLoggedIn() && (
          <Link to="/resource" className="nav-link">
            Protected Resource
          </Link>
        )}
      </ul>
    </div>
  );
}
