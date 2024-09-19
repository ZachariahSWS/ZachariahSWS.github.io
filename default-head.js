(function () {
  const currentScript = document.currentScript;
  const title = currentScript.getAttribute("data-title") || "Default Title";
  document.title = title;

  const currentURL = window.location.href;

  // Add meta tags
  const metaTags = [
    { charset: "UTF-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: currentURL },
    { property: "og:title", content: `${title} - Zachariah Schwab` },
    { property: "twitter:url", content: currentURL },
    { property: "twitter:title", content: `${title} - Zachariah Schwab` },
    { property: "twitter:domain", content: "zachariahschwab.com" },
  ];

  metaTags.forEach((tag) => {
    const meta = document.createElement("meta");
    if (tag.charset) {
      meta.setAttribute("charset", tag.charset);
    } else {
      Object.keys(tag).forEach((key) => meta.setAttribute(key, tag[key]));
    }
    document.head.appendChild(meta);
  });

  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.type = "image/x-icon";
  favicon.href = "favicon.ico?";
  document.head.appendChild(favicon);

  // Add scripts to the document
  const scriptSources = ["scroll-progress.js", "footnotes.js"];

  scriptSources.forEach((src) => {
    document.write(`<script src="${src}" defer></script>`);
  });

  // Set body to visible after window load
  window.addEventListener("load", function () {
    document.body.style.visibility = "visible";
  });
})();
