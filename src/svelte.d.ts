declare module '*.svelte' {
	import type { Component } from 'svelte';

	const component: Component & {
		element: CustomElementConstructor;
	};

	export default component;
}
