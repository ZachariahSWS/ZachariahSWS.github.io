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
            
            // Position the popup
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const popupWidth = 300; // Match this to your CSS max-width
            const popupHeight = popup.offsetHeight;

            let left = rect.left + window.pageXOffset;
            let top = rect.top + window.pageYOffset - popupHeight - 10; // Position above with 10px gap

            // Adjust if the popup would go off the right side of the screen
            if (left + popupWidth > viewportWidth) {
                left = viewportWidth - popupWidth - 10;
            }

            // Adjust if the popup would go off the top of the screen
            if (top < window.pageYOffset) {
                top = rect.bottom + window.pageYOffset + 10; // Switch to below if not enough space above
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