<script setup lang="ts">
import Navigation from './Components/Navigation.vue';
import Rodape from './Components/Rodape.vue';
</script>

<template>



  <Navigation />
  <router-view />
  <Rodape />

 
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

body {

  background: #07603E;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}


.topo {
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  background-color: #107553;
  justify-content: space-between;
}

/* .logo-titulo, .avatar-usuario {
    border: 1px solid red;
} */

.logo-titulo,
.avatar-usuario {
  display: flex;
}


.logo img {
  width: 100px;
  height: 100px;
  margin-left: 25px;
}

.titulo {
  margin-top: 30px;
  margin-left: 5px;
}

.titulo span {
  font-size: 37px;
  font-style: italic;
  white-space: nowrap;
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4), 1px 1px 0 #000;
}

.t-jamal {
  color: #FFFFFF;
}

.t-bet {
  color: #FF8800;
}

.deposito-btn button {
  width: 90px;
  height: 30px;
  border-radius: 10px;
  color: white;
  background-color: orange;
  margin-top: 30px;
}

.avatar img {
  height: 45px;
  width: 45px;
  margin-top: 22px;
  margin-left: 13px;
  border-radius: 50%;
}

.usuario p {
  margin-left: 13px;
  margin-top: 30px;
  font-size: 24px;
  color: white;
}

.navbar {
  margin-top: 10px;
  height: auto;
  /* border: 1px solid red; */
  background-color: #107553;
  display: flex;
  position: relative;
  justify-content: space-between;
}

.menu {
  margin: 10px;
}

.menu ul {
  display: flex;
  list-style: none;
  padding: 0;
  gap: 15px;

}

.menu ul li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

.menu ul li a:hover {
  text-decoration: none;
  cursor: pointer;
}

.pesquisa {
  margin: 10px;
}

.pesquisa input {
  margin-top: 14px;
  border-radius: 5px;
  padding: 5px;
}

.pesquisa img {
  margin-left: -22px;
  /* margin-top: 8px; */
  margin-bottom: -3px;
}


.rodape {
  background-color: #107553;
  height: 100px;
}

.rodape p {
  color: white;
  font-weight: bold;
  font-size: 35px;
  text-align: center;
  padding-top: 30px;
}



/* Desktop*/
@media screen and (min-width: 757px) {
  .menu-toggle {
    display: none;
  }
}

/* Mobile */
@media screen and (max-width: 756px) {

  .deposito-btn button {
    margin: 30px 10px 0px 0px;
  }

  .avatar img {
    margin-top: 25px;
    margin-left: 15px;
  }


  .pesquisa input {
    margin: 10px 0px 10px 320px;
  }


  .jogos {
    margin-left: 0;
  }


  .btn-aposta button {
    margin: 30px 0px 50px 0px;
  }

  .avaliacao {
    display: block;
  }

  .cliente {
    margin-top: 30px;
  }



  .navbar {
    display: block;
  }

  .menu-toggle {
    display: block;
    font-size: 28px;
    color: white;
    cursor: pointer;
    z-index: 101;
  }

  .menu {
    display: block;
    width: 100%;
    gap: 0px;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.4s ease;
    z-index: 100;
    /* Use um valor alto para sobrepor tudo */
  }

  .menu ul {
    margin-left: 0px;
  }

  .menu.active {
    max-height: 500px;
  }

  .itens {
    flex-direction: column;
    padding: 0px 0px;
    align-items: flex-start;
    z-index: 1000;
  }

  .itens li {
    width: 100%;
    text-align: center;
  }

  .itens li a {
    display: block;
    padding: 10px;
    font-size: 18px;
    width: 100%;
  }

  .itens li a:hover {
    background: rgba(255, 255, 255, 0.1);
  }


  .pesquisa {
    display: none;
  }

  .hamburguer {
    margin: 20px;
  }

}
</style>
