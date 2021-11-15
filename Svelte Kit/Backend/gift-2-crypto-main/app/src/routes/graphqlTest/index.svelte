<script>
	import {query} from 'svelte-apollo'
	import {AUTH_LOGIN} from '$lib/graphQL/queries/auth';

	const data = query(AUTH_LOGIN, {
		variables: {
			identity: 'abc@xyz.com',
			password: '123'
		}
	});

	if (!$data.loading) {
		console.log($data)
	}

</script>

<div>
	{#if $data.loading}
		<div class='btn loading'></div>
	{/if}

	{#if $data.error}
		<div class='text-error'>{$data.error.message}</div>
	{/if}

	$data.data
</div>