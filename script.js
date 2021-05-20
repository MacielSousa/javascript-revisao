//Exemplo 1
//Como sonsumir dados de uma API utilizando o fetch
fetch('http://localhost:3003/produtos').then((response) =>
 response.json()
 ).then(json => {console.log('Exemplo 1 ',json)});

 //Exemplo 2
 //Como consumir dados de uma API utilizando o fetch
 async function fetchProdutos(url){
     const response = await fetch(url);
     const json = await response.json();
     return json;
 }

 const produtos = fetchProdutos('http://localhost:3003/produtos');
 console.log('Exemplo 2 ',produtos);