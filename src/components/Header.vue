<script setup>
import { menus } from "../constants/headMenu.js";
</script>
<template>
	<div>
		<!-- component -->
		<header
			class="dark:bg-slate-950 header sticky top-0 flex items-center justify-between px-8 h-[70px] dark:text-white border-b border-b-cyan-500">
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
						class="px-6 py-3 mx-2 border-b-2 border-cyan-500 border-opacity-0 hover:border-opacity-100 hover:text-cyan-400 duration-200 cursor-pointer active">
						<a>{{ nav.title }}</a>
					</router-link>
				</ul>
			</nav>

			<!-- buttons --->
			<div class="w-3/12 flex justify-end">
				<a href="">
					<svg
						class="h-8 p-1 hover:text-green-500 duration-200 svg-inline--fa fa-search fa-w-16 fa-9x"
						aria-hidden="true"
						focusable="false"
						data-prefix="far"
						data-icon="search"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512">
						<path
							fill="currentColor"
							d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
							class=""></path>
					</svg>
				</a>
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
	color: black;
}
</style>
