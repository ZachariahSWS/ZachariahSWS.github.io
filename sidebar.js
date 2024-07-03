// sidebar.js
const chapters = [
    { title: "Foreword", id: "foreword" },
    { title: "Chapter 1: Title", id: "chapter1" },
    { title: "Chapter 2: Title", id: "chapter2" },
    // Add more chapters as needed
];

function generateSidebar() {
    const sidebar = document.getElementById('sidebar');
    const ul = document.createElement('ul');
    
    chapters.forEach(chapter => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = chapter.title;
        a.href = `#${chapter.id}`;
        a.classList.add('internal-link');
        li.appendChild(a);
        ul.appendChild(li);
    });
    
    sidebar.appendChild(ul);
}

document.addEventListener('DOMContentLoaded', generateSidebar);