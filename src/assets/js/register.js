//buscando botao de cadastro
const btnCadastro = document.querySelector('.btn-cadastro');

// Buscando formulario de cadastro
const formularioAutenticacao = document.querySelector('#formulario-autenticacao');

// Adicinando evento de click
btnCadastro.addEventListener('click', () =>{
    formularioAutenticacao.classList.add('formulario-autenticacao-ativo');
    banner.classList.add('banner-rm');
    info.classList.add('info-rm');
});