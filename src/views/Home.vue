<script setup>
import { aboutMe } from "../constants/aboutMe";
import Button from "../UI/Button.vue";
</script>

<template>
	<div>
		<div class="flex justify-evenly items-center">
			<div class="w-[40%]">
				<h2 class="text-5xl my-5">
					Hi, I am {{ aboutMe.name }}
					<span class="text-green-600 typing-demo text-3xl">{{
						aboutMe.job
					}}</span>
				</h2>
				<p class="text-lg">
					{{ aboutMe.description }}
				</p>
				<Button />
			</div>
			<div class="w-[40%]">
				<img
					src="https://st4.depositphotos.com/3881799/27242/i/600/depositphotos_272424264-stock-photo-hacker-working-laptop-dark.jpg"
					alt=""
					class="mx-auto rounded-2xl border-2 border-green-600 h-[400px] w-[400px] object-cover" />
			</div>
		</div>
	</div>
</template>
<style scoped>
.typing-demo {
	width: 22ch;
	animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
	white-space: nowrap;
	overflow: hidden;
	border-right: 3px solid;
	font-family: monospace;
}

@keyframes typing {
	from {
		width: 0;
	}
}

@keyframes blink {
	50% {
		border-color: transparent;
	}
}
</style>
