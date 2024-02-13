import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/AllCourse",
      name: "AllCourse",
      component: () => import("../views/AllCourse.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/signup.vue"),
    },
    {
      path: "/CourseDetail/:id",
      name: "CourseDetail",
      component: () => import("../views/CourseDetail.vue"),
      props: true,
    },
    {
      path: "/success-url",
      name: "success-url",
      component: () => import("../views/success.vue"),
    },
    {
      path: "/cancel-url",
      name: "cancel-url",
      component: () => import("../views/cancel.vue"),
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(getAuth(), (user) => {
      removeListener();
      resolve(user);
    });
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      console.log('You dont have access!')
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
