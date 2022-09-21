<template>
    <div class="email-forms">
        <h1 id="send-us">Send us an email</h1>

        <form id="contactform" action="https://formsubmit.io/send/kraistains@gmail.com" method="POST">
            <div id="firstInfo">
                
            </div>
            <input name="name" placeholder="Name" type="text" id="name">
            <input name="email" placeholder="Email" type="email" id="email">
            <textarea name="comment" placeholder="Message" id="comment" rows="3"></textarea>

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
    background-color: rgb(146, 85, 85);
    padding: 40px 0 80px 0;
    margin: 100px auto 40px auto;
    width: 80vw;
    border-radius: 10px;
    box-shadow: 3px 2px rgb(76, 75, 75);

    h1 {
        color: white;
    }
}

#contactform {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    text-align: center;
    margin: auto;
}

#name {
    height: 50px;
    margin: 2px 0;
    border-radius: 5px;
    padding: 3px
}

#email {
    height: 50px;
    margin: 2px 0;
    border-radius: 5px;
    padding: 3px
}

#comment {
    height: 100px;
    margin: 2px 0;
    border-radius: 5px;
    padding: 3px
}

#send-btn {
    background: white;
    border: none;
    border-radius: 5px;
    margin-top: 5px;
    height: 50px;
    cursor: pointer;
}

@media (max-width: 768px) {
    .email-forms {
        width: 90vw;
        border-radius: none;
        padding: 40px 0 80px 0;
    }
}


@media (max-width: 502px) {
    .email-forms {
        width: 90vw;
        border-radius: none;
        padding: 40px 0 80px 0;
    }
}
</style>