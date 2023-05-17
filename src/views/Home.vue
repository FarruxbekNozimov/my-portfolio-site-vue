<script setup>
import { aboutMe } from "../constants/aboutMe";
import Button from "../UI/Button.vue";
import { skills } from "../constants/skill";
</script>

<template>
	<div>
		<main>
			<div class="flex justify-evenly items-center">
				<div class="w-[40%]">
					<h2 class="text-5xl my-5 dark:text-slate-200">
						Hi, I am {{ aboutMe.name }}
						<span
							class="dark:text-cyan-500 text-cyan-600 typing-demo text-3xl"
							>{{ aboutMe.job }}</span
						>
					</h2>
					<p class="dark:text-slate-400 text-lg">
						{{ aboutMe.description }}
					</p>
					<Button class="mt-5" />
				</div>
				<div class="w-[40%]">
					<img
						src="https://st4.depositphotos.com/3881799/27242/i/600/depositphotos_272424264-stock-photo-hacker-working-laptop-dark.jpg"
						alt=""
						class="mx-auto rounded-full border-2 border-cyan-600 h-[400px] w-[400px] object-cover" />
				</div>
			</div>
			<h2
				class="dark:text-cyan-500 text-cyan-900 text-4xl uppercase font-semibold text-center p-5 m-5 py-10">
				My Skills
			</h2>
			<div class="flex flex-wrap justify-center gap-10">
				<div v-for="(skill, key) in skills" class="w-[45%]">
					<h2
						class="text-center uppercase text-2xl dark:text-cyan-300 text-cyan-950">
						{{ key }}
					</h2>
					<div v-for="el in skill" class="mt-8">
						<div class="flex justify-between mb-1">
							<span
								class="text-base font-medium text-cyan-950 dark:text-white flex items-center justify-center gap-2 px-2">
								<i class="text-xl" :class="el.icon"></i>
								{{ el.name }}</span
							>
							<span class="text-sm font-medium text-blue-700 dark:text-white"
								>{{ el.number }}%</span
							>
						</div>
						<div class="w-full bg-cyan-950 rounded-full h-2.5 dark:bg-gray-700">
							<div
								class="bg-cyan-600 h-2.5 rounded-full"
								:style="`width: ${el.number}%`"></div>
						</div>
					</div>
				</div>
			</div>
		</main>
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
