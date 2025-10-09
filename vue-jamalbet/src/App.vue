<script setup lang="ts">
  import Navigation from './Components/Navigation.vue';
import Principal from './Components/Principal.vue';
</script>

<template>

 <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
  </div>
  <h2>dsfasdfa</h2> -->

  <Navigation />
  <router-view />

  <!-- Nav -->
  <!-- <Principal /> -->
  <!-- Componente Rota -->
  <!-- Rodape -->
</template>

<style>

*{
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

.container {
    /* border: 1px solid red; */
    background-image: url("/imagens/campo-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    margin: 10px 10px 0px 10px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
}



.jogos {
    /* border: 1px solid blue; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    margin-bottom: 10px;
}

.jogos p {
    /* margin-top: 30px; */
    padding-top: 30px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-style: italic;
    font-size: 25px;

}

.card {
    width: 490px;
    height: 100px;
    background-color: #10755380;
    /* border: 1px solid red; */
    display: flex;
    border-radius: 50px;
    /* border: 1px solid orange; */
}

.card img {
    width: 70px;
    height: 70px;
    /* border: 1px solid red; */
    margin-top: 15px;
    margin-left: 20px;

}

.card b {
    color: white;
    /* border: 1px solid red; */
    margin-left: 23px;
    padding-top: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 46px;
}

.card p {
    color: white;
    margin: 0;
    /* border: 1px solid blue; */
    margin-left: 22px;
    margin-right: 0px;
    font-size: 31px;
}


.btn-aposta button {
    width: 390px;
    background-color: orange;
    border-radius: 40px;
    color: white;
    font-size: 30px;
    padding: 10px;
}

.avaliacao {
    display: flex;
    padding-bottom: 150px;
    /* border: 1px solid red; */
    justify-content: center;
    gap: 300px;
    align-items: center;
    margin-top: 30px;
}

.cliente {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.cliente img {
    border-radius: 50%;

}

.cliente h1 {
    color: white;
    text-align: center;
    font-size: 25px;

}

.box {
    background: #231f1f;
    width: 250px;
    padding: 10px;
    border-radius: 30px;
}

.box p {
    font-size: 20px;
    text-align: center;
    color: white;
    min-height: 92px;
}

.box img {
    width: 210px;
    margin: 0px 0px 0px 20px;
    height: 50px;
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
