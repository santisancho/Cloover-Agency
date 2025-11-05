/* ========================= NAVBAR SCROLL EFFECT ========================= */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 80);
});

/* ========================= MOBILE MENU TOGGLE ========================= */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Cerrar menú al hacer click en un link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

/* ========================= SMOOTH SCROLL OFFSET ========================= */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  });
});

/* ========================= FADE-IN EFFECT (ESCALONADO) ========================= */
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const children = entry.target.querySelectorAll(".fade-in");
        if (children.length > 0) {
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add("visible");
            }, index * 200);
          });
        } else {
          entry.target.classList.add("visible");
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach((element) => observer.observe(element));
});

/* ========================= CONTACT FORM TO WHATSAPP ========================= */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const consulta = document.getElementById("consulta").value.trim();

    // Número real de Cloover Agency
    const whatsappNumber = "5493489538319"; 

    // Arma el mensaje con saltos de línea
    const message = `Hola! Mi nombre es ${nombre}%0A%0ACorreo: ${email}%0A%0AConsulta: ${consulta}`;

    // Abre WhatsApp con el mensaje
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

    // Limpia el formulario
    contactForm.reset();
  });
}


/* ========================= PARALLAX HERO ========================= */
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroBackground = document.querySelector(".hero-background");
  if (heroBackground) {
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

/* ========================= BODY REVEAL ON LOAD ========================= */
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

/* ========================= SCROLL PROGRESS BAR ========================= */
(() => {
  const progressBar = document.createElement("div");
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, #BDADEA, #E03E59);
    z-index: 9999;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = scrolled + "%";
  });
})();

/* ========================= CARRUSEL CLIENTES ========================= */
const clientesTrack = document.querySelector(".clientes-track");
if (clientesTrack) {
  clientesTrack.innerHTML += clientesTrack.innerHTML;
  let pos = 0;
  const speed = 1;
  let width = 0;

  const updateWidth = () => {
    width = Array.from(clientesTrack.children).reduce(
      (acc, el) => acc + el.offsetWidth + 80,
      0
    );
  };
  updateWidth();
  window.addEventListener("resize", updateWidth);

  let anim;
  const animate = () => {
    pos -= speed;
    if (Math.abs(pos) >= width / 2) pos = 0;
    clientesTrack.style.transform = `translateX(${pos}px)`;
    anim = requestAnimationFrame(animate);
  };
  animate();

  clientesTrack.parentElement.addEventListener("mouseenter", () =>
    cancelAnimationFrame(anim)
  );
  clientesTrack.parentElement.addEventListener("mouseleave", animate);
}

/* ========================= CARRUSEL SERVICIOS ========================= */
const serviciosTrack = document.querySelector(".servicios .track");
if (serviciosTrack) {
  serviciosTrack.innerHTML += serviciosTrack.innerHTML;
  let pos = 0;
  const speed = 0.8;
  let width = 0;

  const updateWidth = () => {
    width = Array.from(serviciosTrack.children).reduce(
      (acc, el) => acc + el.offsetWidth + 30,
      0
    );
  };
  updateWidth();
  window.addEventListener("resize", updateWidth);

  let anim;
  const animate = () => {
    pos -= speed;
    if (Math.abs(pos) >= width / 2) pos = 0;
    serviciosTrack.style.transform = `translateX(${pos}px)`;
    anim = requestAnimationFrame(animate);
  };
  animate();

  serviciosTrack.parentElement.addEventListener("mouseenter", () =>
    cancelAnimationFrame(anim)
  );
  serviciosTrack.parentElement.addEventListener("mouseleave", animate);
}

/* ========================= CURSOR POINTER ========================= */
document.querySelectorAll(".card, .service-card, .client-logo").forEach((el) => {
  el.style.cursor = "pointer";
});

