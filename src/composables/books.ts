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
<<<<<<< HEAD
							src: '/assets/the_bet.jpg',
=======
							src: '../assets/the-bet.jpg',
>>>>>>> acd7e3da51afcab7c98b0d80974122c9cbc1b00f
							title: 'The Bet',
							author: 'Anton Chekhov',
							alt: 'The Bet',
							stars: '4.8',
						},
						{
<<<<<<< HEAD
							src: '/assets/two_worlds.jpeg',
=======
							src: '../assets/two-worlds.jpeg',
>>>>>>> acd7e3da51afcab7c98b0d80974122c9cbc1b00f
							title: 'Two Worlds',
							author: 'Francesco Verso',
							alt: 'Two Worlds',
							stars: '4.0',
						},
						{
<<<<<<< HEAD
							src: '/assets/cicada.jpg',
=======
							src: '../assets/cicada.jpg',
>>>>>>> acd7e3da51afcab7c98b0d80974122c9cbc1b00f
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
