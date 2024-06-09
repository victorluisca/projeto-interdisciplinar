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
    tituloLocal: "Location",
    detalhesLocal: "Brazil",
    tituloCheckin: "Check in",
    detalhesCheckin: "10 Jun 2021",
    tituloCheckout: "Check out",
    detalhesCheckout: "15 Jun 2021",
    tituloQuartos: "Rooms for",
    detalhesQuarto: "1 room, 2 guests",
    botaoBusca: "Search",
    tituloCarrosel: "Find your perfect place to stay",
    subtituloCarrosel:
      "Discover the finest destinations and carefully selected accommodations to ensure a comfortable and memorable stay.",
    botaoAssistir: "Watch video",
    tituloHoteis: "Our most popular Hotels",
    subtituloHoteis:
      "Explore our selection and find the perfect hotel for your next trip.",
    linkHoteis: "View All",
    tituloServicos: "We do our best to provide you with excellent facilities",
    subtituloServicos:
      "Customer service is a top priority at our hotels. From check in to check out, you will be treated with attention and cordiality, ensuring a personalized and enjoyable experience.",
    botaoServicos: "Contact now",
    trabalhoServicos: "Private Workspace",
    estacionamentoServicos: "Parking Area",
    cafeServicos: "Breakfast",
    wifiServicos: "Free Wifi",
    eletricidadeServicos: "Free Electricity",
    piscinaServicos: "Swimming Pool",
    exercicioServicos: "Exercise Space",
    outrosServicos: "Other Service",
    tituloSobreNos: "Discover our History",
    subtituloSobreNos01:
      "The name 'Smaug' was chosen in homage to the legendary dragon of The Hobbit, known for hoarding treasures in its cave. Similarly, Smaug was created to offer travelers a treasure trove of accommodation options.",
    subtituloSobreNos02:
      "Since its launch, Smaug has stood out for its innovative approach and focus on user experience. With an intuitive and user-friendly interface, Smaug quickly became known for its speed and efficiency. Travelers could find and book accommodations within minutes, eliminating the need for hours of research and comparison.",
    botaoExplore: "Explore more",
    feedbackCliente:
      "My experience with the Smaug was exceptional! As a busy individual, I always value convenience and efficiency, and the service provided by the website exceeded my expectations. The user-friendly interface allowed me to find and book a suitable hotel for my business trip within minutes, saving me time and effort.",
    cargoCliente: "Sales Manager",
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
    tituloLocal: "Localização",
    detalhesLocal: "Brasil",
    tituloCheckin: "Check-in",
    detalhesCheckin: "10 Jun 2021",
    tituloCheckout: "Check-out",
    detalhesCheckout: "15 Jun 2021",
    tituloQuartos: "Quartos para",
    detalhesQuarto: "1 quarto, 2 convidados",
    botaoBusca: "Buscar",
    tituloCarrosel: "Encontre o lugar perfeito para ficar",
    subtituloCarrosel:
      "Descubra os melhores destinos e acomodações cuidadosamente selecionadas para garantir uma estadia confortável e memorável.",
    botaoAssistir: "Assista ao vídeo",
    tituloHoteis: "Nossos hoteis mais populares",
    subtituloHoteis:
      "Explore nossa seleção e encontre o hotel perfeito para sua próxima viagem.",
    linkHoteis: "Ver tudo",
    tituloServicos: "Proporcionamos as melhores instalações",
    subtituloServicos:
      "O atendimento ao cliente é uma prioridade máxima em nossos hotéis. Do check-in ao check-out, você será tratado com atenção e cordialidade, garantindo uma experiência personalizada e agradável.",
    botaoServicos: "Contate-nos já",
    trabalhoServicos: "Espaço de Trabalho",
    estacionamentoServicos: "Estacionamento",
    cafeServicos: "Café da manhã",
    wifiServicos: "Wi-fi",
    eletricidadeServicos: "Eletricidade grátis",
    piscinaServicos: "Piscina",
    exercicioServicos: "Academia",
    outrosServicos: "Outros serviços",
    tituloSobreNos: "Descubra nossa história",
    subtituloSobreNos01:
      "O nome 'Smaug' foi escolhido em homenagem ao lendário dragão de O Hobbit, conhecido por acumular tesouros em sua caverna. Da mesma forma, Smaug foi criado para oferecer aos viajantes um tesouro de opções de acomodação.",
    subtituloSobreNos02:
      "Desde o seu lançamento, Smaug se destacou por sua abordagem inovadora e foco na experiência do usuário. Com uma interface intuitiva e amigável, Smaug rapidamente se tornou conhecido por sua rapidez e eficiência. Os viajantes podiam encontrar e reservar acomodações em questão de minutos.",
    botaoExplore: "Veja mais",
    feedbackCliente:
      "Minha experiência com o Smaug foi excepcional! Como uma pessoa ocupada, sempre valorizo a conveniência e a eficiência, e o serviço fornecido pelo site superou minhas expectativas. A interface amigável me permitiu encontrar e reservar um hotel adequado para minha viagem de negócios em questão de minutos, economizando tempo e esforço.",
    cargoCliente: "Gerente de Vendas",
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
  document.querySelector("#tituloLocal").textContent = translation.tituloLocal;
  document.querySelector("#detalhesLocal").textContent =
    translation.detalhesLocal;
  document.querySelector("#tituloCheckin").textContent =
    translation.tituloCheckin;
  document.querySelector("#detalhesCheckin").textContent =
    translation.detalhesCheckin;
  document.querySelector("#tituloCheckout").textContent =
    translation.tituloCheckout;
  document.querySelector("#detalhesCheckout").textContent =
    translation.detalhesCheckout;
  document.querySelector("#tituloQuartos").textContent =
    translation.tituloQuartos;
  document.querySelector("#detalhesQuarto").textContent =
    translation.detalhesQuarto;
  document.querySelector("#botaoBusca").textContent = translation.botaoBusca;

  document.querySelector("#tituloCarrosel").textContent =
    translation.tituloCarrosel;
  document.querySelector("#subtituloCarrosel").textContent =
    translation.subtituloCarrosel;
  document.querySelector("#botaoAssistir").textContent =
    translation.botaoAssistir;
  document.querySelector("#tituloHoteis").textContent =
    translation.tituloHoteis;
  document.querySelector("#subtituloHoteis").textContent =
    translation.subtituloHoteis;
  document.querySelector("#linkHoteis").textContent = translation.linkHoteis;

  document.querySelector("#tituloServicos").textContent =
    translation.tituloServicos;
  document.querySelector("#subtituloServicos").textContent =
    translation.subtituloServicos;
  document.querySelector("#botaoServicos").textContent =
    translation.botaoServicos;
  document.querySelector("#trabalhoServicos").textContent =
    translation.trabalhoServicos;
  document.querySelector("#estacionamentoServicos").textContent =
    translation.estacionamentoServicos;
  document.querySelector("#cafeServicos").textContent =
    translation.cafeServicos;
  document.querySelector("#wifiServicos").textContent =
    translation.wifiServicos;
  document.querySelector("#eletricidadeServicos").textContent =
    translation.eletricidadeServicos;
  document.querySelector("#piscinaServicos").textContent =
    translation.piscinaServicos;
  document.querySelector("#exercicioServicos").textContent =
    translation.exercicioServicos;
  document.querySelector("#outrosServicos").textContent =
    translation.outrosServicos;

  document.querySelector("#tituloSobreNos").textContent =
    translation.tituloSobreNos;
  document.querySelector("#subtituloSobreNos01").textContent =
    translation.subtituloSobreNos01;
  document.querySelector("#subtituloSobreNos02").textContent =
    translation.subtituloSobreNos02;
  document.querySelector("#botaoExplore").textContent =
    translation.botaoExplore;

  document.querySelector("#feedbackCliente").textContent =
    translation.feedbackCliente;
  document.querySelector("#cargoCliente").textContent =
    translation.cargoCliente;
}

function loadPreferredLanguage() {
  const preferredLanguage = localStorage.getItem("preferredLanguage") || "en";
  changeLang(preferredLanguage);
}

document.addEventListener("DOMContentLoaded", loadPreferredLanguage);
