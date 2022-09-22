<template>
    <div class="new">
        <h3>{{ newTitle }}</h3>
        <label>{{ newDesc }}</label>
    </div>
</template>

<script>
export default {
    name: "NewComponent",
    props: {
        newTitle: String,
        newDesc: String,
    }
}
</script>

<style lang="scss" scoped>
    .new {
        display: flex;
        flex-direction: column;
        text-align: left;
        border: 1px solid gray;
        padding: 5px 30px 30px 30px;
        width: 80%;
        margin: 10px auto;
        border-radius: 10px;
        box-shadow: lightgray 2px 3px;
    }

</style>