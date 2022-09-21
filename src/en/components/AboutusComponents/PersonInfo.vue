<template>
    <div class="person-info">
        <div class="desktop-info">
            <div class="person-img">
            <img :src="require(`@/assets/icons/${personImg}`)"/>
            </div>
            <div class="person-personal-info">
                <label>{{ personName }}</label>
                <label>{{ personPhone }}</label>
                <label>{{ personEmail }}</label>
                <label>{{ personSocial }}</label>
            </div>
            <div class="person-education">
                <label>{{ education1 }}</label>
                <label>{{ education2 }}</label>
                <label>{{ education3 }}</label>
            </div>
        </div>
        <div class="mobile-info">
            <div class="mobile-img">
                <img src="@/assets/icons/woman-1.png" />
            </div>
            <div class="mobile-personal-info">
                <label>{{ personName }}</label>
                <label>{{ personPhone }}</label>
                <label>{{ personEmail }}</label>
                <label>{{ personSocial }}</label>
            </div>
            <div class="mobile-education">
                <label>{{ education1 }}</label>
                <label>{{ education2 }}</label>
                <label>{{ education3 }}</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PersonInfo',
    props: {
        personImg: String,

        personName: String,
        personPhone: String,
        personEmail: String,
        personSocial: String,

        education1: String,
        education2: String,
        education3: String,
    }
}
</script>

<style lang="scss" scoped>
    .mobile-info {
        display: none;
    }

    .desktop-info {
        display: flex;
        flex-direction: row;
    }

    .person-info {
        height: 240px;
        width: 90vw;
        border: 1px solid gray;
        display: flex;
        flex-direction: row;
        margin: 20px 0;
        background-color: white;
        text-align: left;
        font-size: x-large;
        border-bottom-right-radius: 15px;
    }

    .person-img {
        margin-left: -2px;
        width: 20vw;
        height: 241px;

        background: black;
        img {
            width: 240px;
        }
    }

    .person-personal-info {
        margin: 20px 20px;
        display: flex;
        flex-direction: column;
        width: 30vw;
        
        label {
            padding: 3px 0;
        }
    }

    .person-education {
        margin: 20px;
        display: flex;
        flex-direction: column;

        label {
            padding: 3px 0;
        }
    }

    @media (max-width: 768px) {
        .desktop-info {
            display: none;
        }

        .mobile-info {
            display: flex;
            flex-direction: column;
            background: white;
        }

        .person-info {
            height: fit-content;
            flex-direction: column;
            text-align: center;
        }

        .mobile-img {
            background-color: black;
            height: 200px;
            
        }

        .mobile-personal-info {
            display: flex;
            flex-direction: column;
            margin: 10px;
            text-align: left;
            padding: 20px 0;
        }

        .mobile-education {
            display: flex;
            flex-direction: column;
            margin: 10px;
            text-align: left;
            padding: 20px 0;
        }
        
    }
</style>