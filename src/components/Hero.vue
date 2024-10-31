<script setup lang="ts">
	import CtaButton from './CtaButton.vue';
</script>

<template>
	<section
		class="flex flex-row lg:gap-4 gap-0 flex-wrap lg:flex-nowrap lg:justify-between items-center justify-center"
	>
		<div
			class="w-[100%] flex flex-1 flex-col gap-3 items-center lg:items-start lg:justify-between sm:p-2 h-[100%] max-h-[450px]"
		>
			<h1
				class="font-['Syne'] font-medium text-[35px] max-w-[670px] text-[--medium-grey] md:leading-[77px] md:text-[60px] xl:text-[65px] text-center lg:text-start"
			>
				Where Every Page Takes You Somewhere New
			</h1>
			<div
				class="flex flex-col gap-4 items-between w-[100%] max-w-[535px] justify-center items-center lg:items-start lg:justify-start"
			>
				<p class="font-['Syne'] font-[16px] text-[--light-grey]">
					Explore our catalog and find your next read.
				</p>
				<div class="relative w-[100%]">
					<input
						type="text"
						placeholder="Type the name of book or author..."
						class="w-[100%] rounded-full border-[2px] border-[--medium-grey] shadow-primary-shadow px-[20px] py-[13px] placeholder:font-['Syne'] h-[41px]"
					/>
					<img
						src="/assets/MAGNIFYING_GLASS.svg"
						alt="MagnifyingGlass"
						class="absolute right-[20px] top-[50%] translate-y-[-50%]"
					/>
				</div>
				<CtaButton text="Explore" icon="Binoculars" />
			</div>
		</div>
		<div class="align-self-end mt-[100px]">
			<img
				src="/assets/hero-image.jpg"
				alt="hero-image"
				class="rounded-xl border-[2px] border-[--medium-grey] shadow-secondary-shadow w-[480px] h-[500px]"
			/>
		</div>
	</section>
</template>

<style scoped></style>
