<script lang="ts" setup></script>

<template>
   <div class="conteudo">
            <div class="contato">
                <div class="fale-conosco">
                    <h1>Fale Conosco</h1>

                    <p>Olá caro usuário, caso queira entrar em contato aqui estão nossas opções: <br>
                        <br>Email: jamalbet@betjamal.org
                        <br>Celular: +55 (11) 94597-5547.
                        <br>Telefone Fixo: +55 (11) 4002-8922
                    </p>

                    <div class="fale-icons">
                        <i class="fa-solid fa-envelope"></i>
                        <i class="fa-brands fa-whatsapp"></i>
                        <i class="fa-solid fa-phone"></i>
                    </div>
                </div>

                <div class="logo-contato">
                    <img src="/public/imagens/logo-mensagem.png">
                </div>
            </div>

            <div class="sobre-nos">
                <h1>Sobre Nós</h1>
                <p>Olá caro usuário que gosta de um joguinho para apimentar as coisas, nós somos a Jamal BET a maior
                    caso de
                    apostas de Futebol do Brasil! <br>Nosso compromisso com você é a garantia de conseguir uma graninha
                    extra, contamos com você para compartilhar nossas casa para amigos e familiares! <br>Boa aposta e
                    boa
                    sorte!</p>
                <h2>Jamal BET esclarece, jogue sempre com responsabilidade.<br>
                    Não coloque dinheiro que não possa nos jogos!</h2>
            </div>


        </div>

        <div class="formulario-contato">
            <div class="form">
                <h2>Tire suas dúvidas</h2>
                <form>
                        <legend>Informações de contato</legend>
                        <label for="nome">Nome:</label>
                        <input type="text" id="nome" name="nome"><br>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email"><br>
                        <label for="comentarios">Comentários:</label><br>
                        <textarea id="comentarios" name="comentarios" rows="10" cols="50"
                            placeholder="Digite sua duvida aqui"></textarea><br>
                        <button onclick="alert('FEEDBACK ENVIADO')">Enviar</button>
                </form>
            </div>
        </div>
</template>
<style scoped>
.conteudo {
    /* border: 1px solid red; */
    margin: 30px 0px 0px 0px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
}

.contato {
    margin: 20px;
    background-color: #107553;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
}

.fale-conosco {
    /* border: 1px solid blue; */
    margin: 30px;
}

.fale-conosco p {
    font-size: 20px;
}

.fale-icons {
    font-size: 30px;
    color: white;
    cursor: pointer;
}


.logo-contato img {
    width: 300px;
    height: 300px;
    margin: 20px;
}

.sobre-nos {
    margin: 20px;
    background-color: #107553;
    border-radius: 20px;
    padding: 30px;
}

.sobre-nos p {
    font-size: 20px;
}

.formulario-contato {
    /* border: 1px solid red; */
    margin: 20px;
    padding: 30px;
    background: #107553;
    border-radius: 20px;
    display: flex;    
    justify-content: center;
}

.form {
    border: 5px solid white;
    border-radius: 10px;
    padding: 20px;
}



/* */
@media screen and (max-width: 756px) {
    
}
</style>