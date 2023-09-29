// lista categoria de carros 
const listaDeCategorias = document.querySelectorAll('.card');
const categoriaPequeno = document.querySelectorAll('.pequeno');
const categoriaMedio = document.querySelectorAll('.medio');
const categoriaGrande = document.querySelectorAll('.grande');
const categoriaSuv = document.querySelectorAll('.suv');

// Formulario pesquisa
const formulario = document.querySelector('#dados');

//  Cancelando evento de atualizar
formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault();

    //pegando as informações da categoria e atribuindo em um array
    const opt = [
        document.querySelector('#categoria')
    ]

    opt.forEach(categoria => {
        if(categoria.value === 'pequeno'){
            produtos.classList.add('produtos-ativo');
            for(let i = 0; i < listaDeCategorias.length; i++){
                listaDeCategorias[i].classList.remove('pequeno');
                listaDeCategorias[i].classList.add('pequeno-ativo');
                
            }
        }
        else if(categoria.value === 'medio'){
            produtos.classList.add('produtos-ativo');
            for(let i = 0; i < categoriaMedio.length; i++){
                categoriaMedio[i].classList.remove('medio');
                categoriaMedio[i].classList.add('medio-ativo');
            }
            console.log(listaDeCategorias);
        }
        else if(categoria.value === 'grande'){
            produtos.classList.add('produtos-ativo')
            for(let i = 0; i < categoriaGrande.length; i++){
                categoriaGrande[i].classList.remove('grande');
                categoria.Grande[i].classList.add('grande-ativo');
            }
            
        }
        else{
            produtos.classList.add('produtos-ativo');
            for(let i = 0; i < categoriaSuv.length; i++){
                categoriaSuv[i].classList.remove('suv');
                categoriaSuv[i].classList.add('suv-ativo');
            }
        }

    });

    //Adicionando evento ao botao de pesquisar
    const btnConfirmar = document.querySelector('#btn-confirmar');
    btnConfirmar.addEventListener('click', function(){

    });

    

})


