const translations = {
  en: {
    linguagemIngles: "English",
    linguagemPortugues: "Portuguese",
    botaoHeaderEntrar: "Login",
    hoteisNavHeader: "Hotels",
    servicosNavHeader: "Services",
    sobrenosNavHeader: "About us",
    direitosFooter: "Smaug. All rights reserved.",
    feedbackFooter: "We want your feedback",
    voltarFooter: "BACK TO THE TOP",
    precoHotel1: "Per Night",
    precoHotel2: "Per Night",
    precoHotel3: "Per Night",
    precoHotel4: "Per Night",
    precoHotel5: "Per Night",
    precoHotel6: "Per Night",
    precoHotel7: "Per Night",
    precoHotel8: "Per Night",
    precoHotel9: "Per Night",
    precoHotel10: "Per Night",
    precoHotel11: "Per Night",
    precoHotel12: "Per Night",
  },

  pt: {
    linguagemIngles: "Inglês",
    linguagemPortugues: "Português",
    botaoHeaderEntrar: "Entrar",
    hoteisNavHeader: "Hoteis",
    servicosNavHeader: "Serviços",
    sobrenosNavHeader: "Sobre nós",
    direitosFooter: "Smaug. Todos os direitos reservados.",
    feedbackFooter: "Nós queremos seu feedback",
    voltarFooter: "VOLTAR AO TOPO",
    precoHotel1: "Por Diária",
    precoHotel2: "Por Diária",
    precoHotel3: "Por Diária",
    precoHotel4: "Por Diária",
    precoHotel5: "Por Diária",
    precoHotel6: "Por Diária",
    precoHotel7: "Por Diária",
    precoHotel8: "Por Diária",
    precoHotel9: "Por Diária",
    precoHotel10: "Por Diária",
    precoHotel11: "Por Diária",
    precoHotel12: "Por Diária",
  },
};

document
  .querySelector("#opcaoIngles")
  .addEventListener("click", () => changeLang("en"));
document
  .querySelector("#opcaoPortugues")
  .addEventListener("click", () => changeLang("pt"));

function changeLang(lang) {
  localStorage.setItem("preferredLanguage", lang);

  const translation = translations[lang];
  document.querySelector("#linguagemIngles").textContent =
    translation.linguagemIngles;
  document.querySelector("#linguagemPortugues").textContent =
    translation.linguagemPortugues;
  document.querySelector("#botaoHeaderEntrar").textContent =
    translation.botaoHeaderEntrar;
  document.querySelector("#hoteisNavHeader").textContent =
    translation.hoteisNavHeader;
  document.querySelector("#servicosNavHeader").textContent =
    translation.servicosNavHeader;
  document.querySelector("#sobrenosNavHeader").textContent =
    translation.sobrenosNavHeader;
  document.querySelector("#direitosFooter").textContent =
    translation.direitosFooter;
  document.querySelector("#feedbackFooter").innerHTML =
    translation.feedbackFooter;
  document.querySelector("#voltarFooter").textContent =
    translation.voltarFooter;
  document.querySelector("#precoHotel1").textContent = translation.precoHotel1;
  document.querySelector("#precoHotel2").textContent = translation.precoHotel2;
  document.querySelector("#precoHotel3").textContent = translation.precoHotel3;
  document.querySelector("#precoHotel4").textContent = translation.precoHotel4;
  document.querySelector("#precoHotel5").textContent = translation.precoHotel5;
  document.querySelector("#precoHotel6").textContent = translation.precoHotel6;
  document.querySelector("#precoHotel7").textContent = translation.precoHotel7;
  document.querySelector("#precoHotel8").textContent = translation.precoHotel8;
  document.querySelector("#precoHotel9").textContent = translation.precoHotel9;
  document.querySelector("#precoHotel10").textContent =
    translation.precoHotel10;
  document.querySelector("#precoHotel11").textContent =
    translation.precoHotel11;
  document.querySelector("#precoHotel12").textContent =
    translation.precoHotel12;
}

function loadPreferredLanguage() {
  const preferredLanguage = localStorage.getItem("preferredLanguage") || "en";
  changeLang(preferredLanguage);
}

document.addEventListener("DOMContentLoaded", loadPreferredLanguage);
