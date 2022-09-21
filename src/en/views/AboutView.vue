<template>
  <div class="about-us">
    <MenuBarPhone id="menu-fs" :close-menu="CloseMenu"/>
      <div id="hidable">
        <HeaderComponent id="navbar" :btn-click="ShowMenu"/>
          <div class="content">
            
            <PersonInfo 
              :personImg="'woman-1.png'"

              :personName="'Jane Doe'"
              :personPhone="'+358 0434759472'"
              :personEmail="`janedoe@gmail.com`"  
              :personSocial="'IG: @janedoe'"

              :education1="'Turku barber collage'"
              :education2="'Helsinki barber collage'"
              :education3="'K-Market pelmen maker collage'"
            />

            <PersonInfo 
              :personImg="'man-1.png'"

              :personName="'John Doe'"
              :personPhone="'+358 0476917465'"
              :personEmail="`johndoe@gmail.com`"  
              :personSocial="'IG: @johndoe'"

              :education1="'Cheeseburger collage'"
              :education2="'Helsinki barber collage'"
              :education3="'Tai chi professional school'"
            />

            <SendEmail />
            
            
          </div>        
      </div>
    </div>
</template>

<script>
import HeaderComponent from '@/en/components/HeaderComponent.vue';
import MenuBarPhone from '../components/MenuBarPhone.vue';
import PersonInfo from '../components/AboutusComponents/PersonInfo.vue';
import SendEmail from '../components/AboutusComponents/SendEmail.vue';

export default {
  name: "AboutUs",
  components: {
    HeaderComponent,
    MenuBarPhone,
    PersonInfo,
    SendEmail,
},
  methods: {
    ShowMenu() {
      let dropMenu = document.getElementById('menu-fs');
      dropMenu.style.display = "flex";
      let hidable = document.getElementById('hidable');
      hidable.style.display = "none";
    },
    CloseMenu() {
      let dropMenu = document.getElementById('menu-fs');
      dropMenu.style.display = "none";
      let hidable = document.getElementById('hidable');
      hidable.style.display = "block";
    }
  }
}
</script>

<style lang="scss" scoped>
  #navbar {
    position: fixed;
    
  }
  
  #menu-fs {
    display: none;
  }
  
  .about-us {
    max-width: 100vw;
    height: 200vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-image: url('@/assets/images/about-us-bg.jpg');
    background: linear-gradient(45deg, white, grey)
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: center;
    margin: 140px 5% 0 5%;
    text-align: center;
  }

  @media (max-width: 768px) {
    .about-us {
      max-width: 100%;
    }
  }

</style>