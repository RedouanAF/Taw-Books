<script setup lang="ts">
	import { useBooks } from '@/composables/books';

	const { books, fetchBooks } = useBooks();
	const loading = ref<boolean>(false);

	onBeforeMount(async () => {
		try {
			loading.value = true;
			await fetchBooks();
		} catch {
			console.error('Error fetching books');
		} finally {
			loading.value = false;
		}
	});
</script>

<template>
	<section class="mt-10 flex flex-col gap-4 items-center">
		<p class="font-['unica_one'] text-[36px] font-normal">Trending Books</p>
		<div
			class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[54px] border-[2px] border-dotted border-[--medium-grey] py-[25px] lg:px-[56px] px-4 rounded-xl w-full"
		>
			<p v-if="loading" class="text-center lg:col-span-2 xl:col-span-3">
				<svg
					class="animate-spin w-15 h-15 mx-auto"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					viewBox="0 0 24 24"
				>
					<path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 3a9 9 0 1 0 9 9"
					/>
				</svg>
			</p>
			<BookCard
				v-else
				v-for="book in books"
				:key="book.title"
				:src="book.src"
				:title="book.title"
				:author="book.author"
				:alt="book.alt"
				:stars="book.stars"
				class="mx-auto"
			/>
		</div>
	</section>
</template>

<style scoped></style>
