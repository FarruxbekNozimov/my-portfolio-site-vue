<script setup>
import Header from "./components/Header.vue";
import { ref, onMounted } from "vue";
const mode = ref(localStorage.getItem("mode") || true);

onMounted(() => {
	const theme = document.getElementById("theme");
});
</script>
<template>
	<div id="theme" class="dark">
		<Header />
		<div
			class="dark:bg-slate-900 h-[89vh] overflow-y-scroll w-full px-10 py-10">
			<router-view></router-view>
		</div>
	</div>
</template>
<style></style>
