const randomGenerator = () => {
//   const resultado1 = random(1, 6);
//   const resultado2 = random(1, 6);
//   const resultado3 = random(1, 6);
//   const resultado4 = random(1, 6);
//   const resultado5 = random(1, 6);
//   const resultado6 = random(1, 6);

  let dados = [1,1,1,5,5,5];

  let arrayUnos = [];
  let arrayCincos = [];

  for (dado of dados) {
    if (dado === 1) {
        arrayUnos.push(dado);
    } else if (dado === 5) {
        arrayCincos.push(dado);
    }
  }

  resultadoAnalisisUnosCincos.innerHTML = `Tienes ${arrayUnos.length} uno(s) y ${arrayCincos.length} cinco(s)`;

  let resultadoUnosCincos = ((100 * arrayUnos.length) + (50 * arrayCincos.length));

  let triplicados = [];
  const dadosOrdenados = dados.sort();

  for (let i = 0; i < dados.length; i++) {
    if (
      dadosOrdenados[i] === dadosOrdenados[i + 1] &&
      dadosOrdenados[i + 1] === dadosOrdenados[i + 2]
    ) {
      triplicados.push(dadosOrdenados[i]);
    }
  }

  resultado.innerHTML = `Tirada ${dados}`;
  resultadoAnalisisTrios.innerHTML = `Trío(s) ${triplicados}`;

  let calculoPuntuacionTrios = 0;

  for (x of triplicados) {
    if (x === 1) {
        calculoPuntuacionTrios += 1000;
        resultadoUnosCincos = (50 * arrayCincos.length);
    } else if (x === 5) {
        resultadoUnosCincos = (100 * arrayUnos.length);
        calculoPuntuacionTrios += x * 100;
    } else {
        calculoPuntuacionTrios += x * 100;
    }
  }

  let puntuacionFinal = calculoPuntuacionTrios + resultadoUnosCincos;

  puntuacion.innerHTML = `Tu puntuación actual es ${puntuacionFinal}`;
};

// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

const button = document.getElementById("lanzar-button");
button.addEventListener("click", randomGenerator);
