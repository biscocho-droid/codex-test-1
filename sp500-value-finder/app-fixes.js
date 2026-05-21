(function () {
  const CONTRAST_ALPHA_THRESHOLD = 90;

  function tickerForLogo(logo) {
    const tickerCell = logo.closest(".ticker-cell");
    const ticker = tickerCell?.querySelector("strong")?.textContent?.trim();
    if (ticker) return ticker;

    const detailTitle = logo.closest(".detail-title");
    const detailTicker = detailTitle?.querySelector("strong")?.textContent?.trim();
    if (detailTicker) return detailTicker;

    return "?";
  }

  function markLogo(logo) {
    const ticker = tickerForLogo(logo);
    logo.dataset.fallback = ticker.slice(0, 2).toUpperCase();

    const img = logo.querySelector("img");
    if (!img) {
      logo.classList.add("logo-failed");
      return;
    }

    const fail = () => {
      logo.classList.add("logo-failed");
      logo.classList.remove("logo-needs-contrast");
    };

    const analyzeVisibility = () => {
      if (!img.naturalWidth || !img.naturalHeight) return;

      try {
        const canvas = document.createElement("canvas");
        const width = Math.min(64, img.naturalWidth);
        const height = Math.min(64, img.naturalHeight);
        canvas.width = width;
        canvas.height = height;

        const context = canvas.getContext("2d", { willReadFrequently: true });
        context.drawImage(img, 0, 0, width, height);
        const pixels = context.getImageData(0, 0, width, height).data;

        let alphaTotal = 0;
        for (let index = 3; index < pixels.length; index += 4) {
          alphaTotal += pixels[index];
        }

        const alphaMean = alphaTotal / (pixels.length / 4);
        logo.classList.toggle("logo-needs-contrast", alphaMean < CONTRAST_ALPHA_THRESHOLD);
      } catch (_error) {
        // If canvas inspection is blocked, keep the normal logo instead of forcing a fallback.
        logo.classList.remove("logo-needs-contrast");
      }
    };

    const pass = () => {
      if (img.naturalWidth <= 1 || img.naturalHeight <= 1) fail();
      else {
        logo.classList.remove("logo-failed");
        analyzeVisibility();
      }
    };

    if (img.dataset.logoPrepared !== "true") {
      img.dataset.logoPrepared = "true";
      img.crossOrigin = "anonymous";
      img.addEventListener("error", fail);
      img.addEventListener("load", pass);

      if (img.src && !img.src.startsWith("data:")) {
        const src = img.src;
        img.removeAttribute("src");
        img.src = src;
      }
    }

    if (img.complete) pass();
  }

  function hydrateLogos() {
    document.querySelectorAll(".company-logo").forEach(markLogo);
  }

  function lockTableScroll(tableWrap) {
    if (tableWrap.dataset.axisLockReady === "true") return;
    tableWrap.dataset.axisLockReady = "true";

    let startX = 0;
    let startY = 0;
    let startScrollLeft = 0;
    let startScrollTop = 0;
    let axis = null;

    tableWrap.addEventListener("touchstart", (event) => {
      if (event.touches.length !== 1) return;
      const touch = event.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      startScrollLeft = tableWrap.scrollLeft;
      startScrollTop = tableWrap.scrollTop;
      axis = null;
    }, { passive: true });

    tableWrap.addEventListener("touchmove", (event) => {
      if (event.touches.length !== 1) return;
      const touch = event.touches[0];
      const dx = touch.clientX - startX;
      const dy = touch.clientY - startY;

      if (!axis && Math.max(Math.abs(dx), Math.abs(dy)) > 8) {
        axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      }

      if (!axis) return;

      event.preventDefault();
      if (axis === "x") {
        tableWrap.scrollLeft = startScrollLeft - dx;
      } else {
        tableWrap.scrollTop = startScrollTop - dy;
      }
    }, { passive: false });
  }

  function hydrateTableScroll() {
    document.querySelectorAll(".table-wrap").forEach(lockTableScroll);
  }

  function hydrate() {
    hydrateLogos();
    hydrateTableScroll();
  }

  window.addEventListener("load", hydrate);

  const observer = new MutationObserver(hydrate);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
