<script setup>
import { works } from "../constants/works";
</script>
<template>
	<div class="flex flex-wrap justify-center gap-5">
		<div
			v-for="work in works"
			class="cursor-pointer hover:scale-[1.02] min-h-[350px] max-w-sm p-3 bg-cyan-500 dark:bg-opacity-30 backdrop-blur-lg rounded-xl drop-shadow-md text-center border-2 dark:border-slate-900 duration-300">
			<img
				:src="`https://upcdn.io/12a1yEX/raw/portfolio/${work.img}`"
				class="rounded-xl"
				alt="" />
			<h2
				class="text-xl font-mono text-center p-4 dark:bg-cyan-400 bg-cyan-700 text-white dark:bg-opacity-50 backdrop-blur-lg rounded-lg border border-cyan-500 shadow-lg drop-shadow-lg my-5">
				{{ work.title }}
			</h2>

			<div class="flex gap-5">
				<a
					target="_blank"
					:href="work.path"
					class="w-full border-2 border-blue-600 rounded-lg px-3 py-2 cursor-pointer bg-blue-600 hover:bg-blue-800 text-blue-200 duration-150 flex items-center justify-center gap-1">
					<i class="bx bxl-netlify bx-tada text-xl"></i>
					Live preview
				</a>
				<a
					target="_blank"
					:href="work.path"
					class="w-full border-2 border-purple-600 rounded-lg px-3 py-2 cursor-pointer bg-purple-600 hover:bg-purple-800 text-purple-200 duration-150 flex items-center justify-center gap-1">
					<i class="bx bxl-github bx-tada text-xl"></i>
					View Demo
				</a>
			</div>
		</div>
	</div>
</template>
<style></style>
