const app = document.getElementById("app");
const elementos = {
  farinha: document.getElementById("farinha"),
  agua: document.getElementById("agua"),
  sal: document.getElementById("sal"),
  fermento: document.getElementById("fermento"),
  azeite: document.getElementById("azeite"),
  acucar: document.getElementById("acucar"),
  numeroDePizzas: document.getElementById("numeroDePizzas"),
  pesoDaMassa: document.getElementById("pesoDaMassa"),
  hidratacao: document.getElementById("hidratacao"),
  calculaBtn: document.getElementById("calculaBtn"),
};

const receitaBase = {
  farinha: 1000,
  agua: 593,
  sal: 25,
  fermento: 4,
  azeite: 30,
  acucar: 10,
}

function calculaPesoFarinha(hidratacao, pesoTotal) {
  const solidos = pesoTotal / (1 + hidratacao / 100);
  const farinha = (solidos * 1000) / 1039;
  return Math.round(farinha);
}

const calculaPesoPercentual = (percentual, farinha) => Math.round(farinha * percentual / 100);

function calculaPesos(hidratacao, numeroDePizzas, pesoDaMassa) {
  const pesoTotal = numeroDePizzas * pesoDaMassa;

  const pesofarinha = calculaPesoFarinha(hidratacao, pesoTotal);
  const pesoSal = calculaPesoPercentual(2.5, pesofarinha);
  const pesoFermento = calculaPesoPercentual(0.4, pesofarinha);
  const pesoAzeite = calculaPesoPercentual(3, pesofarinha);
  const pesoAcucar = calculaPesoPercentual(1, pesofarinha);

  const pesoAgua = pesoTotal - pesofarinha - pesoSal - pesoFermento - pesoAzeite - pesoAcucar;

  return {
    farinha: pesofarinha,
    agua: pesoAgua,
    sal: pesoSal,
    fermento: pesoFermento,
    azeite: pesoAzeite,
    acucar: pesoAcucar,
  }
}

const renderizaValores = (pesos) => {
  for (const key in pesos) {
    elementos[key].textContent = pesos[key];
  }
};

calculaBtn.addEventListener("click", () => {
  const hidratacao = Number(elementos.hidratacao.value);
  const numeroDePizzas = Number(elementos.numeroDePizzas.value);
  const pesoDaMassa = Number(elementos.pesoDaMassa.value);

  const pesos = calculaPesos(hidratacao, numeroDePizzas, pesoDaMassa);
  renderizaValores(pesos);
});
