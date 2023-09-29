// Botão de login do navbar
const btnLogin = document.querySelector('.btn-login');

btnLogin.addEventListener('click', () => {
    banner.classList.add('banner-rm');
    pesquisa.classList.remove('pesquisa-search');
    pesquisa.classList.add('pesquisa-rm');
    info.classList.add('info-rm');

    //Produtos
    produtos.classList.remove('produtos-ativo');
    produtos.classList.add('produtos');

    //Cadastro
    formCadastro.classList.remove('formulario-cadastro-ativo');
    formCadastro.classList.add('formulario-cadastro');


    formLogin.classList.remove('formulario-login');
    formLogin.classList.add('formulario-login-ativo');
});