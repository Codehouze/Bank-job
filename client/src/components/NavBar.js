import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top p-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            ORB Bank
          </a>
          <button
            className="navbar-toggler border-0 "
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <Link to="/" className="nav-item nav-link active">
                Loans
              </Link>
              <Link to="/about" className="nav-item nav-link">
                Cedit cards
              </Link>

              <Link to="/login" className="nav-item nav-link">
                Insurance
              </Link>
              <Link to="/login" className="nav-item nav-link">
                Tavel
              </Link>
              <Link to="/login" className="nav-item nav-link">
                Mortages
              </Link>
              <Link to="/login" className="nav-item nav-link">
                Support
              </Link>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Savings
                </a>

                <div
                  className="dropdown-menu dropdown-menu-right animate slideIn"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </div>
              </li>
              <Link to="/login" className="nav-item nav-link">
                Login
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
