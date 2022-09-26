<template>
    <div class="google-maps">
        <iframe 
            class="map" 
            style="border:0" 
            loading="lazy" 
            allowfullscreen 
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJMWXQ7Pl2jEYRZKbhU-EiJHE&key=AIzaSyBzMX22NxjPGiKF2i8cjfZjcfgcG6eE3dk">
        </iframe>    
    </div>
</template>

<script>
export default {
    name: 'GoogleMaps'
}
</script>

<style lang="scss" scoped>
    .google-maps {
        margin: 20px auto 100px auto;
        height: 600px;
    }

    .map {
        width: 90vw;
        height: 35vw;
    }
    
    @media (max-width: 768px) {
        .google-maps {
            width: 100%;
            margin-bottom: 0;
        }

        .map {
            width: 100%;
            height: 80vh;
        }
    }
</style>