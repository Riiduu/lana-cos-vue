<template>
    <div class="socials">
        <a target="_blank" href="https://www.instagram.com/lana.cos.hair/">
            <img class="social-links" width="40" src="@/assets/icons/ig-icon.png"/>
        </a>
        <a target="_blank" href="https://www.facebook.com/lana.cos.express/">
            <img class="social-links" width="40" src="@/assets/icons/fb-icon.png"/>
        </a>
    </div>
</template>

<script>

export default {
    name: 'SocialsComponent'
    
}
</script>

<style lang="scss" scoped>
    .socials {
        width: 120px;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-self: flex-end;
        background-color: white;
        margin-right: 40px;
        padding: 5px;
    }

    .social-links {
        margin: 0 6px;
        cursor: pointer;
    }
</style>