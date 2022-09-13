import React, { useState } from "react";
import { Link } from "react-router-dom";
import Aux from "../../hoc/Aux";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import SidebarMenu from "./SidebarMenu";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  //SIDEBAR WONT RETURN AFTER CLICKING OUTSIDE OF THE MENU
  return (
    <Aux>
      <IconContext.Provider value={{ color: "#ffff" }}>
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" >
            <li className="navbar-toggle" >
              <Link to="#" className="menu-bars">
                <RiIcons.RiArrowLeftSLine onClick={showSidebar} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return <SidebarMenu item={item} key={index} showSidebar={showSidebar}/>;
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </Aux>
  );
}

export default Sidebar;
