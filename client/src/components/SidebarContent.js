import React, { useContext } from "react";
import { AppContext } from "../contexts/context";
import {
  MdDashboard,
  MdCompareArrows,
  MdLibraryBooks,
  MdPermIdentity,
  MdQuestionAnswer,
  MdPowerSettingsNew,
} from "react-icons/md";
import { Link, Redirect } from "react-router-dom";

export default function SidebarContent() {
  const [isAuthenticated, setIsAuthenticated] = useContext(AppContext);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div className="center">
        <div>
          <ul >
            <li>
              <Link to="/dashboard" className="text-white" >
                <MdDashboard size="25" color="grey"/>  {" "}
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard/support" className="text-white">
                {" "}
                <MdQuestionAnswer size="25" color="grey"/> {" "}
                Bills payment
              </Link>
            </li>
            <li>
              <Link to="/dashboard/transfer" className="text-white">
                {" "}
                <MdCompareArrows size="25" color="grey"/> {" "}
                 Transfer funds
              </Link>
            </li>
            <li>
              <Link to="/dashboard/transactions" className="text-white">
                {" "}
                <MdLibraryBooks size="25" color="grey"/>  {" "}
                Transactions
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className="text-white">
                {" "}
                <MdPermIdentity size="25" color="grey"/> {" "}
                My profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard/support" className="text-white">
                {" "}
                <MdQuestionAnswer size="25" color="grey"/> {" "}
                Loans
              </Link>
            </li>
            <li>
              <Link to="/" onClick={handleLogout} className="text-white">
                {" "}
                <MdPowerSettingsNew size="25" color="grey"/> {" "}
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
