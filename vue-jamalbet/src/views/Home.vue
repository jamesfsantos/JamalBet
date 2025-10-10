<script setup lang="ts">

</script>

<template>
    <div class="container">
            <div class="jogos-container">
                <div class="jogos">
                    <div class="mando-campo">
                        <p>La Liga EA SPORTS: Camp Nou, 20:00, 24/09/25</p>
                    </div>
                    <div class="card">
                        <img src="/public/imagens/barcelona-icon.png">
                        <b>0</b>
                        <p>BAR ᵛˢ MAD</p> <b>0</b>
                        <img src="/public/imagens/realmadrid-icon.png">
                    </div>
                </div>

                <div class="jogos">
                    <div class="mando-campo">
                        <p>Premier League: Anfield, 18:00, 24/09/25</p>
                    </div>
                    <div class="card">
                        <img src="/public/imagens/liverpool-icon.png">
                        <b>0</b>
                        <p>LIV ᵛˢ CHE</p> <b>0</b>
                        <img src="/public/imagens/chelsea-icon.png">
                    </div>
                </div>

                <div class="jogos">
                    <div class="mando-campo">

                        <p>Bundesliga: Allianz Arena, 15:00, 24/09/25</p>
                    </div>
                    <div class="card">
                        <img src="/public/imagens/bayern-icon.png">
                        <b>0</b>
                        <p>BAY ᵛˢ DOR</p> <b>0</b>
                        <img src="/public/imagens/dortmund-icon.png">
                    </div>
                </div>
            </div>


            <div class="btn-aposta">
                <button>☛ Faça já a sua aposta!</button>
            </div>
        </div>

        <div class="avaliacao">
            <div class="cliente">
                <div class="img-nome">
                    <img src="/public/imagens/cr7.jpg">
                    <h1>Cristiano Ronaldo</h1>
                </div>
                <div class="box">
                    <p>"A melhor casa de apostas <br>
                        do Brasil, recomendo jogar!"</p>
                    <img src="/public/imagens/star.png">
                </div>
            </div>

            <div class="cliente">
                <div class="img-nome">

                    <img src="/public/imagens/messi.jpg">
                    <h1>Lionel Messi</h1>
                </div>
                <div class="box">
                    <p>"Simplesmente não consigo parar, <br>
                        essa casa é a melhor que temos!"</p>
                    <img src="/public/imagens/star.png">
                </div>
            </div>

            <div class="cliente">
                <div class="img-nome">

                    <img src="/public/imagens/neymar.jpg">
                    <h1>Neymar Júnior</h1>
                </div>
                <div class="box">
                    <p>"Ja apresentei para todos os <br>
                        meus parentes, sou fã nº1!"</p>
                    <img src="/public/imagens/star.png">
                </div>
            </div>
        </div>
</template>

<style scoped>
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

</style>