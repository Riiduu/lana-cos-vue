<template>
    <div class="pricing">
        <MenuBarPhone id="menu-fs" :close-menu="CloseMenu"/>
        <div id="hidable">
            <HeaderComponent id="navbar" :btn-click="ShowMenu"/>
            <div class="content">
                <div class="prices">
                    <div class="left-column">
                        <h1>Men</h1>
                            <label>Option 1 = 20$</label>
                            <label>Option 2 = 35$</label>
                            <label>Option 3 = 15$</label>
                            <label>Option 4 = 20$</label>

                            <h1>Women</h1>
                                <label>Option 1 = 20$</label>
                                <label>Option 2 = 60$</label>
                                <label>Option 3 = 35$</label>
                                <label>Option 4 = 10$</label>
                    </div>

                    <div class="right-column">
                        <h1>Opening Hours</h1>
                            <label id="list-option">Monday - 09:00-18:00</label>
                            <label id="list-option">Tuesday - 09:00-18:00</label>
                            <label id="list-option">Wednesday -  09:00-18:00</label>
                            <label id="list-option">Thursday -  09:00-18:00</label>
                            <label id="list-option">Friday - 09:00-18:00</label>
                            <label id="list-option">Saturday - Closed</label>
                            <label id="list-option">Sunday - Closed</label>
                    </div>
                </div>
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
    .pricing {
        background-color: rgb(234, 202, 207);
        height: 100vh;
        color: black;
        text-align: center;
    }
    
    #menu-fs {
        display: none;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 50px 40px auto 40px;
    }

    .prices {
        display: flex;
        flex-direction: row;
    }

    .left-column {
        width: 50%;
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-top: 

        h1 {
            text-align: center;
            font-size: 2rem;
        }

        label {
            list-style: none;
            font-size: 1.5rem;
            padding: 10px 0;
        }        margin: 40px auto;
}
    .right-column {
        width: 50%;
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-top: 45px;
        
        h1 {
            text-align: center;
            font-size: 2rem;
        }

        label {
            list-style: none;
            font-size: 1.5rem;
            padding: 10px 0;
        }
    }

        
    

    @media (max-width: 768px) {
        .pricing {
            height: 160vh;
        }

        .prices {
            flex-direction: column;
            justify-content: center;
            margin: 0px auto;
        }

        .left-column {
            width: 100%;
            border-bottom: solid 1px black;
            padding-bottom: 40px;
        }

        .right-column {
            width: 100%;
            text-align: justify;
        }
    }
</style>