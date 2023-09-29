// Botão de login do navbar
const btnLogin = document.querySelector('.btn-login');

btnLogin.addEventListener('click', () => {
    banner.classList.add('banner-rm');
    pesquisa.classList.add('pesquisa-rm')
    info.classList.add('info-rm');

    //cadastro
    formCadastro.classList.remove('formulario-cadastro-ativo');
    formCadastro.classList.add('formulario-cadastro');


    formLogin.classList.remove('formulario-login');
    formLogin.classList.add('formulario-login-ativo');
});