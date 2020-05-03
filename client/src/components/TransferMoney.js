import React, { useState } from "react";
import { MdCompareArrows, MdCloudOff } from "react-icons/md";
import Modal from "react-modal";
import DashboardNavbar from "./DashboardNavbar";
import IdleTimerContainer from "./IdleTimerContainer";

Modal.setAppElement("#root");

export default function TransferMoney() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = () => {
    setTimeout(() => setModalIsOpen(!modalIsOpen), 1 );
  };

  return (
    <div>
      <Modal isOpen={modalIsOpen} className="center text-center">
        <MdCloudOff size="50" color="#2f2fa2" />
        <h3 className="mt-3">SERVER IS DOWN</h3>
        <p className="text-muted">Please try again later</p>
        <button className="btn-red " onClick={handleModal}>
          Close
        </button>
      </Modal>
      <IdleTimerContainer />
      <DashboardNavbar />
      <div className="container mt-5">
        <div className="center card p-3 shadow">
          <h3 className="mt-5 mb-3">
            <MdCompareArrows />
            Transfer Funds
          </h3>
          <form className="">
            <input
              type="text"
              className="form-control"
              placeholder="Account Number"
              autoComplete
            />

            <input
              type="text"
              className="form-control"
              placeholder="Account Name"
              autoComplete
            />

            <input
              type="number"
              className="form-control"
              placeholder="Amount"
            />

            <button className="btn btn-green" onClick={handleModal}>
              Transfer Funds
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
