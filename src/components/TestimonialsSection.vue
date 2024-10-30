<script setup lang="ts"></script>

<template>
	<div class="container mx-auto">
		<div class="flex flex-col gap-10">
			<h2 class="font-['unica_one'] text-[36px] font-normal text-center">
				Testimonials
			</h2>
			<div
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-syne"
			>
				<TestimonialCard />
				<TestimonialCard highlighted />
				<TestimonialCard />
			</div>
		</div>
	</div>
</template>
