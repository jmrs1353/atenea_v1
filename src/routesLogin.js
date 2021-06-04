import Buttons from "views/Components/Buttons.js";
import Calendar from "views/Calendar/Calendar.js";
import Charts from "views/Charts/Charts.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import ErrorPage from "views/Pages/ErrorPage.js";
import ExtendedForms from "views/Forms/ExtendedForms.js";
import ExtendedTables from "views/Tables/ExtendedTables.js";
import FullScreenMap from "views/Maps/FullScreenMap.js";
import GoogleMaps from "views/Maps/GoogleMaps.js";
import GridSystem from "views/Components/GridSystem.js";
import Icons from "views/Components/Icons.js";
import LockScreenPage from "views/Pages/LockScreenPage.js";
import LoginPage from "views/Pages/LoginPage.js";
import Notifications from "views/Components/Notifications.js";
import Panels from "views/Components/Panels.js";
import PricingPage from "views/Pages/PricingPage.js";
import RTLSupport from "views/Pages/RTLSupport.js";
import ReactTables from "views/Tables/ReactTables.js";
import RegisterPage from "views/Pages/RegisterPage.js";
import RegularForms from "views/Forms/RegularForms.js";
import RegularTables from "views/Tables/RegularTables.js";
import SweetAlert from "views/Components/SweetAlert.js";
import TimelinePage from "views/Pages/Timeline.js";
import Typography from "views/Components/Typography.js";
import UserProfile from "views/Pages/UserProfile.js";
import ValidationForms from "views/Forms/ValidationForms.js";
import VectorMap from "views/Maps/VectorMap.js";
import Widgets from "views/Widgets/Widgets.js";
import Wizard from "views/Forms/Wizard.js";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import GridOn from "@material-ui/icons/GridOn";
import Image from "@material-ui/icons/Image";
import Place from "@material-ui/icons/Place";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import DescriptionIcon from '@material-ui/icons/Description';
import TvIcon from '@material-ui/icons/Tv';
import GroupIcon from '@material-ui/icons/Group';
import PollIcon from '@material-ui/icons/Poll';
import TimelineIcon from '@material-ui/icons/Timeline';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';


var loginRoutes = [ {
        path: "/login-page",
        name: "Login Page",
        rtlName: "+çÏ¦Ï¦ÏºÏ¬Ï¦Ï¼+è+ä Ïº+äÏ»Ï«+ê+ä",
        mini: "L",
        rtlMini: "+çÏ¦Ï¦Ïº",
        component: LoginPage,
        layout: "/auth",
      },
       {
        path: "/register-page",
        name: "Register Page",
        rtlName: "+çÏ¦Ï¦ÏºÏ¬Ï¦Ï¼+è+ä Ïº+äÏ»Ï«+ê+ä",
        mini: "L",
        rtlMini: "+çÏ¦Ï¦Ïº",
        component: RegisterPage,
        layout: "/auth",
      }];

export default loginRoutes;
