function criarPagina() {
  abrirLink("https://wa.me/5519983515922");
}

function abrirInstagram() {
  abrirLink("https://www.instagram.com/jamarcosmopolis?igsh=MXJzdm12Z2ViZGl0eQ==");
}

function verOutfits() {
  animarClique();
  setTimeout(() => {
    alert("Aqui entra seu catálogo depois 👀");
  }, 150);
}

function abrirTabela() {
  animarClique();
  setTimeout(() => {
    alert("Aqui pode abrir um modal futuramente");
  }, 150);
}

function abrirTabela() {
  animarClique();
  setTimeout(() => {
    abrirLink("https://wa.me/5519999973370?text=Olá, gostaria de fazer um orçamento para gerar um foolder para mim");
  }, 150);
}

/* FUNÇÃO PADRÃO */
function abrirLink(url) {
  animarClique();
  setTimeout(() => {
    window.open(url, "_blank");
  }, 120);
}

/* MICRO ANIMAÇÃO */
function animarClique() {
  document.body.style.transform = "scale(0.98)";
  setTimeout(() => {
    document.body.style.transform = "scale(1)";
  }, 100);
}

function abrirWhats() {
  abrirLink("https://wa.me/5519983515922");
}

function salvarContato() {
  const contato = `
BEGIN:VCARD
VERSION:3.0
FN:Bianca Rodrigues
TEL;TYPE=CELL:19983515922
END:VCARD
  `;

  const blob = new Blob([contato], { type: "text/vcard" });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "contato.vcf";
  a.click();

  window.URL.revokeObjectURL(url);
}