
import BlackUsers from "../components/icons/BlackUsers.vue";
import BlackHouse from "../components/icons/BlackHouse.vue";
import DashboardIcon from "../components/icons/IconDashboard.vue";
import IconReport from "../components/icons/IconReport.vue";

const routes = [{
    path: "/dashboard",
    name: "Dashboard ",
    icon: DashboardIcon,
    layout: "/admin",
},{
    path: "/customers",
    name: "Customers",
    icon: BlackUsers,
    layout: "/admin",
},{
    path: "/property",
    name: "Property",
    icon: BlackHouse,
    layout: "/admin",
},{
    path: "/reports",
    name: "Reports",
    icon: IconReport,
    layout: "/admin",
}];
export default routes
