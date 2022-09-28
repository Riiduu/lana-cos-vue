<template>
    <div class="gallery">
        <!-- 1 pic -->
        <div class="row">
            <img id="main-img" src="@/assets/images/gallery-pics/pic-1.png" />
        </div>
        <!-- 2 pics-->
        <div class="row">
            <img src="@/assets/images/gallery-pics/pic-2.jpg" />
            <img src="@/assets/images/gallery-pics/pic-3.png" />
        </div>
        <div class="row">
            <img src="@/assets/images/gallery-pics/pic-4.png" />
            <img src="@/assets/images/gallery-pics/pic-5.png" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'GalleryComp'
}
</script>

<style lang="scss" scoped>
    .gallery {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #DBAAB9;
    }

    #main-img {
        width: 60vw;
        height: 500px;
    }

    .row {
        margin: 0 auto;
        align-self: center;
        display: flex;
        flex-direction: row;

        img {
            width: 45vw;
            margin: 10px 10px;
        }
    }

    @media (max-width: 768px) {
        .row {
            flex-direction: column;

            img {
            width: 90vw;
            height: auto;
        }
        }

        #main-img {
            width: 90vw;
            height: auto;
        }

        
    }
</style>