const randomGenerator = () => {
  // const resultado1 = random(1, 6);
  // const resultado2 = random(1, 6);
  // const resultado3 = random(1, 6);
  // const resultado4 = random(1, 6);
  // const resultado5 = random(1, 6);
  // const resultado6 = random(1, 6);

  let dados = [1, 1, 1, 6, 4, 6]; //para hacer testeos
  // let dados = [
  //   resultado1,
  //   resultado2,
  //   resultado3,
  //   resultado4,
  //   resultado5,
  //   resultado6,
  // ];
  
//idea: llenar los arrays de 1s y 5s de 0 en cada posiciòn
//de esa forma, si existen 1s y 5s modificamos las posiciones, de esa forma no saldrá NaN

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

  let resultadoUnosCincos = 100 * arrayUnos.length + 50 * arrayCincos.length;

  let triplicados = [];
  const dadosOrdenados = dados.sort();

  for (let i = 0; i < dados.length; i++) {
    if (
      dadosOrdenados[i] === dadosOrdenados[i + 1] &&
      dadosOrdenados[i + 1] === dadosOrdenados[i + 2]
    ) {
      triplicados.push(dadosOrdenados[i]);
      i = i + 1; 
    }
  }

  resultado.innerHTML = `Tirada ${dados}`;
  resultadoAnalisisTrios.innerHTML = `Trío(s) ${triplicados}`;

  let calculoPuntuacionTrios = 0;



  for (let y = 0; y < triplicados.length; y++) {
    if (triplicados[y] === 1 && triplicados[y + 1] === 5) {
      calculoPuntuacionTrios = 1500;
      resultadoUnosCincos = 0;
      break;
    } else {
      if (triplicados[y] === 1 && triplicados.length === 1) {
        resultadoUnosCincos = 50 * arrayCincos.length //+ 100 * arrayUnos[y+3];
        calculoPuntuacionTrios += 1000;
      } else {
        if (triplicados[y] === 1 && triplicados.length === 2) {
          resultadoUnosCincos = 50 * arrayCincos.length;
          calculoPuntuacionTrios += 1000 + triplicados[y + 1] * 100;
        } else {
          if (triplicados[y] === 5 && y === 0 && triplicados.length === 1) {
            resultadoUnosCincos = 100 * arrayUnos.length;
            calculoPuntuacionTrios += 500;
          } else {
            if (triplicados[y] === 5 && y === 0 && triplicados.length === 2) {
              resultadoUnosCincos = 100 * arrayUnos.length;
              calculoPuntuacionTrios += 500 + triplicados[y + 1] * 100;
            } else {
              if (triplicados[y] === 5 && y === 1) {
                resultadoUnosCincos = 100 * arrayUnos.length;
                calculoPuntuacionTrios += 500 + triplicados[y - 1] * 100;
              } else {
                calculoPuntuacionTrios += triplicados[y] * 100;
              }
            }
          }
        }
      }
    }
  }

  let puntuacionFinal = calculoPuntuacionTrios + resultadoUnosCincos;

  puntuacion.innerHTML = `Tu puntuación actual es ${puntuacionFinal}`;

  console.log(calculoPuntuacionTrios);
  console.log(resultadoUnosCincos);
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const button = document.getElementById("lanzar-button");
button.addEventListener("click", randomGenerator);
