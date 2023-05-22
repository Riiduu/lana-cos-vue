<template>
    <div class="pricing">
        <MenuBarPhone id="menu-fs" :close-menu="CloseMenu" />
        <div id="hidable">
            <HeaderComponent id="navbar" :btn-click="ShowMenu" />
            <div class="content">
                <div class="prices">
                    <h1>Hiusten Leikkaus</h1>
                    <div :key="index" v-for="index in hairPrices" class="price">
                        <h3>{{ index.cutType }} ~ {{ index.cutPrice }}€</h3>
                    </div>
                    <hr />

                    <h1>Värjäys</h1>
                    <div :key="index" v-for="index in colorPrices" class="price">
                        <h3>{{ index.colorType }} ~ {{ index.colorPrice }}€</h3>
                    </div>
                    <hr />

                    <h1>Värjäys (Ilman Leikkausta)</h1>
                    <div :key="index" v-for="index in nocutColorPrices" class="price">
                        <h3>{{ index.nocutType }} ~ {{ index.nocutPrice }}€</h3>
                    </div>

                    <hr />

                    <div :key="index" v-for="index in nocutOthers" class="price">
                        <h3>{{ index.nocutOtherType }} ~ {{ index.nocutOtherPrice }}€</h3>
                    </div>
                    <hr />

                    <h1>Vaalennus sis. sävytys ja leikkaus</h1>
                    <div :key="index" v-for="index in lighteningPrices" class="price">
                        <h3>{{ index.lightType }} ~ {{ index.lightPrice }}€</h3>
                    </div>
                    <hr />
                    <h1>Raidat ja Leikkaus ja Sävytys</h1>
                    <div :key="index" v-for="index in stripesPrices" class="price">
                        <h3>{{ index.stripesType }} ~ {{ index.stripesPrice }}€</h3>
                    </div>
                    <hr />
                    <h1>Moniväri ei Vaalenusta</h1>
                    <label>(Esim. Kahdella värillä)</label>

                    <div :key="index" v-for="index in multicolorPrices" class="price">
                        <h3>{{ index.multicolorType }} ~ {{ index.multicolorPrice }}€</h3>
                    </div>
                    <hr />

                    <h1>Permanentti (sis. leikkaus)</h1>
                    <div :key="index" v-for="index in permanentPrices" class="price">
                        <h3>{{ index.permanentType }} ~ {{ index.permanentPrice }}€</h3>
                    </div>
                    <hr />

                    <h1>Ripset ja Kulmat</h1>
                    <div :key="index" v-for="index in lashesnbrowsPrices" class="price">
                        <h3>{{ index.lashesType }} ~ {{ index.lashesPrice }}€</h3>
                    </div>
                    <hr />
                    <h1>Hiuspaketti</h1>
                    <div :key="index" v-for="index in spaHairPrices" class="price">
                        <h3>{{ index.spaType }} ~ {{ index.spaPrice }}€</h3>
                    </div>
                    <hr />
                    <h1>Meikki</h1>
                    <div :key="index" v-for="index in makeupPrices" class="price">
                        <h3>{{ index.makeupType }} ~ {{ index.makeupPrice }}€</h3>
                    </div>
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

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/index.js";

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
    data() {
        return {
            hairPrices: [],
            colorPrices: [],
            nocutColorPrices: [],
            nocutOthers: [],
            stripesPrices: [],
            multicolorPrices: [],
            permanentPrices: [],
            lashesnbrowsPrices: [],
            spaHairPrices: [],
            makeupPrices: [],
            lighteningPrices: []
        }
    },
    async mounted() {
        const Haircuts = await getDocs(collection(db, "prices-fi/Haircut/haircuts"))
        const Colors = await getDocs(collection(db, "prices-fi/Coloring/options"))
        const NoCutColor = await getDocs(collection(db, "prices-fi/color-without-cut/options"))
        const NoCutOthers = await getDocs(collection(db, "prices-fi/color-without-cut/other-options"))
        const Stripes = await getDocs(collection(db, "prices-fi/stripes-and-clipping/options"))
        const Multicolor = await getDocs(collection(db, "prices-fi/multicolor-without-light/options"))
        const PermanentHair = await getDocs(collection(db, "prices-fi/permanent-with-cut/options"))
        const LashesnBrows = await getDocs(collection(db, "prices-fi/lashes-n-brows/options"))
        const SpaHair = await getDocs(collection(db, "prices-fi/spa-hair-package/options"))
        const Makeup = await getDocs(collection(db, "prices-en/makeup/options"))
        const Lightening = await getDocs(collection(db, "prices-fi/lightening-coloring-n-cutting/options"))

        
        let hairPrices = [];
        let colorPrices = [];
        let nocutColorPrices = [];
        let nocutOtherPrices = [];
        let stripesPrices = [];
        let multicolor = [];
        let permanentHairs = [];
        let lashesnbrows = [];
        let spahair = [];
        let makeup = [];
        let lightening = [];

        // For every Section
        Haircuts.forEach((dbitem) => {
            const newContent = {
                id: dbitem.id,
                cutType: dbitem.data().type,
                cutPrice: dbitem.data().price,
            }

            hairPrices.push(newContent);

            this.hairPrices = hairPrices;
        })

        Colors.forEach((dbitem) => {
            const newContent = {
                id: dbitem.id,
                colorType: dbitem.data().type,
                colorPrice: dbitem.data().price,
            }

            colorPrices.push(newContent);

            this.colorPrices = colorPrices;
        })

        NoCutColor.forEach((dbitem) => {
            const newContent = {
                id: dbitem.id,
                nocutType: dbitem.data().type,
                nocutPrice: dbitem.data().price,
            }

            nocutColorPrices.push(newContent);

            this.nocutColorPrices = nocutColorPrices;
        })

        NoCutOthers.forEach((dbitem) => {
            const newContent = {
                id: dbitem.id,
                nocutOtherType: dbitem.data().type,
                nocutOtherPrice: dbitem.data().price,
            }

            nocutOtherPrices.push(newContent);

            this.nocutOthers = nocutOtherPrices;
        })

        Stripes.forEach((dbitem) => {
            const newContent = {
                id: dbitem.id,
                stripesType: dbitem.data().type,
                stripesPrice: dbitem.data().price,
            }

            stripesPrices.push(newContent);

            this.stripesPrices = stripesPrices;
        })

        Multicolor.forEach((dbitem) => {
            const newContent = {
                id: dbitem.id,
                multicolorType: dbitem.data().type,
                multicolorPrice: dbitem.data().price,
            }

            multicolor.push(newContent);

            this.multicolorPrices = multicolor;
        })

        PermanentHair.forEach((dbitem) => {
            const newContent = {
                id: dbitem.id,
                permanentType: dbitem.data().type,
                permanentPrice: dbitem.data().price,
            }

            permanentHairs.push(newContent);

            this.permanentPrices = permanentHairs;
        })

        LashesnBrows.forEach((dbitem) => {
            const newContent = {
                id: dbitem.id,
                lashesType: dbitem.data().type,
                lashesPrice: dbitem.data().price,
            }

            lashesnbrows.push(newContent);

            this.lashesnbrowsPrices = lashesnbrows;
        })

        SpaHair.forEach((dbitem) => {
            const newContent = {
                id: dbitem.id,
                spaType: dbitem.data().type,
                spaPrice: dbitem.data().price,
            }

            spahair.push(newContent);

            this.spaHairPrices = spahair;
        })

        Makeup.forEach((dbitem) => {
            const newContent = {
                id: dbitem.id,
                makeupType: dbitem.data().type,
                makeupPrice: dbitem.data().price,
            }

            makeup.push(newContent);

            this.makeupPrices = makeup;
        })

        Lightening.forEach((dbitem) => {
            const newContent = {
                id: dbitem.id,
                lightType: dbitem.data().type,
                lightPrice: dbitem.data().price,
            }

            lightening.push(newContent);

            this.lighteningPrices = lightening;
        })
    }
};
</script>

<style lang="scss" scoped>
.pricing {
    background: linear-gradient(180deg, rgb(239, 214, 199), rgb(229, 128, 145));
    min-height: 100vh;
    color: white;
    text-align: center;
    max-width: 100%;
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
