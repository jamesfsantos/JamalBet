<script lang="ts"></script>
<template>
    <div class="card-time">
        <div class="imagem-logo">

            <img src="/public/imagens/barcelona-icon.png">
        </div>
        <div class="descricao">
            <h3>Fútbol Club Barcelona</h3>
            <p><b>Més que un club.</b> Mergulhe na filosofia única do Barça, desde a lendária La Masia até o icônico
                estilo de jogo de posse de bola. Descubra os cinco títulos da Champions League e a paixão que faz do
                Camp Nou um templo do futebol.</p>
        </div>
    </div>
    <div class="card-time">
        <div class="imagem-logo">
            <img src="/public/imagens/realmadrid-icon.png">
        </div>
        <div class="descricao">
            <h3>Real Madrid Club de Fútbol</h3>
            <p><b>A Realeza Europeia.</b> Conheça a história do clube mais vitorioso do planeta e o recordista da
                Champions League, com 15 títulos. De Di Stéfano aos Galácticos, explore a mística do Santiago Bernabéu e
                a mentalidade vencedora que define o Real.</p>
        </div>
    </div>
    <div class="card-time">
        <div class="imagem-logo">

            <img src="/public/imagens/bayern-icon.png">
        </div>
        <div class="descricao">
            <h3>Fußball-Club Bayern München</h3>
            <p><b>O Gigante da Baviera.</b> Explore a hegemonia alemã. Maior campeão da Bundesliga e vencedor de 6
                títulos da Champions, o Bayern é a definição de eficiência, organização e força máxima no futebol
                mundial.</p>
        </div>
    </div>
    <div class="card-time">
        <div class="imagem-logo">

            <img src="/public/imagens/dortmund-icon.png">
        </div>
        <div class="descricao">
            <h3>Bourssia Dortmund</h3>
            <p><b>A Muralha Amarela.</b> Viva a intensidade do Signal Iduna Park, casa da torcida mais apaixonada da
                Alemanha. Conhecido por desenvolver jovens talentos e por seu futebol ofensivo e eletrizante, o BVB é a
                alma da emoção na Bundesliga.</p>
        </div>
    </div>
    <div class="card-time">
        <div class="imagem-logo">

            <img src="/public/imagens/chelsea-icon.png">
        </div>
        <div class="descricao">
            <h3>Chelsea Football Club</h3>
            <p><b>Os Blues de Londres.</b> Acompanhe a ascensão moderna de um gigante. Com 2 títulos da Champions e uma
                história de grandes reviravoltas e estrelas globais, o Chelsea é sinônimo de poder financeiro e sucesso
                recente no cenário europeu.</p>
        </div>
    </div>
    <div class="card-time">
        <div class="imagem-logo">

            <img src="/public/imagens/liverpool-icon.png">
        </div>
        <div class="descricao">
            <h3>Liverpool Football Club</h3>
            <p><b>You'll Never Walk Alone.</b> Sinta a energia de Anfield e a tradição de um dos maiores clubes
                ingleses, com 6 títulos da Champions. Descubra a intensidade do "futebol rock and roll" e a garra que
                move os Reds em cada partida.</p>
        </div>
    </div>

</template>
<style scoped>
.card-time {
    position: relative;
    max-width: 300px;
    height: 215px;
    background-color: #fff;
    margin: 30px 10px;
    padding: 20px 15px;

    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in-out;
    border-radius: 15px;
}

.card-time:hover {
    height: 320px;
}


.card-time .imagem-logo {
    position: relative;
    width: 260px;
    height: 260px;

    top: -40%;
    left: 8px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.card-time .imagem-logo img {
    max-width: 100%;
    border-radius: 15px;
}

.card-time .descricao {
    position: relative;
    top: -140px;
    padding: 10px 15px;
    color: #111;
    text-align: center;

    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;

}

.card-time:hover .descricao {
    margin-top: 30px;
    visibility: visible;
    opacity: 1;
    transition-delay: 0.2s;

}

.imagem-logo {
    text-align: center;
}

.imagem-logo img {
    width: 200px;
    height: 200px;
}
</style>