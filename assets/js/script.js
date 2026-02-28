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