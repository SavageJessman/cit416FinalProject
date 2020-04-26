/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Movie from "@material-ui/icons/Movie";
import Home from "@material-ui/icons/Home";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import MoviesPage from "views/Movies/Movies.js";
import HomePage from "views/Home/Home.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import RegistrationPage from "components/Register.js";
import LoginPage from "components/Login.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
 

  {
    path: "/register",
    name: "Registration",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: RegistrationPage,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: LoginPage,
    layout: "/admin"
  },


  {
    path: "/home",
    name: "Home",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Home,
    component: HomePage,
    layout: "/admin"
  },
   {
    path: "/movies",
    name: "Movies",
    rtlName: "لوحة القيادة",
    icon: Movie,
    component: MoviesPage,
    layout: "/admin"
  }

 
];

export default dashboardRoutes;
