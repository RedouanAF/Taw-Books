<script setup lang="ts">
	import { useStore } from '@/store';
	import VitailseLogo from '@/assets/logo.png';
	import Header from '@/components/Header.vue';
	import Hero from '@/components/Hero.vue';
	useHead({
		title: 'Vitailse | Opinionated vite starter template',
	});

	const store = useStore();
	const { t } = useI18n();
</script>

<template>
	<div class="container m-auto">
		<Header />
		<Hero />
	</div>
</template>

<route lang="yaml">
name: home
</route>
