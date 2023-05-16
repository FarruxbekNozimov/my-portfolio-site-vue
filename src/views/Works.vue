<script setup>
import { works } from "../constants/works";
</script>
<template>
	<div class="flex flex-wrap justify-center gap-5">
		<a
			_target="_blank"
			v-for="work in works"
			:href="work.path"
			class="min-h-[350px] max-w-sm p-3 bg-cyan-500 dark:bg-opacity-30 backdrop-blur-lg rounded-xl drop-shadow-md text-center border-2 dark:border-slate-900">
			<img :src="`/src/assets/img/${work.img}`" class="rounded-2xl" alt="" />
			<h2
				class="text-xl font-mono text-center p-4 dark:bg-cyan-400 bg-cyan-700 text-white dark:bg-opacity-50 backdrop-blur-lg rounded-lg border border-cyan-500 shadow-lg drop-shadow-lg my-5">
				{{ work.title }}
			</h2>

			<div class="flex gap-5">
				<div
					class="w-full border-2 border-blue-600 rounded-lg px-3 py-2 cursor-pointer bg-blue-600 hover:bg-blue-800 text-blue-200 duration-150 flex items-center justify-center gap-1">
					<i class="bx bxl-netlify text-xl"></i>
					Live preview
				</div>
				<div
					class="w-full border-2 border-purple-600 rounded-lg px-3 py-2 cursor-pointer bg-purple-600 hover:bg-purple-800 text-purple-200 duration-150 flex items-center justify-center gap-1">
					<i class="bx bxl-github bx-tada text-xl"></i>
					View Demo
				</div>
			</div>
		</a>
	</div>
</template>
<style></style>
