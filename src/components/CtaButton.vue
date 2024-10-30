<script setup lang="ts">
	defineProps({
		text: {
			type: String,
			required: true,
		},
		icon: {
			type: String,
			required: false,
		},
	});
</script>

<template>
	<button
		class="flex flex-row justify-center items-center gap-2 px-4 py-2 rounded-md border-[--medium-grey] border-[2px] w-[153px] h-[51px] bg-secondary text-[--medium-grey] text-[16px]"
	>
		<span class="font-syne text-white">{{ text }}</span>
		<img :src="`src/assets/${icon}.svg`" alt="Binoculars" v-if="icon" />
	</button>
</template>

<style scoped></style>
