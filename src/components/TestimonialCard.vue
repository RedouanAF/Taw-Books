<script setup lang="ts">
	import { PropType } from 'vue';
	defineProps({
		author: {
			type: Object as PropType<{ name: string; role: string }>,
			required: true,
		},
		testimonial: {
			type: String,
			required: true,
		},
		highlighted: {
			type: Boolean,
			default: false,
		},
	});
</script>

<template>
	<div
		class="py-10 px-8 rounded-xl shadow-lg border-2"
		:class="{
			'border-primary bg-primary text-white': highlighted,
			'border-[#E0E6ED] bg-white text-primary-text': !highlighted,
		}"
	>
		<p class="text-3xl">
			UI is the saddle, the stirrups, & the reins. UX is the feeling you
			get being able to ride the horse.
		</p>

		<div class="mt-8">
			<p class="font-semibold text-2xl">John Doe</p>
			<p class="text-xl">CEO of Company</p>

			<div>
				<TestimonialRating :rating="4" :max="5" class="mt-4" />
			</div>
		</div>
	</div>
</template>
