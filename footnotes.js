document.addEventListener("DOMContentLoaded", () => {
  const footnotes = document.querySelectorAll(".footnote");
  const popup = document.getElementById("footnote-popup");
  const popupContent = popup.querySelector(".footnote-content");
  const closeBtn = popup.querySelector(".close-btn");

  function showPopup(footnote) {
    const footnoteHTML = footnote.getAttribute("data-footnote");
    popupContent.innerHTML = footnoteHTML;
    popup.style.display = "block";
    const rect = footnote.getBoundingClientRect();
    const popupWidth = 300; // Adjust this value to match your CSS
    let left = rect.right + 10; // 10px gap from the footnote
    let top = rect.top + window.scrollY;
    // If popup would go off the right edge, place it on the left side instead
    if (left + popupWidth > window.innerWidth) {
      left = rect.left - popupWidth - 10;
    }
    // Ensure the popup stays within the viewport vertically
    const popupHeight = popup.offsetHeight;
    if (top + popupHeight > window.innerHeight + window.scrollY) {
      top = window.innerHeight + window.scrollY - popupHeight - 10;
    }
    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;
  }

  document.addEventListener("click", (e) => {
    const clickedFootnote = e.target.closest(".footnote");
    if (clickedFootnote) {
      e.preventDefault();
      showPopup(clickedFootnote);
    } else if (!popup.contains(e.target)) {
      popup.style.display = "none";
    }
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
});
