<script setup>
import { works } from "../constants/works";
</script>
<template>
	<div class="flex flex-wrap justify-center gap-5">
		<router-link
			v-for="work in works"
			:to="work.path"
			class="card h-[350px] max-w-sm p-3 rounded-tl-2xl rounded-br-2xl bg-green-500 bg-opacity-50 backdrop-blur-lg rounded drop-shadow-lg text-center">
			<img :src="`/src/assets/img/${work.img}`" class="rounded-2xl" alt="" />
			<h2
				class="text-xl font-mono text-center p-4 bg-white bg-opacity-50 backdrop-blur-lg rounded shadow-lg drop-shadow-lg my-5">
				{{ work.title }}
			</h2>

			<!-- Orange Button -->
			<div
				class="border-2 border-blue-600 rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200">
				Save changes
			</div>
		</router-link>
	</div>
</template>
<style></style>
