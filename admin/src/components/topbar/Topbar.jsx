import React from "react";
import "./topbar.css";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { userClear } from "../../redux/userRedux";
import { usersClear } from "../../redux/usersRedux";
import { productsClear } from "../../redux/productRedux";
import { ordersClear } from "../../redux/orderRedux";
// import { logout } from "../../redux/apiCalls";

export default function Topbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  const handleLogout = () => {
    dispatch(userClear());
    dispatch(usersClear());
    dispatch(productsClear());
    dispatch(ordersClear());
    localStorage.removeItem("persist:root");
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/">
            <span className="logo">MythUX</span>
          </Link>
        </div>
        <div className="topRight">
          {user ? (
            <div className="logout">
              <div className="topbarUsername">
                {user.username.toUpperCase()}
              </div>
              <div className="topbarLogout" onClick={handleLogout}>
                LOGOUT
              </div>
            </div>
          ) : (
            <div>
              <Redirect to="/login" />
            </div>
          )}
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div> */}
          {/* <img src={} alt="" className="topAvatar" /> */}
        </div>
      </div>
    </div>
  );
}
