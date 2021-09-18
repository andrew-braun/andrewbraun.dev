<script>
	import Icon from "../icons/icons.svelte";
	import { socialLinks } from "../../data/social-links.js";
</script>

<aside class="{$$props.class}}">
	{#each socialLinks as item}
		<a href={item.link}>
			<Icon
				name={item.name}
				strokeWidth={item.name === "polywork" ? "0.08rem" : undefined}
				class={`icon-${item.name}`}
			/>
		</a>
	{/each}
</aside>

<style>
</style>
