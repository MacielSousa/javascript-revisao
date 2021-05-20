/* 
//Exemplo 1
const menu ={
    seletor: '.principal',
};
console.log(menu.seletor.toUpperCase())
*/

/*
//Exemplo 2
function upperCase(nome){
    return nome.toUpperCase()
}
console.log(upperCase('francisco maciel ferreira de sousa'))
*/

/*
//Exemplo 3 arrow fuction 
const upperName =  (nome) => {
    return nome.toUpperCase();
};
*/

/*
//Função 4 função anonima
const upperName = (nome) =>  nome.toUpperCase();
console.log(upperName('francisco maciel ferreira de sousa'))
*/

/*
//DESTRUCTION, tirar itens de um array
//Exmplo 1
function printEvent({clientX, clientY}){
    //const {clientX, clientY} = event //Descontruindo o objeto evento
    console.log(clientX, clientY)
}
document.addEventListener('click', printEvent)

//Destrction Exemplo 2
const frutas = ['banana', 'uva','maçã']
const [fruta1, fruta2, fruta3] = frutas
console.log(fruta2)

//Destruction Exemplo 3
const useQuadrado = [
    4,
    function (lado) {
        return 4 * lado;
    },
];
const [lados, perimetro] = useQuadrado;
console.log(lados)
console.log(perimetro(10))
*/

//REST, juntar itens tranformando-os em um array
//Operado Rest ..., tranforma conjuntos de dados em um array
function showList(empresa, ...clientes){
    clientes.forEach(cliente => {
        console.log(cliente, empresa)
    })
}
//showList('Ulbra', ['Tassio', 'Silas'])//Sem o Rest 
//showList('Ulbra', 'Philips', 'Tassio')//Com Rest

//SPRED, espelha itens de um array
//...array, ele é usado na frente de um array para espalhar os itens do array
//Exemplo 1
const numeros = [10, 30, 5]
const maior = Math.max(...numeros)
console.log(maior)
//Exemplo 2
const numeros2 = [90, ...numeros, 800, 60];
console.log(numeros2)
//Exemplo 3
const carro = {
    cor: 'Amarelo',
    portas: 3,
}
carroAno = { ...carro, ano: 2021 }

console.log(carroAno)