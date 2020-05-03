import React, { useContext } from "react";
import { MdAttachMoney, MdPayment, MdLayersClear } from "react-icons/md";
import "./dashboard.css";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/context";
import DashboardNavbar from "./DashboardNavbar";
import IdleTimerContainer from "./IdleTimerContainer";

export default function Dashboard() {
  // eslint-disable-next-line;
  const [, , userDetails] = useContext(AppContext);
  return (
    <div className="">
      <DashboardNavbar />
      <IdleTimerContainer />

      <div className="container mt-5">
        <h3>Welcome, User</h3>

        <h3 className="mt-3 h3">Hello {userDetails.firstname}, </h3>
        <div className="row mt-5 text-center">
          <div className="col-xl-4">
            <div className="card shadow p-3">
              <div className="center">
                <MdAttachMoney size="50" color="#2f2fa2" />
                <p className="text-muted ">Balance: {userDetails.balance}</p>
                <Link
                  to="/dashboard/transfer"
                  className="btn btn-green disabled"
                >
                  Fund Account
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="card shadow p-3">
              <div className="center">
                <MdPayment size="50" color="#2f2fa2" />
                <p className="text-muted">Bills payment</p>
                <Link to="/dashboard/transfer" className="btn btn-green">
                  Pay Bills
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="card shadow p-3">
              <div className="center">
                <h3 className="card-title">Transactions</h3>
                <p className="text-muted">No Recent Transactions </p>
                <MdLayersClear size="70" color="#2f2fa2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
