import React, { useState , useEffect } from "react";
import Aux from "../../hoc/Aux";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const SidebarMenu = ({ item , index , showSidebar }) => {
  const [dropdown, setdropdown] = useState(false);

  const showSubNav = () => setdropdown(!dropdown);

  const showSubMenuIcon = () => {
    return item.subMenu && dropdown
      ? item.iconOpened
      : item.subMenu
      ? item.iconClosed 
      : null;
  };

  //For debugging purposes 
  //DELETE LATER
  useEffect(() => {
    console.log('useEffect ran. dropdown is: ', dropdown);
  }, [dropdown]);

  return (
    <Aux>
      <li key={index} className={item.cName} onClick={item.subMenu ? null : showSidebar}>
        <Link to={item.path} onClick={item.subMenu && showSubNav }>
          <div>
            {item.icon}
            <span>{item.title}</span>
          </div>
          <div>{showSubMenuIcon()}</div>
        </Link>

        {dropdown &&
          item.subMenu.map((item, index) => {
            return (
              <Link
                to={item.path}
                key={index}
                className={item.cName}
                onClick={showSubNav && showSidebar}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            );
          })}
      </li>
    </Aux>
  );
};

export default SidebarMenu;
