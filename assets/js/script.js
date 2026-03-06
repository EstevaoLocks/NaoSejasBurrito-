gsap.registerPlugin(ScrollToPlugin); // Pega o plugin ScrollTo do GSAP para permitir animações de rolagem suave

document.querySelectorAll("a[href^='#']").forEach(anchor => { // laço para pegar links retornados em lista
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    // função do GSAP para o scroll
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: this.getAttribute("href"),
        offsetY: 80
      },
      ease: "power3.out"
    });
  });
});

function socialIconsAlert() {
  if (confirm("Ops! Parece que os links das redes sociais ainda não estão configurados. Mas você pode visitar um Github bem maneiro clicando em 'OK' ;D")) {
    window.open("https://github.com/estevaolocks", "_blank");
  }
}

//  Menu Toggle
const hamburgerBtn = document.querySelector(".hamburgerBtn");
const nav = document.getElementsByTagName("nav")[0];
hamburgerBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Tentativa frustrada de diminuir tamanho btn
larguraBtnNewsletter = document.querySelector(".newsletterSection form button").offsetWidth;
document.documentElement.style.setProperty("--inputSize-mediaCell", `${larguraBtnNewsletter}px`);

let initHeight = "";

// função de expandir cards (Receita Semana)
document.querySelectorAll(".verMaisReceitaSemana").forEach(link => { // laço para pegar links retornados em lista
  link.addEventListener("click", function(e) {
    e.preventDefault();
    
    // const card = this.closest("article");
    // card.classList.toggle("active");

    const card = this.closest(".cardReceitaSemana");

    
    if (!card.classList.contains("active")) {
      // Antes de expandir, pega a altura total
      initHeight = card.clientHeight + "px";
      card.style.height = initHeight;
      card.classList.add("active");
      
      // Força um reflow e depois define a altura total
      card.offsetHeight; // Isso força o navegador a recalcular
      card.style.height = card.scrollHeight + "px";

      card.lastElementChild.querySelector(".verMaisPratosTipicos").children[0].innerHTML = "Ver menos";

    } else {
      // Para recolher
      card.style.height = card.clientHeight + 32 + "px";
      card.classList.remove("active");
      
      // Força um reflow e depois define a altura inicial
      card.offsetHeight;
      card.style.height = initHeight; // Altura inicial
      
      card.lastElementChild.querySelector(".verMaisPratosTipicos").children[0].innerHTML = "Ver mais";
    }
  });
});

// função de expandir cards (Receitas Tipicas)
document.querySelectorAll(".verMaisPratosTipicos").forEach(link => { // laço para pegar links retornados em lista
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const card = this.closest("article");

    
    if (!card.classList.contains("active")) {
      // Antes de expandir, pega a altura total
      initHeight = card.clientHeight + "px";
      card.style.height = initHeight;
      card.classList.add("active");
      
      // Força um reflow e depois define a altura total
      card.offsetHeight; // Isso força o navegador a recalcular
      card.style.height = card.scrollHeight + "px";

      card.lastElementChild.querySelector(".verMaisPratosTipicos").children[0].innerHTML = "Ver menos";

    } else {
      // Para recolher
      card.style.height = card.clientHeight + "px";
      card.classList.remove("active");
      
      // Força um reflow e depois define a altura inicial
      card.offsetHeight;
      card.style.height = initHeight; // Altura inicial
      
      card.lastElementChild.querySelector(".verMaisPratosTipicos").children[0].innerHTML = "Ver mais";
    }
  });
})


function ordenarCards() {
  // Alterando sequencia cards v2 (vermelhos)
  const wdtViewport = window.innerWidth;
  
  //procura cards com class do card + v2 e faz um laço
  document.querySelectorAll(".cardPratosTipicos.v2").forEach(cardV2 => {
    
    if (wdtViewport <= 780) {
      const figCard = cardV2.querySelector("figure");
      const articleCard = cardV2.querySelector("article");
    
      cardV2.insertBefore(figCard, articleCard)
    
    }else {
      if (cardV2.firstChild.tagName === 'figure') {
        const figCard = cardV2.querySelector("figure");
        const articleCard = cardV2.querySelector("article");
      
        cardV2.insertBefore(articleCard, figCard)
      };
    };
  });
};

// Deixa cards na ordem correta no inicio da aplicação
ordenarCards();
// Deixa cards na ordem correta sempre que a tela for redimensionada
window.addEventListener('resize', ordenarCards());