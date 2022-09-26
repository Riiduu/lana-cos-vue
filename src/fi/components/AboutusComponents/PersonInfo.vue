<template>
    <div class="person-info">
        <div class="desktop-info">
            <div class="person-img">
            <img :src="require(`@/assets/images/${personImg}`)"/>
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
                <img :src="require(`@/assets/images/${personImg}`)" />
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
        width: 70vw;
        border: 1px solid gray;
        padding: 0 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 20px auto;
        background-color: white;
        text-align: left;
        font-size: x-large;
        border-bottom-right-radius: 15px;
        box-shadow: 1px 1px rgb(149, 146, 146);
    }

    .person-img {
        margin: auto 100px auto auto;
        width: 150px;

        vertical-align: middle;
        img {
            width: 150px;
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
            width: 150px;
            margin-top: 10px;

            img {
                margin-left: 45%;
                width: 150px;
            }
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