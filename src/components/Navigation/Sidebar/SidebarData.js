import React from "react";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as ImIcons from "react-icons/im";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <ImIcons.ImHome />,
    cName: "nav-element",
  },
  {
    title: "CustomerServices",
    path: "#",
    icon: <FaIcons.FaInbox />,
    iconClosed: <IoIcons.IoIosArrowDown />,
    iconOpened: <IoIcons.IoIosArrowUp />,
    cName: "nav-element",
    subMenu: [
      {
        title: "Orders",
        path: "/app/customerSide/orders",
        icon: <IoIcons.IoIosPaper />,
        cName: "subnav-element",
      },
      {
        title: "Invoices",
        path: "/app/customerSide/invoices",
        icon: <IoIcons.IoIosPaper />,
        cName: "subnav-element",
      }
    ],
  },
  {
    title: "SupplierServices",
    path: "#",
    icon: <FaIcons.FaInbox />,
    iconClosed: <IoIcons.IoIosArrowDown />,
    iconOpened: <IoIcons.IoIosArrowUp />,
    cName: "nav-element",
    subMenu: [
        {
          title: "Orders",
          path: "/app/supplierSide/orders",
          icon: <IoIcons.IoIosPaper />,
          cName: "subnav-element",
        },
        {
          title: "Invoices",
          path: "/app/supplierSide/invoices",
          icon: <IoIcons.IoIosPaper />,
          cName: "subnav-element",
        }
      ],
  },
  {
    title: "Entreprises",
    path: "/app/parties",
    icon: <BsIcons.BsPeopleFill />,
    cName: "nav-element",
  },
  {
    title: "Produits",
    path: "/app/products",
    icon: <RiIcons.RiShoppingCart2Fill />,
    cName: "nav-element",
  },
];
