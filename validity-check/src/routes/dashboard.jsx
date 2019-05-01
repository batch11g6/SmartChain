import Home from "views/Home/Home.jsx";
import Reports from "views/Reports/Reports.jsx";
import About from "views/About/About.jsx";


var dashRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "nc-icon nc-bank",
    component: Home
  },
  {
    path: "/reports",
    name: "Reports",
    icon: "nc-icon nc-sound-wave",
    component: Reports
  },
  {
    path: "/about",
    name: "About",
    icon: "nc-icon nc-single-02",
    component: About
  },
  
  { redirect: true, path: "/", pathTo: "/home", name: "Home" }
];
export default dashRoutes;
