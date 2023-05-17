<script setup>
import { menus } from "../constants/headMenu.js";
import { ref } from "vue";

const mode = ref(localStorage.getItem("mode") || "dark");

const toggleMode = () => {
	mode.value = mode.value == "dark" ? "light" : "dark";
	localStorage.setItem("mode", mode.value);
};
</script>
<template>
	<div>
		<!-- component -->
		<header
			class="dark:bg-slate-950 bg-teal-300 header sticky top-0 flex items-center justify-between px-8 h-[70px] dark:text-white border-b border-b-cyan-700">
			<!-- logo -->
			<h1 class="w-3/12">
				<a href="/" class="text-2xl font-serif italic"> FarruxDEV </a>
			</h1>

			<!-- navigation -->
			<nav class="nav font-semibold text-lg">
				<ul class="flex items-center">
					<router-link
						v-for="nav in menus"
						:to="nav.path"
						class="px-6 py-3 mx-2 border-b-2 border-cyan-500 border-opacity-0 hover:border-opacity-100 hover:text-cyan-950 dark:hover:text-cyan-400 duration-200 cursor-pointer active">
						<a>{{ nav.title }}</a>
					</router-link>
				</ul>
			</nav>

			<!-- buttons --->
			<div class="w-3/12 flex justify-end">
				<i
					:class="mode == 'dark' ? 'bx-moon' : 'bx-sun'"
					@click="toggleMode"
					class="bx text-3xl cursor-pointer"></i>
			</div>
		</header>
	</div>
</template>
<style>
.router-link-active {
	background: rgb(6 182 212);
	border-radius: 10px;
	color: black;
}
.router-link-active:hover {
	color: black !important;
}
</style>
