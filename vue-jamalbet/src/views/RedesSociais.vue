<script setup lang="ts">
import Instagram from '@/Components/Instagram.vue';
import Twitter from '@/Components/Twitter.vue';
</script>

<template>
    <div class="container-redes">
        <div class="redes-jamal">
            <div class="links">
                <h1>Redes Sociais</h1>
                <p>Nos siga em nossas Redes sociais: <br><br>
                    <a href="https://x.com/">Twitter: @JamalBET </a><i
                        class="fa-brands fa-square-x-twitter"></i><br><br>
                    <a href="https://www.instagram.com/">Instagram: jamalbet </a><i
                        class="fa-brands fa-instagram"></i><br><br>
                    <a href="https://www.youtube.com/">Youtube: jamalbet </a><i
                        class="fa-brands fa-youtube"></i><br><br>
                    <a href="https://www.facebook.com/">Facebook: JamalBET </a><i class="fa-brands fa-facebook"></i>
                </p>
            </div>
            <div class="banner-links">
                <img src="/public/imagens/redes-logo.png">
            </div>
        </div>

        <div class="redes-sociais">
            <!-- <div class="titulos-redes">
                <h1>Redes Sociais <br>
                Parceiros:</h1>
            </div> -->
            <div class="conteudo">
                <Instagram />
</div>
            <div class="conteudo">
                <Twitter />
            </div>


        </div>
    </div>
</template>


<style>
/* .conteudo {
    border: 1px solid red;
} */

.redes-jamal {
    display: flex;
    justify-content: space-between;
    margin: 20px;
    /* border: 1px solid red; */
    background-color: #107553;
    border-radius: 20px;
}

.links {
    padding: 20px;
}

.links a {
    color: white;
    text-decoration: none;

}

.links a:hover {
    background-color: rgba(0, 0, 0, 0.2);
}

.links i {
    font-size: 20px;
}

.banner-links {
    padding: 20px;
}

.banner-links img {
    width: 250px;
}

.redes-sociais {
    display: flex;
    margin: 20px;
    background-color: #107553;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 50px;
    padding: 20px;
}

.titulos-redes {
    margin-bottom: 30px;
    text-align: center;
}

.post {
    display: flex;
    gap: 30px;
}

.instagram blockquote {
    height: 150px;
    width: 150px;
}

.twitter blockquote {
    height: 250px;
    width: 250px;
}


@media screen and (max-width: 756px) {

    .redes-sociais {
        display: block;
    }

    .post {
        flex-direction: column;
        align-items: center;
        justify-content: center
    }
}
</style>