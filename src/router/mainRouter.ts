
import IconMessage from "../components/icons/IconMessage.vue";
import BlackHouse from "../components/icons/BlackHouse.vue";
import DashboardIcon from "../components/icons/IconDashboard.vue";
import IconReport from "../components/icons/IconReport.vue";
import IconTerrain from "@/components/icons/IconTerrain.vue";
import IconSetting from "@/components/icons/IconSetting.vue";

const routes = [{
    path: "/dashboard",
    name: "Dashboard ",
    icon: DashboardIcon,
    layout: "/admin",
},{
    path: "/customers",
    name: "Chat",
    icon: IconMessage,
    layout: "/admin",
},{
    path: "/property",
    name: "Property",
    icon: BlackHouse,
    layout: "/admin",
},
{
    path: "/terrain",
    name: "Terrain",
    icon: IconTerrain,
    layout: "/admin",
},
{
    path: "/reports",
    name: "Reports",
    icon: IconReport,
    layout: "/admin",
},
{
    path: "/settings",
    name: "Settings",
    icon: IconSetting,
    layout: "/admin",
},
];
export default routes
