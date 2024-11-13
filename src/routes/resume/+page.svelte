<script>
	import { data, title, contact } from '@data/resume';
	import { getAssetURL } from '$lib/data/assets';
	import Assets from '@data/assets';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import CardLogo from '$lib/components/Card/CardLogo.svelte';

</script>

<CommonPage {title}>
	<div class="resume">
		{#if contact}
			<a href={`${'mailto:'}${contact}`}>
				<Chip size={'1.25em'}>
					<span class="text-[1.2em]">Get in touch</span>
				</Chip>
			</a>
		{/if}
		<br><br>
		{#if data}
			<a href={data}>
				<Chip size={'1.25em'}>
					<CardLogo
						src={getAssetURL(Assets.PDF)}
						alt="download"
						radius={'0px'}
						size={20}
						classes="mr-2"
					/>
					<span class="text-[1.2em]">Download Resumé (PDF)</span>
				</Chip>
			</a>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: inline;
		text-align: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>
