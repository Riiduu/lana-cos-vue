<template>
    <div class="email-forms">
        <h2>Contact us</h2>

        <form action="https://getform.io/f/a18dec37-669f-4e83-8f5b-cbfb2b06dd9c" method="POST">
            <div id="top-row">
                <input id="name" type="text" name="name" placeholder="Name">
                <input id="email" type="email" name="email" placeholder="Email">
            </div>
            
            <textarea id="message" type="text" name="message" placeholder="Message..."/><br />
        
            <button id="send-btn" type="submit">Send</button>
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
    margin: 50px auto 40px auto;
    width: 50vw;
    border-radius: 10px;
    box-shadow: 3px 2px rgb(76, 75, 75);
    display: flex;
    flex-direction: column;

    h2 {
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
    height: 30px;
    width: 246px;
    margin: 2px 0;
    border-radius: 5px;
    padding: 3px;
}

#email {
    height: 30px;
    width: 246px;
    margin: 2px 0;
    border-radius: 5px;
    padding: 3px;
}

#message {
    height: 80px;
    width: 500px;
    margin: 2px 0;
    border-radius: 5px;
    padding: 3px;
    flex: auto;
}

#send-btn {
    background: white;
    border: none;
    width: 505px;
    border-radius: 5px;
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