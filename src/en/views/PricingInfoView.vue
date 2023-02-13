<template>
    <div class="pricing">
        <MenuBarPhone id="menu-fs" :close-menu="CloseMenu" />
        <div id="hidable">
            <HeaderComponent id="navbar" :btn-click="ShowMenu" />
            <div class="content">
                <div class="prices">
                    <h1>Haircut</h1>
                    <h3>Regular haircut ~ 35€</h3>
                    <h3>Model haircut ~ 55€</h3>
                    <h3>Barber ~ 20-25€</h3>
                    <h3>Children haircut ~ 20€</h3>
                    <h3>Smoothing ~ 30€</h3>
                    <h3>Forehead ~ 15€</h3>
                    <h3>Machine cut ~ 15€</h3>
                    <h3>Washing ~ 10-15€</h3>
                    <h3>
                        Head massage (10min), washing<br />
                        and blow-drying ~ 50€
                    </h3>
                    <hr />

                    <h1>Coloring</h1>
                    <h3>Short ~ 95€</h3>
                    <h3>Medium length ~ 110€</h3>
                    <h3>Long ~ 125€</h3>
                    <h3>Extra long ~ 135€</h3>
                    <hr />

                    <h1>Coloring (Without Cutting)</h1>
                    <h3>Short ~ 75€</h3>
                    <h3>Medium length ~ 90€</h3>
                    <h3>Long ~ 100€</h3>
                    <h3>Extra long ~ 115€</h3>

                    <hr />
                    <h3>Base color and cut (approx. 3cm) ~ 90€</h3>
                    <h3>Base color without cutting ~ 70€ (Thick hair + 15€)</h3>
                    <h4></h4>
                    <h3>? Base extension (1-2cm) including coloring ~ 100€</h3>
                    <hr />

                    <h1>Lightening including coloring and cutting</h1>
                    <h3>Short ~ 150€</h3>
                    <h3>Medium length ~ 175€</h3>
                    <h3>
                        Long ~ 190-250€
                        <span
                            >+ end lightening (1-2cm at the bottom) and toning
                            the ends ~ from 130€</span
                        >
                    </h3>
                    <h3>Color removal including coloring ~ from 150-350€</h3>
                    <hr />
                    <h1>Stripes and Clipping and Coloring</h1>
                    <h3>Short ~ 100€</h3>
                    <h3>Medium length ~ 120€</h3>
                    <h3>Long ~ 135€</h3>
                    <hr />
                    <h1>Multicolor without lightening</h1>
                    <label>(For example with two colors)</label>

                    <h3>Short ~ 105€</h3>
                    <h3>Medium length ~ 115€</h3>
                    <h3>Long ~ 120€</h3>
                    <h3>Extra long ~ 140€</h3>
                    <br />
                    <h3>Airtouch, shatoosh 60€/h (5t) ~ 170-400€</h3>
                    <hr />
                    <h1>Permanent (including cut)</h1>
                    <h3>Short ~ 90€</h3>
                    <h3>Medium length ~ 120€</h3>
                    <hr />
                    <h1>Lashes and Brows</h1>
                    <h3>
                        Permanent dyeing and styling of lashes and brows ~ 28€
                    </h3>
                    <h3>Coloring and shaping the corners ~ 20€</h3>
                    <h3>Lash shading ~ 15€</h3>
                    <h3>Shaping the corners ~ 10€</h3>
                    <hr />
                    <h1>Main SPA Hair Package</h1>
                    <h4>
                        Internal treatment, head trimming, suitable for your
                        hair. Mask processing, hair washing and cutting.
                    </h4>
                    <h3>Party hairstyle ~ 65€/t</h3>
                    <h3>Bridal hairstyle ~ 160€</h3>
                    <h3>Washing and blow-drying ~ 40€</h3>
                    <hr />
                    <h1>Makeup</h1>
                    <h3>Bridal makeup (incl. trial makeup) ~ 160€</h3>
                    <h3>Day makeup ~ 65€</h3>
                    <h3>Evening makeup ~ 75€ + 10€ (with fake eyelashes)</h3>
                    <h3>Nude ~ 65€</h3>
                    <h3>Anti-aging makeup ~ 75€</h3>
                    <h3>Men's makeup ~ 45€</h3>
                    <hr />
                    <h1>Working times</h1>
                    <label id="list-option">Monday - 09:00-18:00</label><br />
                    <label id="list-option">Tuesday - 09:00-18:00</label><br />
                    <label id="list-option">Wednesday - 09:00-18:00</label
                    ><br />
                    <label id="list-option">Thursday - 09:00-18:00</label><br />
                    <label id="list-option">Friday - 09:00-18:00</label><br />
                    <label id="list-option">Saturday - Suljettu</label><br />
                    <label id="list-option">Sunday - Suljettu</label><br />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComponent from "@/en/components/HeaderComponent.vue";
import MenuBarPhone from "../components/MenuBarPhone.vue";

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
