export interface Book {
	src: string;
	title: string;
	author: string;
	alt: string;
	stars: string;
}

export function useBooks() {
	const books = ref<Book[]>([]);

	async function fetchBooks() {
		const resp: { data: Book[] } = await new Promise(resolve => {
			setTimeout(() => {
				resolve({
					data: [
						{
							src: '../assets/the-bet.jpg',
							title: 'The Bet',
							author: 'Anton Chekhov',
							alt: 'The Bet',
							stars: '4.8',
						},
						{
							src: '../assets/two-worlds.jpeg',
							title: 'Two Worlds',
							author: 'Francesco Verso',
							alt: 'Two Worlds',
							stars: '4.0',
						},
						{
							src: '../assets/cicada.jpg',
							title: 'Cicada',
							author: 'Shaun Tan',
							alt: 'Cicada',
							stars: '4.2',
						},
					],
				});
			}, 1000);
		});

		books.value = resp.data;
	}

	return {
		fetchBooks,
		books,
	};
}
