//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import navIcons from "./icons";
const {
  faClipboard,
  faCab,
  faAreaChart,
  faCalendar,
  faPen,
  faReceipt,
  faWrench,
  faUsers,
} = navIcons;

export const navLinks = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: faAreaChart,
  },
  {
    name: "Book Trip",
    path: "/createbooking",
    icon: faPen,
  },
  { name: "Calendar", path: "/calendar", icon: faCalendar },
  {
    name: "Bookings",
    path: "/bookings",
    icon: faClipboard,
  },
  {
    name: "Return",
    path: "/return",
    icon: faReceipt,
  },
  {
    name: "Maintenance",
    path: "/maintenance",
    icon: faWrench,
    sublinks: [
      {
        name: "Record Maintenance",
        path: "/maintenance/register",
        icon: faPen,
      },
      { name: "View Maintenance", path: "/maintenance", icon: faWrench },
    ],
  },
  {
    name: "Vehicles",
    path: "/vehicles",
    icon: faCab,
  },
  {
    name: "Users",
    path: "/users",
    icon: faUsers,
  },
  {
    name: "My Bookings",
    path: "/bookings",
    icon: faClipboard,
  },
];
