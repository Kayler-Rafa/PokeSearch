function consultarPOKE() {
  var pokeInput = document.getElementById("inputPOKE").value.toLowerCase();
  var url = "https://pokeapi.co/api/v2/pokemon/" + pokeInput;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (!data.erro) {
        preencherTabelaPOKE(data);
      } else {
        alert("Pokemon não encontrado.");
      }
    })
    .catch(error => {
      console.error("Erro ao consultar o Pokemon:", error);
    });
}
function preencherTabelaPOKE(data) {
  var tabela = document.getElementById("tabelaPOKE");
  var novaLinha = tabela.insertRow(1);
  var celulaNome = novaLinha.insertCell(0);
  var celulaTipo = novaLinha.insertCell(1);
  var celulaPeso = novaLinha.insertCell(2);
  var celulaTamanho = novaLinha.insertCell(3);
  var celulaFoto = novaLinha.insertCell(4);

  celulaNome.innerHTML = data.name;
  celulaTipo.innerHTML = data.types.map(type => type.type.name).join(", ");
  celulaPeso.innerHTML = data.weight + " Kg";
  celulaTamanho.innerHTML = data.height + " m";
  celulaFoto.innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}"width="80">`;
}