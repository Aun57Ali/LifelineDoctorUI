import Login from "views/Login";
import Forgot from "views/Forgot";
import Notification from "views/Notification";
import Prescription from "views/Prescription";
import Medicine from "views/Medicine";
import Patients from "views/Patients";

var routes = [
  {
    path: "/Notification",
    name: "Notification",    
    icon: "tim-icons icon-bell-55",
    component: <Notification />,
    layout: "/admin",
  },
  {
    path: "/Prescription",
    name: "Prescription",    
    icon: "tim-icons icon-notes",
    component: <Prescription />,
    layout: "/admin",
  },
  {
    path: "/Medicine",
    name: "Medicine",    
    icon: "tim-icons icon-simple-add",
    component: <Medicine />,
    layout: "/admin",
  },
  {
    path: "/Patients",
    name: "Patients",    
    icon: "tim-icons icon-bullet-list-67",
    component: <Patients />,
    layout: "/admin",
  },
  {
    path: "/Login",
    name: "Login",    
    icon: "tim-icons icon-bullet-list-67",
    component: <Login />,
    layout: "/admin",
  },
  {
    path: "/Forgot",
    name: "Forgot",    
    icon: "tim-icons icon-bullet-list-67",
    component: <Forgot />,
    layout: "/admin",
  },
];
export default routes;
