<script setup>
import Header from "./components/Header.vue";
</script>
<template>
	<div>
		<Header />
		<div class="w-full px-10 py-10">
			<router-view></router-view>
		</div>
	</div>
</template>
<style></style>
