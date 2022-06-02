import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  Commute,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,

} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="container">
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Dash Board
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
             Trip Earning  Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Accident Count
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Trip Cash in vs Cash out
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Accident vs Trip
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Monitoring Dash Board</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                < PermIdentity className="sidebarIcon" />
                 Customer Monitoring
             
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                
                Employee Monitoring
              </li>
            </Link>
            <li className="sidebarListItem">
              < AttachMoney  className="sidebarIcon" />
              Payments Monitoring
              
            </li>
            <li className="sidebarListItem">
              < Commute className="sidebarIcon" />
              Trips Monitoring
             
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Customer Care</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Send Notifications
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              customer service
            </li>
            
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Profile
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
            Settings
            </li>
            
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}
