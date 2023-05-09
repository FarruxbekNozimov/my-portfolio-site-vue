<script setup>
import Header from "./components/Header.vue";
</script>
<template lang="">
	<div class="bg-[#222] text-white h-[100vh] flex">
		<Header />
		<div class="p-5 ml-[270px] w-[100%] h-[100%] mx-auto">
			<router-view></router-view>
		</div>
	</div>
</template>
<style lang=""></style>
