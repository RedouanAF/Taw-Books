<script setup lang="ts">
	import { useStore } from '@/store';
	import TawHeader from '@/components/TawHeader.vue';
	import Hero from '@/components/Hero.vue';
	import Trending from '@/components/Trending.vue';
	import AppFooter from '@/components/AppFooter.vue';
	useHead({
		title: 'Vitailse | Opinionated vite starter template',
	});

	const store = useStore();
	const { t } = useI18n();
</script>

<template>
	<div class="container m-auto px-4 relative min-h-[100vh]">
		<TawHeader />
		<Hero />
		<Trending />
		<TestimonialsSection class="mt-10" />
		<AppFooter />
	</div>
</template>

<route lang="yaml">
name: home
</route>
