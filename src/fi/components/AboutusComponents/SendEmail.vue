<template>
    <div class="email-forms">
        <h2>Lähetä meille viesti</h2>

        <form class="send-email" action="https://getform.io/f/a18dec37-669f-4e83-8f5b-cbfb2b06dd9c" method="POST">
            <div id="top-row">
                <input id="name" type="text" name="name" placeholder="Nimi">
                <input id="email" type="email" name="email" placeholder="Sähköposti">
            </div>
            
            <textarea id="message" type="text" name="message" placeholder="Viesti..."/><br />
        
            <button id="send-btn" type="submit">Lähetä Viesti</button>
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

.send-email {
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

#top-row {
    display: flex;
    flex-direction: row;
    width: 100%;
}

#name {
    height: 30px;
    width: 50%;
    margin: 0px 0;
    border-radius: 5px;
    padding: 3px;
}

#email {
    height: 30px;
    width: 50%;
    margin: 0px 0;
    border-radius: 5px;
    padding: 3px;
}

#message {
    height: 80px;
    width: 99%;
    border-radius: 5px;
    margin: 2px auto;
}

#send-btn {
    background: white;
    border: none;
    width: fit-content;
    border-radius: 5px;
    padding: 0 100px;
    height: 50px;
    cursor: pointer;
    margin: auto
}

@media (max-width: 768px) {
    .email-forms {
        width: 85vw;
        border-radius: none;
        padding: 40px 20px 80px 20px;
    }

    #name {
        width: 100%;
    }

    #email {
        width: 100%;       
    }

    #message {
        width: 98%;
    }

    #send-btn {
        width: fit-content;
        padding: 0 100px;
    }
}


// @media (max-width: 502px) {
//     .email-forms {
//         width: 90vw;
//         border-radius: none;
//         padding: 40px 0 80px 0;
//     }
// }
</style>