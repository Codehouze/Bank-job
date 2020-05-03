import React from "react";
import IdleTimerContainer from "./IdleTimerContainer";
import { MdHeadsetMic } from "react-icons/md";
import DashboardNavbar from "./DashboardNavbar";

export default function CustomerCare() {
  return (
    <div>
      <IdleTimerContainer />
      <DashboardNavbar />
      <div className="center text-center">
        <MdHeadsetMic size="70" color="#2f2fa2" />
        <h3 className="mt-3">Support Page</h3>
        <p className="text-muted mb-5">Welcome to ORB Bank Support</p>

        <p className="text-muted small">
          For enquires or complaints, send us an <a href="/">Email</a>
        </p>
      </div>
    </div>
  );
}
