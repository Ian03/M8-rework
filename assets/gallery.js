(function () {
  "use strict";

  var shots = Array.prototype.slice.call(document.querySelectorAll(".shots-grid .shot"));
  if (!shots.length) return;

  var currentIndex = 0;
  var lastFocused = null;
  var lightbox = document.createElement("div");
  lightbox.className = "x8-lightbox";
  lightbox.hidden = true;
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Galeria de screenshots");
  lightbox.innerHTML =
    '<div class="x8-lightbox-backdrop" data-lightbox-close></div>' +
    '<div class="x8-lightbox-content">' +
      '<button class="x8-lightbox-close" type="button" aria-label="Fechar" data-lightbox-close>&times;</button>' +
      '<button class="x8-lightbox-nav x8-lightbox-prev" type="button" aria-label="Imagem anterior">&#8249;</button>' +
      '<img class="x8-lightbox-image" alt="">' +
      '<p class="x8-lightbox-caption" aria-live="polite"></p>' +
      '<button class="x8-lightbox-nav x8-lightbox-next" type="button" aria-label="Próxima imagem">&#8250;</button>' +
    '</div>';
  document.body.appendChild(lightbox);

  var image = lightbox.querySelector(".x8-lightbox-image");
  var caption = lightbox.querySelector(".x8-lightbox-caption");
  var closeButton = lightbox.querySelector(".x8-lightbox-close");

  function showImage(index) {
    currentIndex = (index + shots.length) % shots.length;
    var source = shots[currentIndex].querySelector("img");
    image.src = source.currentSrc || source.src;
    image.alt = source.alt || "";
    caption.textContent = (source.alt || "Screenshot") + "  ·  " + (currentIndex + 1) + "/" + shots.length;
  }

  function openLightbox(index, trigger) {
    lastFocused = trigger;
    showImage(index);
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    closeButton.focus();
  }

  function closeLightbox() {
    if (lightbox.hidden) return;
    lightbox.hidden = true;
    image.removeAttribute("src");
    document.body.classList.remove("lightbox-open");
    if (lastFocused) lastFocused.focus();
  }

  shots.forEach(function (shot, index) {
    shot.tabIndex = 0;
    shot.setAttribute("role", "button");
    shot.setAttribute("aria-label", "Ampliar " + (shot.querySelector("img").alt || "screenshot"));
    shot.addEventListener("click", function () { openLightbox(index, shot); });
    shot.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(index, shot);
      }
    });
  });

  lightbox.querySelectorAll("[data-lightbox-close]").forEach(function (element) {
    element.addEventListener("click", closeLightbox);
  });
  lightbox.querySelector(".x8-lightbox-prev").addEventListener("click", function () { showImage(currentIndex - 1); });
  lightbox.querySelector(".x8-lightbox-next").addEventListener("click", function () { showImage(currentIndex + 1); });

  document.addEventListener("keydown", function (event) {
    if (lightbox.hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") showImage(currentIndex - 1);
    if (event.key === "ArrowRight") showImage(currentIndex + 1);
  });
})();
