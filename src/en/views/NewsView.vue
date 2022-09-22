<template>
    <div class="news">
    <MenuBarPhone id="menu-fs" :close-menu="CloseMenu"/>
        <div id="hidable">
            <HeaderComponent id="navbar" :btn-click="ShowMenu"/>
            <div class="content">
                <NewComponent
                    :newTitle="'Something New'"
                    :newDesc="'Here is something new because this section is for something new.'"
                />
                <NewComponent
                    :newTitle="'Another New'"
                    :newDesc="'Here is something new because this section is for something new.'"
                />
                <NewComponent
                    :newTitle="`I'm also New`"
                    :newDesc="'Here is something new because this section is for something new.'"
                />
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/en/components/HeaderComponent.vue';
import MenuBarPhone from '../components/MenuBarPhone.vue';
import NewComponent from '../components/NewsComponents/New.vue';

export default {
    name: 'NewsView',
    components: {
    HeaderComponent,
    MenuBarPhone,
    NewComponent
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

    .news {
        background: linear-gradient(180deg, rgb(239, 214, 199),  rgb(229, 128, 145));
        min-height: 100vh;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 100px auto auto auto;
        
        }
</style>