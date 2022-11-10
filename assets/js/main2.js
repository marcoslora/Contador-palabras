const textChange = document.getElementById("text-change");
const btnInput = document.getElementById("btn-input");
const textoName = document.getElementById("text-name");
btnInput.addEventListener("click", function () {
  const inputWord = document.getElementById("text-input").value.toUpperCase();
  textChange.textContent = "";
  textoName.textContent =
    inputWord.charAt(0).toUpperCase() + inputWord.slice(1);
  let palabraContador = {};
  for (let i = 0; i < inputWord.length; i++) {
    const letra = inputWord[i];
    if (!palabraContador[letra]) {
      palabraContador[letra] = 1;
    } else {
      palabraContador[letra]++;
    }
  }
  const valores = Object.values(palabraContador).reverse();
  const llaves = Object.keys(palabraContador).reverse();
  for (let i = 0; i < valores.length; i++) {
    textChange.textContent = `Tiene ${valores[i]} ${llaves[i].toUpperCase()}, ${
      textChange.textContent
    }`;
  }
});
