import React from "react";
import { MdLayersClear } from "react-icons/md";
import DashboardNavbar from "./DashboardNavbar";
import IdleTimerContainer from "./IdleTimerContainer";

export default function Transactions() {
  return (
    <div>
      <DashboardNavbar />
      <IdleTimerContainer />
      <div className="center text-center">
        <h3>My Transactions</h3>
        <p className="text-muted mb-5">You haven't made any transactions</p>
        <MdLayersClear size="70" color="#2f2fa2" />
      </div>
    </div>
  );
}
