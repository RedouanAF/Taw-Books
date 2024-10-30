<script setup lang="ts"></script>

<template>
	<section class="flex flex-row gap-4 justify-between items-center">
		<div class="flex flex-col gap-3 justify-between sm:p-2 min-h-[450px]">
			<h1
				class="font-['Syne'] font-medium text-[35px] max-w-[670px] text-[--medium-grey] leading-[77px] md:text-[55px] xl:text-[65px]"
			>
				Where Every Page Takes You Somewhere New
			</h1>
			<div
				class="flex flex-col gap-4 items-between max-w-[535px] items-start"
			>
				<p class="font-['Syne'] font-[16px] text-[--light-grey]">
					Explore our catalog and find your next read.
				</p>
				<div class="relative w-[100%]">
					<input
						type="text"
						placeholder="Type the name of book or author..."
						class="w-[100%] rounded-full border-[2px] border-[--medium-grey] shadow-yellow-shadow px-[20px] py-[13px] placeholder:font-['Syne'] h-[41px]"
					/>
					<img
						src="@/assets/MAGNIFYING_GLASS.svg"
						alt="MagnifyingGlass"
						class="absolute right-[20px] top-[50%] translate-y-[-50%]"
					/>
				</div>
				<button
					class="flex flex-row justify-around items-center px-4 rounded-md border-[--medium-grey] border-[2px] w-[153px] h-[51px] bg-[--secondary-color] text-[--medium-grey] text-[16px]"
				>
					<span>Explore</span>
					<img src="@/assets/Binoculars.svg" alt="Binoculars" />
				</button>
			</div>
		</div>
		<div class="align-self-end mt-[100px]">
			<img
				src="@/assets/hero-image.jpg"
				alt="hero-image"
				class="rounded-xl border-[2px] border-[--medium-grey] shadow-blue-shadow"
			/>
		</div>
	</section>
</template>

<style scoped></style>
