import React from "react";
import Logo from "../images/Logo.png";
import ProfilePhoto from "../images/Photo.png";
import SideBarItem from "./common/sideBarItem";
import DashboardIcon from "../images/dashboardicon.png";
import CompaniesIcon from "../images/companiesicon.png";
import OrderPoolIcon from "../images/orderpoolicon.png";
import OrderHistory from "../images/orderhistoryicon.png";
import SubscriptionIcon from "../images/subscriptionicon.png";
import EarningsIcon from "../images/earningsicon.png";
import ReportIcon from "../images/reportsicon.png";
import SettingsIcon from "../images/settingsicon.png";
import SupportIcon1 from "../images/supporticon1.png";
// import DailyProgress from "./dailyProgress";
import TepoIcon from "../images/tepoicon.png";
import Line3 from "../images/Line3.png";
import TCIcon from "../images/tcicon.png";
import TCOIcon from "../images/tcoicon.png";
import TCOSIcon from "../images/tcosicon.png";
import DataCard from "./common/datacard";
//import SupportIcon2 from "../images/supporticon2.png";
const DashBoard = () => {
  return (
    <div className="body">
      <nav className="navbar fixed-top flex-md-nowrap p-0 top-nav ">
        <img src={Logo} alt="Logo" className="logoimg" />
        <input
          className="form-control w-50"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="details">
          <div className="profile-photo">
            <img src={ProfilePhoto} alt="profile" className="profile-img" />
          </div>
          <div className="name">
            Jude Adam <span className="account-type">Admin</span>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block side-bar sidenav">
            <div className="sidebar-items">
              <ul className="nav flex-column">
                <li className="nav-item dash-board-nav active-side-nav">
                  <SideBarItem
                    imgsrc={DashboardIcon}
                    imgclass="dashboard-nav-icon"
                    link="http://localhost:3000/"
                    linkclass="nav-link dashboard-nav-link active-link"
                    value="Dashboard"
                  />
                </li>

                <li className="nav-item dash-board-nav">
                  <SideBarItem
                    imgsrc={CompaniesIcon}
                    imgclass="dashboard-nav-icon"
                    link="http://localhost:3000/"
                    linkclass="nav-link dashboard-nav-link"
                    value="Companies"
                  />
                </li>
                <li className="nav-item dash-board-nav">
                  <SideBarItem
                    imgsrc={OrderPoolIcon}
                    imgclass="dashboard-nav-icon"
                    link="http://localhost:3000/"
                    linkclass="nav-link dashboard-nav-link"
                    value="Order Pool"
                  />
                </li>
                <li className="nav-item dash-board-nav">
                  <SideBarItem
                    imgsrc={OrderHistory}
                    imgclass="dashboard-nav-icon"
                    link="http://localhost:3000/"
                    linkclass="nav-link dashboard-nav-link"
                    value="Order History"
                  />
                </li>
                <li className="nav-item dash-board-nav">
                  <SideBarItem
                    imgsrc={SubscriptionIcon}
                    imgclass="dashboard-nav-icon"
                    link="http://localhost:3000/"
                    linkclass="nav-link dashboard-nav-link"
                    value="Subscription"
                  />
                </li>
                <li className="nav-item dash-board-nav">
                  <SideBarItem
                    imgsrc={EarningsIcon}
                    imgclass="dashboard-nav-icon"
                    link="http://localhost:3000/"
                    linkclass="nav-link dashboard-nav-link"
                    value="Earnings"
                  />
                </li>
                <li className="nav-item dash-board-nav">
                  <SideBarItem
                    imgsrc={ReportIcon}
                    imgclass="dashboard-nav-icon"
                    link="http://localhost:3000/"
                    linkclass="nav-link dashboard-nav-link"
                    value="Reports"
                  />
                </li>
                <li className="nav-item dash-board-nav">
                  <SideBarItem
                    imgsrc={SettingsIcon}
                    imgclass="dashboard-nav-icon"
                    link="http://localhost:3000/"
                    linkclass="nav-link dashboard-nav-link"
                    value="Settings"
                  />
                </li>
                <li className="nav-item dash-board-nav">
                  <SideBarItem
                    imgsrc={SupportIcon1}
                    imgclass="dashboard-nav-icon"
                    link="http://localhost:3000/"
                    linkclass="nav-link dashboard-nav-link"
                    value="Support"
                  />
                </li>
              </ul>
            </div>
          </nav>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <h2 className="dashboard-label">Dashboard</h2>
            <div className="graphs">
              <div className="stats-left">
                <div id="tepo" className="data-card">
                  <DataCard
                    tag="Total exchange Pool Order"
                    value={504}
                    icon={TepoIcon}
                    gicon={Line3}
                  />
                </div>
                <div id="tc" className="data-card">
                  <DataCard
                    tag="Total Companies"
                    value={504}
                    icon={TCIcon}
                    gicon={Line3}
                  />
                </div>
                <div id="tco" className="data-card">
                  <DataCard
                    tag="Total Cancelled Orders"
                    value={504}
                    icon={TCOIcon}
                    gicon={Line3}
                  />
                </div>
                <div id="tcos" className="data-card">
                  <DataCard
                    tag="Total Created Orders"
                    value={504}
                    icon={TCOSIcon}
                    gicon={Line3}
                  />
                </div>
              </div>
              <div className="stats-right">
                <div className="delivered-orders">
                  <span className="doheader">{/*Delivered Orders*/}</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
