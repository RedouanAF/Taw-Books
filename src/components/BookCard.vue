<script setup lang="ts">
	const props = defineProps(['src', 'title', 'author', 'alt', 'stars']);
</script>

<template>
	<div
		class="w-full max-w-[360px] min-h-[495px] border-[1px] border-black flex flex-col justify-between items-start gap-4 rounded-xl shadow-primary-shadow relative"
	>
		<img
			:src="props.src"
			:alt="props.alt"
			class="object-cover object-top w-[360px] h-[322px] rounded-xl"
		/>
		<div
			class="w-[87px] h-[37px] rounded-[50px] absolute top-[247px] left-[50%] translate-x-[-50%] bg-white flex flex-row justify-center items-center"
		>
			<img src="@/assets/star.svg" alt="rating" />
			<span>{{ props.stars }}</span>
		</div>
		<div
			class="font-syne flex flex-col justify-between gap-2 p-[25px] flex-1 w-[100%]"
		>
			<p class="text-[32px] font-[600]">{{ props.title }}</p>
			<div
				class="w-[100%] flex flex-row justify-between items-center flex-wrap"
			>
				<p class="text-[28px] font-[500]">
					{{ props.author }}
				</p>
				<div
					class="w-[50px] h-[50px] rounded-full bg-[#F2F2F2] flex flex-row justify-center items-center"
				>
					<img src="@/assets/heart.svg" alt="like" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
