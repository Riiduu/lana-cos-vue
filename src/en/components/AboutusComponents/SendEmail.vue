<template>
    <div class="email-forms">
        <h1 id="send-us">Send us an email</h1>

        <form id="contactform" action="https://formsubmit.io/send/kristians.jelinsks1@gmail.com" method="POST">
            <div id="firstInfo">
                
            </div>
            <input name="name" placeholder="name" type="text" id="name">
            <input name="email" type="email" id="email">
            <textarea name="comment" id="comment" rows="3"></textarea>

            <input name="_formsubmit_id" type="text" style="display:none">

            <input id="send-btn" value="Submit" type="submit">
        </form>
    </div>
</template>

<script>
export default {
    name: "SendEmail"
}
</script>

<style lang="scss" scoped>
.email-forms {
    height: 50vh;
    background-color: rgb(57, 54, 54);
    padding: 40px 40px 40px 40px;
    width: 80vw;
    border-radius: 10px;

    h1 {
        color: white;
    }
}

#contactform {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: center;
    margin: auto;
}

#name {
    height: 50px;
    margin: 2px 0;
    border-radius: 5px;
}

#email {
    height: 50px;
    margin: 2px 0;
    border-radius: 5px;
}

#comment {
    height: 100px;
    margin: 2px 0;
    border-radius: 5px;
}

#send-btn {
    background: white;
    border: none;
    border-radius: 5px;
    margin-top: 5px;
    height: 50px;
}

@media (max-width: 768px) {
    .email-forms {
        width: 78vw;
        border-radius: none;
    }
}


@media (max-width: 502px) {
    .email-forms {
        width: 70vw;
        border-radius: none;
    }
}
</style>