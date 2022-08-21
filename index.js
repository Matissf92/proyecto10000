const randomGenerator = () => {
  const resultado1 = random(1, 6);
  const resultado2 = random(1, 6);
  const resultado3 = random(1, 6);
  const resultado4 = random(1, 6);
  const resultado5 = random(1, 6);
  const resultado6 = random(1, 6);

  let dados = [
    resultado1,
    resultado2,
    resultado3,
    resultado4,
    resultado5,
    resultado6,
  ];

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
  resultadoAnalisis.innerHTML = `Tríos ${triplicados}`;

  let calculoPuntuacion = 0;

  for (x of triplicados) {
    calculoPuntuacion = x * 100;
  }

  puntuacion.innerHTML = `Tu puntuación actual es ${calculoPuntuacion}`;
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const button = document.getElementById("lanzar-button");
button.addEventListener("click", randomGenerator);
