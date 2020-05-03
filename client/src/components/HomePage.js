import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="bg-white">
      <NavBar />
      <div className="jumbotron jumbotron-fluid">
        <div className="container mt-5">
          <h1 className="text-blue font-weight-bold">FINANCIAL SOLUTIONS</h1>
          <p className="pb-3 small">
            PiggyVest helps you achieve financial freedom by enabling you save{" "}
            <br />
            responsibly and invest on the go.
          </p>
          <p className="pb-3 small">
            Earn 10% - 15.5% interests on savings. <br />
            Earn over 25% return on investments.
          </p>
          <a href="/login" className="btn btn-green shadow">
            CREATE NEW ACCOUNT
          </a>
        </div>
      </div>

      <Main />
      <Footer />
    </div>
  );
}
