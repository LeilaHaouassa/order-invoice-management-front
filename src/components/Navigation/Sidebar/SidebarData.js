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
    path: "/customerSide",
    icon: <FaIcons.FaInbox />,
    iconClosed: <IoIcons.IoIosArrowDown />,
    iconOpened: <IoIcons.IoIosArrowUp />,
    cName: "nav-element",
    subMenu: [
      {
        title: "Orders",
        path: "/customerSide/orders",
        icon: <IoIcons.IoIosPaper />,
        cName: "subnav-element",
      },
      {
        title: "Invoices",
        path: "/customerSide/invoices",
        icon: <IoIcons.IoIosPaper />,
        cName: "subnav-element",
      }
    ],
  },
  {
    title: "SupplierServices",
    path: "/supplierSide",
    icon: <FaIcons.FaInbox />,
    iconClosed: <IoIcons.IoIosArrowDown />,
    iconOpened: <IoIcons.IoIosArrowUp />,
    cName: "nav-element",
    subMenu: [
        {
          title: "Orders",
          path: "/supplierSide/orders",
          icon: <IoIcons.IoIosPaper />,
          cName: "subnav-element",
        },
        {
          title: "Invoices",
          path: "/supplierSide/invoices",
          icon: <IoIcons.IoIosPaper />,
          cName: "subnav-element",
        }
      ],
  },
  {
    title: "Clients",
    path: "/clients",
    icon: <BsIcons.BsPeopleFill />,
    cName: "nav-element",
  },
  {
    title: "Fournisseurs",
    path: "/fournisseurs",
    icon: <BsIcons.BsPeopleFill />,
    cName: "nav-element",
  },
  {
    title: "Produits",
    path: "/produits",
    icon: <RiIcons.RiShoppingCart2Fill />,
    cName: "nav-element",
  },
];
