<script setup lang="ts">
	const links = [
		{ icon: 'ig', link: 'https://www.instagram.com' },
		{ icon: 'fb', link: 'https://www.facebook.com' },
	];
</script>

<template>
	<footer
		class="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-gray-900 mt-[100px]"
	>
		<div class="container px-6 py-6">
			<h1 class="text-lg font-bold text-center lg:text-2xl font-['Syne']">
				Join 31,000+ other and never miss <br />
				out on new weekly books recommendations.
			</h1>
			<form
				class="flex flex-col w-[100%] justify-center mx-auto mt-6 space-y-3 md:space-x-2 md:space-y-0 md:flex-row"
				action="submit"
			>
				<input
					id="email"
					type="email"
					class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
					placeholder="Email Address"
					required
				/>
				<CtaButton text="Subscribe" class="md:w-fit w-full" />
			</form>

			<hr class="h-px bg-gray-200 border-none my-7 dark:bg-gray-700" />

			<div class="flex flex-col items-center justify-between md:flex-row">
				<a href="#">
					<img class="w-auto h-7" src="" alt="" />
				</a>

				<div class="flex mt-4 md:m-0">
					<div class="flex items-center gap-4">
						<a
							v-for="link in links"
							:key="link.icon"
							:href="link.link"
							target="_blank"
							class="inline-flex items-center justify-center w-[50px] h-[50px] border-[2px] border-[--light-grey] rounded-full bg-white text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline shadow-primary-shadow"
							><img
								class="w-[26px] h-[26px]"
								:src="`src/assets/${link.icon}.svg`"
								:alt="link.icon"
						/></a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>
