<template>
    <div class="pricing">
        <MenuBarPhone id="menu-fs" :close-menu="CloseMenu"/>
        <div id="hidable">
            <HeaderComponent id="navbar" :btn-click="ShowMenu"/>
            <div class="content">
                <h1>Pricing</h1>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/en/components/HeaderComponent.vue';
import MenuBarPhone from '../components/MenuBarPhone.vue';

export default {
    name: 'PricingView',
    components: {
        HeaderComponent,
        MenuBarPhone
    },
        methods: {
        ShowMenu() {
            let dropMenu = document.getElementById('menu-fs');
            dropMenu.style.display = "flex";
            let hidable = document.getElementById('hidable');
            hidable.style.display = "none";
        },
        CloseMenu() {
            let dropMenu = document.getElementById('menu-fs');
            dropMenu.style.display = "none";
            let hidable = document.getElementById('hidable');
            hidable.style.display = "block";
        }
    }
}
</script>

<style lang="scss" scoped>
    #menu-fs {
        display: none;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 100px auto auto auto;
    }
</style>