// ================= JS (script.js) =================

const CONFIG = {
  name: "Bianca Rodrigues",
  role: "Vendedora",
  bio: "Moda feita pra você.",
  photo: "bibi.png",
  links: [
    { icon: "📱", label: "WhatsApp", url: "https://wa.me/5519983515922" },
    { icon: "📸", label: "Instagram", url: "https://www.instagram.com/jamarcosmopolis?igsh=MXJzdm12Z2ViZGl0eQ==" },
  // render  { icon: "💼", label: "LinkedIn", url: "https://linkedin.com" },
    { icon: "✉️", label: "E-mail", url: "mailto:biancarodriguesmelo06@gmail.com" },
// render{ icon: "📍", label: "Localização", url: "https://maps.google.com" },
// render    { icon: "🌐", label: "Site", url: "https://crazyheart.netlify.app" }
  ]
};

const topActions = document.getElementById("topActions");

// Botão salvar contato
const saveBtn = document.createElement("div");
saveBtn.className = "top-btn";
saveBtn.innerHTML = "📇";
saveBtn.onclick = downloadVCard;
topActions.appendChild(saveBtn);

// WhatsApp e Instagram (pegando do CONFIG)
CONFIG.links.forEach(link => {
  if (link.label === "WhatsApp" || link.label === "Instagram") {
    const btn = document.createElement("div");
    btn.className = "top-btn";
    btn.innerHTML = link.icon;
    btn.onclick = () => window.open(link.url, "_blank");
    topActions.appendChild(btn);
  }
});

// render

document.getElementById("name").innerText = CONFIG.name;
document.getElementById("role").innerText = CONFIG.role;
document.getElementById("bio").innerText = CONFIG.bio;
document.getElementById("photo").src = CONFIG.photo;

const linksContainer = document.getElementById("links");
CONFIG.links.forEach(link => {
  const a = document.createElement("a");
  a.href = link.url;
  a.className = "link";
  a.target = "_blank";
  a.innerHTML = `<div>${link.icon}</div><span>${link.label}</span>`;
  linksContainer.appendChild(a);
});

function downloadVCard() {
  const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${CONFIG.name}\nTITLE:${CONFIG.role}\nEND:VCARD`;
  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "contato.vcf";
  a.click();
}

function shareProfile() {
  if (navigator.share) {
    navigator.share({
      title: CONFIG.name,
      text: CONFIG.bio,
      url: window.location.href
    });
  } else {
    alert("Compartilhamento não suportado");
  }
}
