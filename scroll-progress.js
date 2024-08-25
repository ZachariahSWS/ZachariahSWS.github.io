document.addEventListener("DOMContentLoaded", () => {
  const footnotes = document.querySelectorAll(".footnote");
  const popup = document.getElementById("footnote-popup");
  const popupContent = popup.querySelector(".footnote-content");
  const closeBtn = popup.querySelector(".close-btn");

  footnotes.forEach((footnote) => {
    footnote.addEventListener("click", (e) => {
      const footnoteHTML = footnote.getAttribute("data-footnote");

      popupContent.innerHTML = footnoteHTML;
      popup.style.display = "block";

      const popupWidth = 300; // Match this to your CSS max-width
      const popupHeight = popup.offsetHeight;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Find the containing paragraph
      let paragraph = footnote.closest("p");
      let paragraphRect = paragraph.getBoundingClientRect();

      let left, top;

      // Check if there's enough space on the right
      if (paragraphRect.right + popupWidth + 10 <= viewportWidth) {
        // Position to the right of the paragraph
        left = paragraphRect.right + 10;
      } else if (paragraphRect.left - popupWidth - 10 >= 0) {
        // Position to the left of the paragraph
        left = paragraphRect.left - popupWidth - 10;
      } else {
        // Not enough space on either side, position where there's more space
        const spaceOnLeft = paragraphRect.left;
        const spaceOnRight = viewportWidth - paragraphRect.right;
        left =
          spaceOnRight > spaceOnLeft ? viewportWidth - popupWidth - 10 : 10;
      }

      // Set top position
      top = paragraphRect.top + window.pageYOffset;

      // Adjust if the popup would go off the bottom of the screen
      if (top + popupHeight > viewportHeight + window.pageYOffset) {
        top = viewportHeight + window.pageYOffset - popupHeight - 10;
      }

      // Apply the calculated position
      popup.style.left = `${left}px`;
      popup.style.top = `${top}px`;

      e.stopPropagation();
    });
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  document.addEventListener("click", (e) => {
    if (!popup.contains(e.target)) {
      popup.style.display = "none";
    }
  });
});
