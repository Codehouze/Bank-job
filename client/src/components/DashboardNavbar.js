import React, { useContext, useState } from "react";
import { AppContext } from "../contexts/context";
import Sidebar from "react-sidebar";
import { MdDehaze } from "react-icons/md";
import SidebarContent from "./SidebarContent";

const DashboardNavbar = () => {
  // eslint-disable-next-line;
  const [, , userDetails] = useContext(AppContext);
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  }

  return (
    <Sidebar
      sidebar={<SidebarContent />}
      open={sidebarOpen}
      onSetOpen={onSetSidebarOpen}
      styles={{
        sidebar: { background: "#282828", color: "white", width: "300px" },
      }}
    >
      <div className="p-3 navbar p-4">
        <MdDehaze
          color="white"
          size="20"
          onClick={() => onSetSidebarOpen(true)}
        >
          Open sidebar
          </MdDehaze>
        <div>
          <a href="/" className="btn bg-white">
            Balance: {userDetails.balance}
          </a>
        </div>
      </div>
    </Sidebar>
  );
}

export default DashboardNavbar;
