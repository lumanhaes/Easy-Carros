//buscando botao de cadastro
const btnCadastro = document.querySelector('.btn-cadastro');

// Adicinando evento de click
btnCadastro.addEventListener('click', () =>{
    banner.classList.add('banner-rm');
    pesquisa.classList.remove('pesquisa-search');
    pesquisa.classList.add('pesquisa-rm');
    info.classList.add('info-rm');

    //Produtos
    produtos.classList.remove('produtos-ativo');
    produtos.classList.add('produtos');

    //Login
    formLogin.classList.remove('formulario-login-ativo');
    formLogin.classList.add('formulario-login');

    formCadastro.classList.add('formulario-cadastro-ativo');

});