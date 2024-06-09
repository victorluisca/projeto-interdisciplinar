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
    localReserva: "Gramado, Brazil",
    botaoCompartilhar: "Share",
    tituloDono: "Dome hosted",
    dono: "by Dorothy",
    detalhesReservaConvidados: "3 guests",
    detalhesReservaQuartos: "1 bedroom",
    detalhesReservaCamas: "1 bed",
    detalhesReservaBanheiros: "1 bathroom",
    temPiscina: "Dive right in",
    subtituloTemPiscina:
      "This is one of the few places in the area with a pool.",
    experienciaHospedagem: "Experienced host",
    subtituloExperienciaHospedagem: "Dorothy has 720 reviews for other places.",
    titulOndeDormir: "Where you'll sleep",
    subtituloOndeDormir: "Bedroom",
    subtituloTipoOndeDormir: "1 double bed",
    tituloServicosOfertados: "What this place offers",
    subtituloServicosWifi: "Wi-fi",
    subtituloServicosTv: "Tv",
    subtituloServicosExercicio: "Exercise Space",
    subtituloServicosEstadiasLongas: "long-term stays allowed",
    subtituloServicosPiscina: "Pool",
    subtituloServicosAirCondicionado: "Air conditioning",
    subtituloServicosCafe: "Breakfast",
    subtituloTermosServico:
      "Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.",
    linkLeiaMais: "Learn more",
    precoHotel: "Per Night",
    labelCheckin: "Check in",
    labelCheckout: "Check out",
    labelConvidados: "Guests",
    tituloPoliticas: "cancellation policies",
    labelNaoReembolsavel: "Non-refundable",
    labelReembolsavel: "Refundable",
    subtituloLabelReembolsavel:
      "Free cancellation before 22 Jun. Cancel before check in on 23 Jun for a partial refund.",
    botaoReservar: "Reserve",
    subtituloBotaoReserva: "You won't be charged yet",
    detalhesPreco: "Show price details",
    tituloPosTaxas: "Total before taxes",
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
    localReserva: "Gramado, Brasil",
    botaoCompartilhar: "Compartilhar",
    tituloDono: "Casa hospedada",
    dono: "por Dorothy",
    detalhesReservaConvidados: "3 convidados",
    detalhesReservaQuartos: "1 quarto",
    detalhesReservaCamas: "1 cama",
    detalhesReservaBanheiros: "1 banheiro",
    temPiscina: "Pule com tudo",
    subtituloTemPiscina: "Esta é uma das poucas áreas com uma piscina.",
    experienciaHospedagem: "Anfitrião experiente",
    subtituloExperienciaHospedagem:
      "Dorothy tem 720 avaliações por outras hospedagens.",
    titulOndeDormir: "Onde você vai dormir",
    subtituloOndeDormir: "Quarto",
    subtituloTipoOndeDormir: "1 cama de casal",
    tituloServicosOfertados: "O que o lugar oferece",
    subtituloServicosWifi: "Wi-fi",
    subtituloServicosTv: "Televisão",
    subtituloServicosExercicio: "Espaço para exercícios",
    subtituloServicosEstadiasLongas: "Longas estadias permitidas",
    subtituloServicosPiscina: "Piscina",
    subtituloServicosAirCondicionado: "Ar-condicionado",
    subtituloServicosCafe: "Café da manhã",
    subtituloTermosServico:
      "Toda reserva inclui proteção gratuita contra cancelamentos do anfitrião, informações incorretas no anúncio e outros problemas, como dificuldades no check-in.",
    linkLeiaMais: "Leia mais",

    precoHotel: "Por Diária",
    labelCheckin: "Check-in",
    labelCheckout: "Check-out",
    labelConvidados: "Convidados",
    tituloPoliticas: "políticas de cancelamento",
    labelNaoReembolsavel: "Não reembolsável",
    labelReembolsavel: "Reembolsável",
    subtituloLabelReembolsavel:
      "Cancelamento gratuito com 1 semana de antecedência.",
    botaoReservar: "Reservar",
    subtituloBotaoReserva: "Você ainda não será cobrado.",
    detalhesPreco: "Mostrar detalhes da reserva",
    tituloPosTaxas: "Total após taxas",
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

  document.querySelector("#localReserva").textContent =
    translation.localReserva;
  document.querySelector("#botaoCompartilhar").textContent =
    translation.botaoCompartilhar;
  document.querySelector("#tituloDono").textContent = translation.tituloDono;
  document.querySelector("#dono").textContent = translation.dono;
  document.querySelector("#detalhesReservaConvidados").textContent =
    translation.detalhesReservaConvidados;
  document.querySelector("#detalhesReservaQuartos").textContent =
    translation.detalhesReservaQuartos;
  document.querySelector("#detalhesReservaCamas").textContent =
    translation.detalhesReservaCamas;
  document.querySelector("#detalhesReservaBanheiros").textContent =
    translation.detalhesReservaBanheiros;
  document.querySelector("#temPiscina").textContent = translation.temPiscina;
  document.querySelector("#subtituloTemPiscina").textContent =
    translation.subtituloTemPiscina;
  document.querySelector("#experienciaHospedagem").textContent =
    translation.experienciaHospedagem;
  document.querySelector("#subtituloExperienciaHospedagem").textContent =
    translation.subtituloExperienciaHospedagem;
  document.querySelector("#titulOndeDormir").textContent =
    translation.titulOndeDormir;
  document.querySelector("#subtituloOndeDormir").textContent =
    translation.subtituloOndeDormir;
  document.querySelector("#subtituloTipoOndeDormir").textContent =
    translation.subtituloTipoOndeDormir;
  document.querySelector("#tituloServicosOfertados").textContent =
    translation.tituloServicosOfertados;
  document.querySelector("#subtituloServicosWifi").textContent =
    translation.subtituloServicosWifi;
  document.querySelector("#subtituloServicosTv").textContent =
    translation.subtituloServicosTv;
  document.querySelector("#subtituloServicosExercicio").textContent =
    translation.subtituloServicosExercicio;
  document.querySelector("#subtituloServicosEstadiasLongas").textContent =
    translation.subtituloServicosEstadiasLongas;
  document.querySelector("#subtituloServicosPiscina").textContent =
    translation.subtituloServicosPiscina;
  document.querySelector("#subtituloServicosAirCondicionado").textContent =
    translation.subtituloServicosAirCondicionado;
  document.querySelector("#subtituloServicosCafe").textContent =
    translation.subtituloServicosCafe;
  document.querySelector("#subtituloTermosServico").textContent =
    translation.subtituloTermosServico;
  document.querySelector("#linkLeiaMais").textContent =
    translation.linkLeiaMais;

  document.querySelector("#precoHotel").textContent = translation.precoHotel;
  document.querySelector("#labelCheckin").textContent =
    translation.labelCheckin;
  document.querySelector("#labelCheckout").textContent =
    translation.labelCheckout;
  document.querySelector("#labelConvidados").textContent =
    translation.labelConvidados;
  document.querySelector("#tituloPoliticas").textContent =
    translation.tituloPoliticas;
  document.querySelector("#labelNaoReembolsavel").textContent =
    translation.labelNaoReembolsavel;
  document.querySelector("#labelReembolsavel").textContent =
    translation.labelReembolsavel;
  document.querySelector("#subtituloLabelReembolsavel").textContent =
    translation.subtituloLabelReembolsavel;
  document.querySelector("#botaoReservar").textContent =
    translation.botaoReservar;
  document.querySelector("#subtituloBotaoReserva").textContent =
    translation.subtituloBotaoReserva;
  document.querySelector("#detalhesPreco").textContent =
    translation.detalhesPreco;
  document.querySelector("#tituloPosTaxas").textContent =
    translation.tituloPosTaxas;
}

function loadPreferredLanguage() {
  const preferredLanguage = localStorage.getItem("preferredLanguage") || "en";
  changeLang(preferredLanguage);
}

document.addEventListener("DOMContentLoaded", loadPreferredLanguage);
