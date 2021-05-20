function areaQuquadrodo(l){
    return l*l;
} // export exporta a função

function perimetroQuadrado(l){
    return 4*l;
} // export exporta a função

const quadrado = {
    areaQuquadrodo,
    perimetroQuadrado
} //Criando um objeto de quadrado

export default quadrado;//Exportando o objegto quadrado com as funções