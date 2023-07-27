import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/a",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Members",
    path: "/abc",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
    {
      title: "Tasks",
    path: "/task",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  },
  {
    title: "Assign task",
    path: "/new",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text"
  },
  {
    title: "Chart",
    path: "/chart",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  },
  {
    title: "Messages",
    path: "/chat",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text"
  },
  {
    title: "Redux",
    path: "/redux",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text"
  },
{
  title: "Workflow",
  path: "/work",
  icon: <IoIcons.IoIosPaper />,
  cName: "nav-text"
},
{
  title: "Contact",
  path: "/contact",
  icon: <IoIcons.IoIosPaper />,
  cName: "nav-text"
},
{
  title: "Feedback",
  path: "/feed",
  icon: <IoIcons.IoIosPaper />,
  cName: "nav-text"
},
  {
    title: "LOGOUT",
    path: "/turn",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text"
  }
];
