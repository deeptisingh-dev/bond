import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import AuthLayout from "@/pages/Pages/AuthLayout.vue";

const Dashboard = () =>
  import(/* webpackChunkName: "dashboard" */ "@/pages/Dashboard.vue");

const Calendar = () =>
  import(/* webpackChunkName: "dashboard" */ "@/pages/Calendar.vue");

const Widgets = () =>
  import(/* webpackChunkName: "dashboard" */ "@/pages/Widgets.vue");

const Charts = () =>
  import(/* webpackChunkName: "dashboard" */ "@/pages/Charts.vue");

// Components pages
const Buttons = () =>
  import(/* webpackChunkName: "components" */ "@/pages/Components/Buttons.vue");
const GridSystem = () =>
  import(
    /* webpackChunkName: "components" */ "@/pages/Components/GridSystem.vue"
  );
const Panels = () =>
  import(/* webpackChunkName: "components" */ "@/pages/Components/Panels.vue");
const InstrumentDetails = () =>
  import(/* webpackChunkName: "components" */ "@/pages/Components/InstrumentDetails.vue");
const SweetAlert = () =>
  import(
    /* webpackChunkName: "components" */ "@/pages/Components/SweetAlert.vue"
  );
const Notifications = () =>
  import(/* webpackChunkName: "components" */ "@/pages/Notifications.vue");
const Icons = () =>
  import(/* webpackChunkName: "components" */ "@/pages/Icons.vue");
const Typography = () =>
  import(/* webpackChunkName: "components" */ "@/pages/Typography.vue");

// Forms pages
const RegularForms = () => import("@/pages/Forms/RegularForms.vue");
const ExtendedForms = () => import("@/pages/Forms/ExtendedForms.vue");
const ValidationForms = () => import("@/pages/Forms/ValidationForms.vue");
const Wizard = () => import("@/pages/Forms/Wizard.vue");

// Maps pages
const GoogleMaps = () =>
  import(/* webpackChunkName: "extra" */ "@/pages/Maps/GoogleMaps.vue");
const FullScreenMap = () =>
  import(/* webpackChunkName: "extra" */ "@/pages/Maps/FullScreenMap.vue");
const VectorMaps = () =>
  import(/* webpackChunkName: "extra" */ "@/pages/Maps/VectorMaps.vue");

// TableList pages
const RegularTables = () =>
  import(/* webpackChunkName: "tables" */ "@/pages/Tables/RegularTables.vue");
const ISINPricesTables = () =>
  import(/* webpackChunkName: "tables" */ "@/pages/Tables/ISINPricesTables.vue");
const ExtendedTables = () =>
  import(/* webpackChunkName: "tables" */ "@/pages/Tables/ExtendedTables.vue");
const PaginatedTables = () =>
  import(/* webpackChunkName: "tables" */ "@/pages/Tables/PaginatedTables.vue");

// Pages
const UserProfile = () =>
  import(/* webpackChunkName: "pages" */ "@/pages/Pages/UserProfile.vue");
const Pricing = () =>
  import(/* webpackChunkName: "pages" */ "@/pages/Pages/Pricing.vue");
const TimeLine = () =>
  import(/* webpackChunkName: "pages" */ "@/pages/Pages/TimeLinePage.vue");
const Login = () =>
  import(/* webpackChunkName: "pages" */ "@/pages/Pages/Login.vue");
const Register = () =>
  import(/* webpackChunkName: "pages" */ "@/pages/Pages/Register.vue");
const RTL = () =>
  import(/* webpackChunkName: "pages" */ "@/pages/Pages/RTLPage.vue");
const Lock = () =>
  import(/* webpackChunkName: "pages" */ "@/pages/Pages/Lock.vue");

let pagesMenu = {
  path: "/",
  component: DashboardLayout,
  name: "Pages",
  children: [
    {
      path: "rtl",
      name: "rtl",
      component: RTL
    },
    {
      path: "timeline",
      name: "timeline",
      component: TimeLine
    }
  ]
};

let authPages = {
  path: "/",
  component: AuthLayout,
  name: "Authentication",
  children: [
    {
      path: "pricing",
      name: "pricing",
      component: Pricing
    },
    {
      path: "login",
      name: "login",
      component: Login
    },
    {
      path: "register",
      name: "register",
      component: Register
    },
    {
      path: "lock",
      name: "lock",
      component: Lock
    }
  ]
};

let componentsMenu = {
  path: "/components",
  component: DashboardLayout,
  redirect: "/components/buttons",
  name: "Components",
  children: [
    {
      path: "buttons",
      name: "Buttons",
      components: { default: Buttons }
    },
    {
      path: "grid-system",
      name: "Grid System",
      components: { default: GridSystem }
    },
    {
      path: "panels",
      name: "Panels",
      component: Panels
    },
    {
      path: "instrumentDetails",
      name: "InstrumentDetails",
      component: InstrumentDetails
    },
    {
      path: "sweet-alert",
      name: "Sweet Alert",
      components: { default: SweetAlert }
    },
    {
      path: "notifications",
      name: "Notifications",
      components: { default: Notifications }
    },
    {
      path: "icons",
      name: "Icons",
      components: { default: Icons }
    },
    {
      path: "typography",
      name: "Typography",
      components: { default: Typography }
    }
  ]
};

let formsMenu = {
  path: "/forms",
  component: DashboardLayout,
  redirect: "/forms/regular",
  name: "Forms",
  children: [
    {
      path: "regular",
      name: "Regular Forms",
      components: { default: RegularForms }
    },
    {
      path: "extended",
      name: "Extended Forms",
      components: { default: ExtendedForms }
    },
    {
      path: "validation",
      name: "Validation Forms",
      components: { default: ValidationForms }
    },
    {
      path: "wizard",
      name: "Wizard",
      components: { default: Wizard }
    }
  ]
};

let tablesMenu = {
  path: "/table-list",
  component: DashboardLayout,
  redirect: "/table-list/regular",
  name: "Tables",
  children: [
    {
      path: "regular",
      name: "Regular Tables",
      components: { default: RegularTables }
    },
    {
      path: "isinpricestables",
      name: "ISIN Prices Tables",
      components: { default: ISINPricesTables }
    },
    {
      path: "extended",
      name: "Extended Tables",
      components: { default: ExtendedTables }
    },
    {
      path: "paginated",
      name: "Paginated Tables",
      components: { default: PaginatedTables }
    }
  ]
};

let mapsMenu = {
  path: "/maps",
  component: DashboardLayout,
  name: "Maps",
  redirect: "/maps/google",
  children: [
    {
      path: "google",
      name: "Google Maps",
      components: { default: GoogleMaps }
    },
    {
      path: "full-screen",
      name: "Full Screen Map",
      meta: {
        hideContent: true,
        hideFooter: true
      },
      components: { default: FullScreenMap }
    },
    {
      path: "vector-map",
      name: "Vector Map",
      components: { default: VectorMaps }
    }
  ]
};

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    name: "Home"
  },
  pagesMenu,
  authPages,
  componentsMenu,
  formsMenu,
  tablesMenu,
  mapsMenu,
  {
    path: "/",
    component: DashboardLayout,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "Calendar",
        name: "Calendar",
        component: Calendar
      },
      {
        path: "Widgets",
        name: "Widgets",
        components: { default: Widgets }
      },
      {
        path: "charts",
        name: "charts",
        component: Charts
      }
    ]
  }
];

export default routes;
