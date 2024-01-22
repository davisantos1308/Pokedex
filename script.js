const btnBusca = document.querySelector('poke__button')
let dados

async function buscarPoke(){
    //Validação de API
    const nomePokemon = document.querySelector('#nome__pokemon').value
    const url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon.toLowerCase()}`
    const resposta = await fetch(url) 

    try{
        dados = await resposta.json()
    } 
    
    catch (err){
       window.alert(`Pokemón não encontrado\n`)
       return
    }
        
    
    console.log(dados)

    //Usar os dados do poukimão, nesse caso é só para imagem
    const img = document.querySelector('#img__pokemon')
    //Execução da imagem
    img.src = dados.sprites.other.home.front_default

    //Informações do poukimão: nome, tipo e habilidades    
    const nome = document.querySelector('#pokemon__info__1')
    const tipo = document.querySelector('#pokemon__info__2')
    const habilidade = document.querySelector('#pokemon__info__3')

    //infoEsq.appendChild(nome)

    nome.innerHTML = `${dados.name.toUpperCase()}`

    tipo.innerHTML = ''
    dados.types.forEach((slot) => {
        tipo.innerHTML += ` ${slot.type.name}<br>`
    })

    const listaDeHabilidades = dados.abilities.map((slot) => {
        return slot.ability.name
    })

    habilidade.innerHTML = listaDeHabilidades.join('<br>') /* Isso serve para
    editar o formato string da lista obj, no caso eu fiz apenas uma quebra de linhas */
}