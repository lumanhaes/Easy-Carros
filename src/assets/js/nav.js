const linkInicio = document.querySelector('#link-inicio');

linkInicio.addEventListener('click', () =>{
    //Login
    formLogin.classList.remove('formulario-login-ativo');
    formLogin.classList.add('formulario-login');

    //Cadastro
    formCadastro.classList.remove('formulario-cadastro-ativo');
    formCadastro.classList.add('formulario-cadastro');

    //produtos
    produtos.classList.remove('produtos-ativo');
    produtos.classList.add('produtos');

    //Banner
    banner.classList.remove('banner-rm');
    banner.classList.add('banner');

    //Search
    pesquisa.classList.remove('pesquisa-search');
    pesquisa.classList.remove('pesquisa-rm');
    pesquisa.classList.add('pesquisa');

    //Info
    info.classList.add('container-info');
    info.classList.remove('info-rm');
    
});