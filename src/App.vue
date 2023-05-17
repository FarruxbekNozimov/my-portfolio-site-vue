<script setup>
import Header from "./components/Header.vue";
import { ref, onUpdated } from "vue";

const mode = ref(localStorage.getItem("mode") == "dark" ? "light" : "dark");
</script>
<template>
	<div>
		<main id="theme" :class="mode">
			<Header />
			<div
				class="dark:bg-slate-900 bg-cyan-100 h-[89vh] overflow-y-scroll w-full px-10 py-10">
				<router-view></router-view>
			</div>
		</main>
	</div>
</template>
<style></style>
