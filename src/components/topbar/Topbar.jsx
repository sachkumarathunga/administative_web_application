import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">zensmate_IOT</span>
        </div>
        <div className="topRight">
        <img src="https://thumbs.dreamstime.com/b/young-positive-handsome-business-man-official-costume-suit-tie-standing-smiling-over-light-grey-wall-background-stylish-170441179.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
    

  );
}
