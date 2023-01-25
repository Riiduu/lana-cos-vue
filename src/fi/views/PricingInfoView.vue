<template>
    <div class="pricing">
        <MenuBarPhone id="menu-fs" :close-menu="CloseMenu" />
        <div id="hidable">
            <HeaderComponent id="navbar" :btn-click="ShowMenu" />
            <div class="content">
                <div class="prices">
                    <h1>Hiusten Leikkaus</h1>
                    <h3>Kampaamoleikaus ~ 35€</h3>
                    <h3>Mallinmuutosleikkaus ~ 55€</h3>
                    <h3>Parturilikkaus ~ 20-25€</h3>
                    <h3>Hiustenlaikkaus lapset ~ 20€</h3>
                    <h3>Tassausleikkaus ~ 30€</h3>
                    <h3>Otsatukanleikkaus ~ 15€</h3>
                    <h3>Koneajo ~ 15€</h3>
                    <h3>Pesu ~ 10-15€</h3>
                    <h3>
                        Päähieronta (10min), pesu<br />
                        ja föönaus ~ 50€
                    </h3>
                    <hr />

                    <h1>Värjays</h1>
                    <h3>Lyhyet ~ 95€</h3>
                    <h3>Keskipitkät ~ 110€</h3>
                    <h3>Pitkät ~ 125€</h3>
                    <h3>Extrapitkät ~ 135€</h3>
                    <hr />

                    <h1>Väriäys (Ilman Leikkausta)</h1>
                    <h3>Lyhyet ~ 75€</h3>
                    <h3>Keskipitkät ~ 90€</h3>
                    <h3>Pitkät ~ 100€</h3>
                    <h3>Extrapitkät ~ 115€</h3>

                    <hr />
                    <h3>Tyviväri ja leikkaus (ennitan 3cm) ~ 90€</h3>
                    <h3>
                        Tyviväri ilman leikkaus ~ 70€ (Paksut hiukset + 15€)
                    </h3>
                    <h4></h4>
                    <h3>Tyvivaaeennus (1-2cm) sis.sävytys ~ 100€</h3>
                    <hr />

                    <h1>Vaalennus sis. sävytys ja leikkaus</h1>
                    <h3>Lyhyet ~ 150€</h3>
                    <h3>Keskipitkät ~ 175€</h3>
                    <h3>
                        Pitkät ~ 190-250€
                        <span
                            >+ yvivaalennus (1-2cm tyvin) ja sävytys latvat ~
                            alk 130€</span
                        >
                    </h3>
                    <h3>Värinpoisto sis sävytys ~ alk. 150-350€</h3>
                    <hr />
                    <h1>Raidat ja Leikkaus ja Sävytys</h1>
                    <h3>Lyhyet ~ 100€</h3>
                    <h3>Keskipitkät ~ 120€</h3>
                    <h3>Pitkät ~ 135€</h3>
                    <hr />
                    <h1>Moniväri ei Vaalenusta</h1>
                    <label>(Esim. Kahdella värillä)</label>

                    <h3>Lyhyet ~ 105€</h3>
                    <h3>Keskipitkät ~ 115€</h3>
                    <h3>Pitkät ~ 120€</h3>
                    <h3>Extrapitkät ~ 140€</h3>
                    <br />
                    <h3>Airtouch, shatoosh 60€/h (5t) ~ 170-400€</h3>
                    <hr />
                    <h1>Permanentti (sis. leikkaus)</h1>
                    <h3>Lyhyet ~ 90€</h3>
                    <h3>Keskipitkät ~ 120€</h3>
                    <hr />
                    <h1>Ripset ja Kulmat</h1>
                    <h3>Ripsien ja kulmien kestovärjäys ja muotoilu ~ 28€</h3>
                    <h3>Kulmien värjäys ja muotoilu ~ 20€</h3>
                    <h3>Ripsies varjäys ~ 15€</h3>
                    <h3>Kulmien muotoilu ~ 10€</h3>
                    <hr />
                    <h1>Main SPA Hiuspaketti</h1>
                    <h4>
                        Hoito sisätltää, päähienonnan, hiuksillesi sopivan
                        naamiokäsittelyn, hiusten pesun ja leikkauksen sekä.
                    </h4>
                    <h3>Juhla kampaus ~ 65€/t</h3>
                    <h3>Morsius kampaus ~ 160€</h3>
                    <h3>Pesu ja fönaus ~ 40€</h3>
                    <hr />
                    <h1>Meikkaus</h1>
                    <h3>Morsiusmeikki (sis. koemeikki) ~ 160€</h3>
                    <h3>Päivämeikki ~ 65€</h3>
                    <h3>Iltameikki ~ 75€ + 10€ (tekopipsilla)</h3>
                    <h3>Nude ~ 65€</h3>
                    <h3>Anti-aging meikki ~ 75€</h3>
                    <h3>Miesten meikki ~ 45€</h3>
                    <hr />
                    <h1>Aukioloajat</h1>
                    <label id="list-option">Maanantai - 09:00-18:00</label
                    ><br />
                    <label id="list-option">Tiistai - 09:00-18:00</label><br />
                    <label id="list-option">Keskiviiko - 09:00-18:00</label
                    ><br />
                    <label id="list-option">Torstai - 09:00-18:00</label><br />
                    <label id="list-option">Perjantai - 09:00-18:00</label
                    ><br />
                    <label id="list-option">Lauantai - Suljettu</label><br />
                    <label id="list-option">Sunnuntai - Suljettu</label><br />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComponent from "@/fi/components/HeaderComponent.vue";
import MenuBarPhone from "@/fi/components/MenuBarPhone.vue";

export default {
    name: "PricingView",
    components: {
        HeaderComponent,
        MenuBarPhone,
    },
    methods: {
        ShowMenu() {
            let dropMenu = document.getElementById("menu-fs");
            dropMenu.style.display = "flex";
            let hidable = document.getElementById("hidable");
            hidable.style.display = "none";
        },
        CloseMenu() {
            let dropMenu = document.getElementById("menu-fs");
            dropMenu.style.display = "none";
            let hidable = document.getElementById("hidable");
            hidable.style.display = "block";
        },
    },
};
</script>

<style lang="scss" scoped>
.pricing {
    background: linear-gradient(180deg, rgb(239, 214, 199), rgb(229, 128, 145));
    min-height: 100vh;
    color: white;
    text-align: center;
}

#menu-fs {
    display: none;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 50px 40px auto 40px;
}

.columns {
    display: flex;
    flex-direction: row;
    text-align: center;
}

.prices {
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    border-radius: 15px;
    display: column;
    flex-direction: row;
    border: 1px solid black;
    width: 70%;
    background-color: rgb(143, 79, 79);
    text-align: left;
    padding: 30px;
}

.left-column {
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: h1 {
        text-align: center;
        font-size: 2rem;
    }

    label {
        list-style: none;
        font-size: 1.5rem;
        padding: 10px 0;
    }
    margin: 40px auto;
}
.right-column {
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 45px;

    h1 {
        text-align: center;
        font-size: 2rem;
    }

    label {
        list-style: none;
        font-size: 1.5rem;
        padding: 10px 0;
    }
}

@media (max-width: 768px) {
    .pricing {
        min-height: 100vh;
        color: black;
    }

    .prices {
        flex-direction: column;
        justify-content: center;
        margin: 0px auto;
        width: 100%;
        border: none;
        background: none;
    }

    .left-column {
        width: 100%;
        border-bottom: solid 1px black;
        padding-bottom: 40px;
    }

    .right-column {
        width: 100%;
        text-align: center;
    }
}
</style>
