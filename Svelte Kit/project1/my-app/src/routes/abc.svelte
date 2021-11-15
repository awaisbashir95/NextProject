<script>
    import {Authenticate} from '$lib/facebook/auth'

    const login = () => {
        Authenticate((req, res) => {
            console.log('ok')
        });
    }


</script>

<div>
    <button class="btn btn-primary" on:click={login}>Login with facebook</button>
</div>