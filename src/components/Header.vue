<script setup>
import { menus } from "../constants/headMenu.js";
</script>
<template>
	<div
		class="fixed w-[270px] h-[100vh] bg-[#151515] border-r-[1px] border-zinc-600">
		<div class="text-2xl text-center p-5">FarruxDEV</div>
		<nav class="text-white flex items-center">
			<ul class="w-[80%] pt-10 mx-auto h-[80vh]">
				<router-link
					v-for="menu in menus"
					:to="menu.path"
					class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-4 text-center mr-2 mb-2 block mt-5 w-[100%] duration-500">
					{{ menu.title }}
				</router-link>
			</ul>
		</nav>
	</div>
</template>
<style>
.router-link-active {
	background: rgba(101, 101, 255, 0.3);
}
</style>
