document.addEventListener('DOMContentLoaded', () => {
    const footnotes = document.querySelectorAll('.footnote');
    const popup = document.getElementById('footnote-popup');
    const popupContent = popup.querySelector('.footnote-content');
    const closeBtn = popup.querySelector('.close-btn');

    footnotes.forEach(footnote => {
        footnote.addEventListener('click', (e) => {
          const rect = footnote.getBoundingClientRect();
          const footnoteHTML = footnote.getAttribute('data-footnote');
          
          popupContent.innerHTML = footnoteHTML;
          popup.style.display = 'block';
          
          const popupWidth = 300; // Match this to your CSS max-width
          const popupHeight = popup.offsetHeight;

          let left = rect.left - popupWidth - 10; // Position to the left with 10px gap
          let top = rect.top + window.pageYOffset;

          // If not enough space on the left, position to the right
          if (left < 0) {
              left = rect.right + 10;
          }

          // Adjust if the popup would go off the bottom of the screen
          if (top + popupHeight > window.innerHeight + window.pageYOffset) {
              top = window.innerHeight + window.pageYOffset - popupHeight - 10;
          }

          popup.style.left = `${left}px`;
          popup.style.top = `${top}px`;
          
          e.stopPropagation();
      });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    document.addEventListener('click', (e) => {
        if (!popup.contains(e.target)) {
            popup.style.display = 'none';
        }
    });
});