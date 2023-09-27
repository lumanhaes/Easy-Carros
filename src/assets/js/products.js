//  section banner
const banner = document.querySelector('#banner');
console.log(banner);
// section pesquisa
const search = document.querySelector('#dados');
// section info
const info = document.querySelector('#info');
console.log(info);
// lista de categorias
const categorias = document.querySelector('#categoria');



// lista categoria de carros 
const categoriaPequeno = document.querySelectorAll('.pequeno');
const categoriaMedio = document.querySelectorAll('.medio');
const categoriaGrande = document.querySelectorAll('.grande');
const categoriaExecutivo = document.querySelectorAll('.executivo');
const categoriaPickup = document.querySelectorAll('.pickup');
const categoriaSuv = document.querySelectorAll('.suv');



// Formulario pesquisa
const formulario = document.querySelector('#dados');

//  Cancelando evento de atualizar
formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault();

    //Pegando o elemento produtos
    const produtos = document.querySelector('.produtos');

    //pegando as informações da categoria e atribuindo em um array
    const opt = [
        document.querySelector('#categoria')
    ]

    //Adicionando evento ao botao de pesquisar
    const btnConfirmar = document.querySelector('#btn-confirmar');
    btnConfirmar.addEventListener('click', () =>{
        //percorrendo o campo com uma função
        //Categoria Pequeno
        opt.forEach(opcao =>{
            if(opcao.value === 'pequeno'){
                banner.classList.add('banner-rm');
                search.classList.add('dados-ativo');
                info.classList.add('info-rm');
                produtos.classList.remove('produtos');
                produtos.classList.add('produtos-ativo');

                for(let i = 0; i < categoriaPequeno.length; i++){
                    console.log(categoriaPequeno[i]);
                    categoriaPequeno[i].classList.remove('pequeno');
                    categoriaPequeno[i].classList.add('pequeno-ativo');
                }
            }
        });

        //Médio
        opt.forEach(opcao =>{
            if(opcao.value === 'medio'){
                banner.classList.add('banner-rm');
                search.classList.add('dados-ativo');
                info.classList.add('info-rm');
                produtos.classList.remove('produtos');
                produtos.classList.add('produtos-ativo');

                for(let i = 0; i < categoriaMedio.length; i++){
                    console.log(categoriaMedio[i]);
                    categoriaMedio[i].classList.remove('medio');
                    categoriaMedio[i].classList.add('medio-ativo');
                }
            }
        });

        //Grande
        opt.forEach(opcao =>{
            if(opcao.value === 'grande'){
                banner.classList.add('banner-rm');
                search.classList.add('dados-ativo');
                info.classList.add('info-rm');
                produtos.classList.remove('produtos');
                produtos.classList.add('produtos-ativo');

                for(let i = 0; i < categoriaGrande.length; i++){
                    console.log(categoriaGrande[i]);
                    categoriaGrande[i].classList.remove('grande');
                    categoriaGrande[i].classList.add('grande-ativo');
                }
            }
        });

        //Executivo
        opt.forEach(opcao =>{
            if(opcao.value === 'executivo'){
                banner.classList.add('banner-rm');
                search.classList.add('dados-ativo');
                info.classList.add('info-rm');
                produtos.classList.remove('produtos');
                produtos.classList.add('produtos-ativo');

                for(let i = 0; i < categoriaExecutivo.length; i++){
                    console.log(categoriaExecutivo[i]);
                    categoriaExecutivo[i].classList.remove('executivo');
                    categoriaExecutivo[i].classList.add('executivo-ativo');
                }
            }
        });

        //Pick-Up
        opt.forEach(opcao =>{
            if(opcao.value === 'pick-up'){
                banner.classList.add('banner-rm');
                search.classList.add('dados-ativo');
                info.classList.add('info-rm');
                produtos.classList.remove('produtos');
                produtos.classList.add('produtos-ativo');
    
                for(let i = 0; i < categoriaPickup.length; i++){
                    console.log(categoriaPickup[i]);
                    categoriaPickup[i].classList.remove('pick-up');
                    categoriaPickup[i].classList.add('pick-up-ativo');
                }
            }
        });

        //SUV
        opt.forEach(opcao =>{
            if(opcao.value === 'suv'){
                banner.classList.add('banner-rm');
                search.classList.add('dados-ativo');
                info.classList.add('info-rm');
                produtos.classList.remove('produtos');
                produtos.classList.add('produtos-ativo');
    
                for(let i = 0; i < categoriaSuv.length; i++){
                    console.log(categoriaSuv[i]);
                    categoriaSuv[i].classList.remove('suv');
                    categoriaSuv[i].classList.add('suv-ativo');
                }
            }
        });
    });

    

})

































//  Botao confirma
const confirma = document.querySelector('#btn-confirmar');

// Criando evento de click


