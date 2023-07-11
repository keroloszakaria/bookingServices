const asideLinks = [
  {
    name: "my space",
    icon: "fa-briefcase",
    to: "/",
  },
  {
    name: "calender",
    icon: "fa-calendar-days",
    to: "/calender",
  },
  {
    name: "dashboard",
    icon: "fa-grid-horizontal",
    to: "/dashboard",
  },
  {
    name: "customers",
    icon: "fa-address-book",
    to: "/customers",
  },
  {
    name: "reports",
    icon: "fa-chart-line",
    to: "/reports",
  },
  {
    name: "marketing",
    icon: "fa-bullhorn",
    to: "/marketing",
  },
  {
    name: "marketplace",
    icon: "fa-link",
    to: "/marketplace",
  },
  {
    name: "settings",
    icon: "fa-cog",
    to: "/settings",
  },
];
const homeDropdown = {
  name: "Home Page",
  icon: "fa-home",
  list: [
    {
      name: "Home Silder",
      to: "/",
    },
    {
      name: "Features",
      to: "/",
    },
    {
      name: "Choose us",
      to: "/",
    },
    {
      name: "About",
      to: "/",
    },
    {
      name: "facts",
      to: "/",
    },
  ],
};
const tableDropdown = {
  name: "Tables",
  icon: "fa-database",
  list: [
    {
      name: "Basic Tables",
      to: "/components/table/basic",
    },
    {
      name: "different Color Tables",
      to: "/components/table/defColorTable",
    },
    {
      name: "Border Tables",
      to: "/components/table/borderedTable",
    },
  ],
};

const dashboardDropdown = {
  name: "Dashboards",
  icon: "fa-gauge-max",
  list: [
    {
      name: "Sign In",
      to: "/components/auth/sign-in",
    },
  ],
};
const authDropdown = {
  name: "Authentication",
  icon: "fa-user",
  list: [
    {
      name: "Sign In",
      to: "/components/auth/sign-in",
    },
    {
      name: "Sign Up",
      to: "/components/auth/sign-up",
    },
    {
      name: "Reset Password",
      to: "/components/auth/reset-password",
    },
    {
      name: "Two Step Verification",
      to: "/components/auth/two-step-verification",
    },
  ],
};

export {
  asideLinks,
  homeDropdown,
  tableDropdown,
  dashboardDropdown,
  authDropdown,
};
