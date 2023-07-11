import { createRouter, createWebHistory } from "vue-router";

const routes = [
  //================= Login ================//
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView"),
  },
  //================= Server Error ================//
  {
    path: "/server-error",
    name: "serverError",
    component: () => import("@/views/ServerError"),
  },
  //================= Not Found ================//
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: () => import("@/views/NotFound"),
  },
  {
    path: "/",
    name: "dashborad",
    component: () => import("@/views/DashboardView"),
    children: [
      {
        path: "/customers",
        name: "customers",
        component: () => import("@/views/AdminView/CustomersView"),
      },
      //   {
      //     path: "/facts",
      //     name: "facts",
      //     component: () => import("@/views/AdminView/FactsView"),
      //   },
      //   {
      //     path: "/developers",
      //     name: "developers",
      //     component: () => import("@/views/AdminView/DevelopersView"),
      //   },
      //   {
      //     path: "/choose-us",
      //     name: "choose-us",
      //     component: () => import("@/views/AdminView/ChooseUsView"),
      //   },
      //   //================= Tables ================//
      //   {
      //     path: "/components/table/basic",
      //     name: "basicTable",
      //     component: () =>
      //       import("@/views/AdminView/components/tables/basicTable"),
      //   },
      //   {
      //     path: "/components/table/defColorTable",
      //     name: "defColorTable",
      //     component: () =>
      //       import("@/views/AdminView/components/tables/defColorTable"),
      //   },
      //   {
      //     path: "/components/table/borderedTable",
      //     name: "borderedTable",
      //     component: () =>
      //       import("@/views/AdminView/components/tables/borderedTable"),
      //   },
      //   //================= Auth ================//
      //   {
      //     path: "/components/auth/sign-in",
      //     name: "sign-in",
      //     component: () =>
      //       import("@/views/AdminView/components/authentication/signIn"),
      //   },
      //   {
      //     path: "/components/auth/sign-up",
      //     name: "sign-up",
      //     component: () =>
      //       import("@/views/AdminView/components/authentication/signUp"),
      //   },
      //   {
      //     path: "/components/auth/reset-password",
      //     name: "reset-password",
      //     component: () =>
      //       import("@/views/AdminView/components/authentication/resetPassword"),
      //   },
      //   {
      //     path: "/components/auth/two-step-verification",
      //     name: "two-step-verification",
      //     component: () =>
      //       import("@/views/AdminView/components/authentication/stepVerfication"),
      //   },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ["/login", "/server-error"];
//   const authRequired = !publicPages.includes(to.path);
//   const isAuthenticated = window.$cookies.get("token");
//   if (authRequired && !isAuthenticated) {
//     next("/login");
//   } else {
//     next();
//   }
// });

export default router;
