//buscando botao de cadastro
const btnCadastro = document.querySelector('.btn-cadastro');

// Adicinando evento de click
btnCadastro.addEventListener('click', () =>{
    banner.classList.add('banner-rm');
    pesquisa.classList.add('pesquisa-rm')
    info.classList.add('info-rm');

    //Login
    formLogin.classList.remove('formulario-login-ativo');
    formLogin.classList.add('formulario-login');

    formCadastro.classList.add('formulario-cadastro-ativo');

});