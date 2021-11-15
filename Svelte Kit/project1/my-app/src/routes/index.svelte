<script>
    import Header from "../components/Header.svelte";
    import Card from "../components/Card.svelte";

    // import {authenticate} from '$lib/facebook/auth.js'

    import FacebookLogin from 'svelte-facebook-login';

    import {FacebookAuth} from '@beyonk/svelte-social-auth'

</script>
<Header/>
<main>
	<h1 class="font-bold text-center text-2xl">8 Ball Pool</h1>
    
	<!-- svelte-ignore a11y-img-redundant-alt -->
    <img src="src/images/8Pool.jpg"  alt="background image" class="lg:w-full"/>
     <!-- <Card/>  -->
     
</main>
<FacebookAuth
    appId="620526042351092"
    redirectUri="http://localhost:3000/"
    on:auth-faliure={e => console.log(e)}
    on:auth-success={e => console.log(e.detail.user)}
    on:init-error={e => console.log(e)}
>
    <!-- <div class="-top-60 flex relative justify-center">
        
        
    </div> -->
</FacebookAuth>

<FacebookLogin
    clientId="620526042351092"
    redirectUri="http://localhost:3000/"
    on:success={params => console.log(params)}
    on:error={error => console.log(error)}
    let:onLogin
    >
    <button on:click={onLogin} class="btn btn-success">Login with Facebook</button>
    <!-- <div class="-top-60 flex relative justify-center">
        
        
    </div> -->
</FacebookLogin>

<div class=" -top-64 m-10 flex relative justify-center">
    <button class="btn btn-success">Login with Google</button>
</div>


