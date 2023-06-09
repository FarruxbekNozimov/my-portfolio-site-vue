import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Home",
			component: () => import("../views/Home.vue"),
		},
		{
			path: "/works",
			name: "Works",
			component: () => import("../views/Works.vue"),
		},
		{
			path: "/blog",
			name: "Blog",
			component: () => import("../views/Blog.vue"),
		},
		{
			path: "/contact",
			name: "Contact",
			component: () => import("../views/Contact.vue"),
		},
	],
});

export default router;
