"use strict";
const container = document.getElementById("container");

const sons = {
  A: "boom.wav",
  S: "clap.wav",
  D: "hihat.wav",
  F: "kick.wav",
  G: "openhat.wav",
  H: "ride.wav",
  J: "snare.wav",
  K: "tink.wav",
  L: "tom.wav",
};

const criarDivs = (texto) => {
  const div = document.createElement("div");
  div.classList.add("key");
  div.textContent = texto;
  div.id = texto;
  document.getElementById("container").appendChild(div);
};

const exibir = (sons) => Object.keys(sons).forEach(criarDivs);

const tocarSon = (letra) => {
  const audio = new Audio(`./sounds/${sons[letra]}`);
  audio.play();
};
const adicionarEfeito = (letra) =>
  document.getElementById(letra).classList.add("active");

const removerEfeito = (letra) => {
  const div = document.getElementById(letra);
  const removerActive = () => {
    div.classList.remove("active");
  };
  div.addEventListener("transitionend", removerActive);
};

const ativarDiv = (event) => {
  const letra =
    event.type === "click" ? event.target.id : event.key.toUpperCase();

  const letraPermitida = sons.hasOwnProperty(letra);

  if (letraPermitida) {
    adicionarEfeito(letra);
    tocarSon(letra);
    removerEfeito(letra);
  }
};

exibir(sons);
container.addEventListener("click", ativarDiv);
window.addEventListener("keydown", ativarDiv);
