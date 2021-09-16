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
import UserProfile from "./common/profile";
import SodpPhoto from "../images/sodpphoto.png";
import SodpGraph from "../images/sodpcg.png";
import EPTImage from "../images/eptimage.png";
import EPTGrapghimg from "../images/eptgraphimg.png";
import RProgressBars from "./common/rprogressbar";
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
        <UserProfile imgsrc={ProfilePhoto} name="Jude Adam" accType="Admin" />
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
                <div id="tepo" className="data-card bc-w">
                  <DataCard
                    tag="Total exchange Pool Order"
                    value={504}
                    icon={TepoIcon}
                    gicon={Line3}
                    color="bc-w"
                  />
                </div>
                <div id="tc" className="data-card bc-lw">
                  <DataCard
                    tag="Total Companies"
                    value={504}
                    icon={TCIcon}
                    gicon={Line3}
                  />
                </div>
                <div id="tco" className="data-card bc-lw">
                  <DataCard
                    tag="Total Cancelled Orders"
                    value={504}
                    icon={TCOIcon}
                    gicon={Line3}
                  />
                </div>
                <div id="tcos" className="data-card bc-lw">
                  <DataCard
                    tag="Total Created Orders"
                    value={504}
                    icon={TCOSIcon}
                    gicon={Line3}
                  />
                </div>
              </div>
              <div className="stats-right">
                <div className="sodp">
                  <span className="sodp-value">120</span>
                  <span className="sodp-text">
                    Companies sent orders to delivery pool today.
                  </span>
                  <img src={SodpPhoto} alt="sopdimage" className="sodp-image" />
                  <span className="sodp-percent">+84%</span>
                  <div className="graph-image-section">
                    <img
                      src={SodpGraph}
                      alt="graph"
                      className="sodp-graph-image"
                    />
                  </div>
                  <span className="sodp-footnote">Comapred to yesterday</span>
                </div>
                <div className="orders-today">Orders Today</div>
                <div className="ept">
                  <div className="epu">
                    <span className="epu-tag">Exchange Pool Today</span>
                    <span className="epu-text">Most Orders picked by:</span>
                  </div>
                  <div className="epd">
                    <div className="epdl">
                      <img src={EPTImage} alt="epdimage" className="epd-img" />
                      <span className="epd-name">FZ Deliveries</span>
                      <span className="epd-location">Allen, Lagos</span>
                      <span className="epd-order-value">504</span>
                      <span className="eov-tag">Orders</span>
                      <span className="epd-pool-value">267</span>
                      <span className="epv-tag">Pushed to pool</span>
                    </div>
                    <div className="epdr">
                      <span className="ep-price">N340,000</span>
                      <img
                        src={EPTGrapghimg}
                        alt="epgraph"
                        className="ep-graph"
                      />
                      <span className="ep-note">Comapared to Yesterday</span>
                    </div>
                  </div>
                </div>
                <div className="delivered-orders">
                  <span className="doheader">Delivered Orders</span>
                  <table>
                    <RProgressBars day="Today" value={90} />
                    <RProgressBars day="Yesterday" value={60} />
                    <RProgressBars day="01 Mar 2021" value={70} />
                    <RProgressBars day="02 Mar 2021" value={40} />
                    <RProgressBars day="03 Mae 2021" value={80} />
                    <tr>
                      <td></td>
                      <td className="do-progress-scale">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                        <span>150</span>
                      </td>
                    </tr>
                  </table>
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
