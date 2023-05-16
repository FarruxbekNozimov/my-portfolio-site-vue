<script setup></script>
<template>
	<div>
		<section class="bg-white dark:bg-slate-900">
			<div class="px-4 mx-auto max-w-screen-md">
				<h2
					class="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-cyan-500">
					Contact
				</h2>
				<form action="#" class="space-y-8">
					<div>
						<label
							for="email"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>Your email</label
						>
						<input
							type="email"
							id="email"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 dark:shadow-sm-light"
							placeholder="name@flowbite.com"
							required />
					</div>

					<div class="sm:col-span-2">
						<label
							for="message"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
							>Your message</label
						>
						<textarea
							id="message"
							rows="6"
							class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
							placeholder="Write your message here..."></textarea>
					</div>
					<div class="text-center w-full">
						<button
							type="submit"
							class="py-3 px-5 text-md font-medium text-center text-white rounded-lg bg-cyan-700 sm:w-fit hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
							Send message
						</button>
					</div>
				</form>
			</div>
		</section>
	</div>
</template>
