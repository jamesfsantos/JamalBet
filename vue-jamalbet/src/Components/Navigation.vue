<template>
    <div class="topo">
        <div class="logo-titulo">
            <div class="logo">
                <img src="/public/imagens/logo.png">
            </div>
            <div class="titulo">
                <span class="t-jamal">Jamal</span>
                <span class="t-bet">BET</span>
            </div>
        </div>

        <div class="avatar-usuario">
            <div class="deposito-btn">
                <button>Depósito</button>
            </div>
            <div class="avatar">
                <img src="/public/imagens/shinji.jpg">
            </div>
            <div class="usuario">
                <p>Olá, James!</p>
            </div>
        </div>

    </div>

    <div class="navbar">
        <div class="menu-toggle" onclick="document.querySelector('.menu').classList.toggle('active')">
            <hamburguer class="hamburguer" icon="bars" />
        </div>
        <div class="menu">
            <ul class="itens">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/fale-conosco">Fale Conosco</router-link></li>
                <li><router-link to="/redes-sociais">Redes Sociais</router-link></li>
                <li><router-link to="/times">Times</router-link></li>

            </ul>
        </div>
        <div class="pesquisa">
            <input type="text"><img src="../../imagens/lupa.png">
        </div>
    </div>

</template>