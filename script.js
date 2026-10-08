function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

function searchCalculators() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (query) {
        window.location.href = `/calculators.html?search=${encodeURIComponent(query)}`;
    }
}

// Allow Enter key in search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchCalculators();
            }
        });
    }

    // Mobile menu close on click
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-links').style.display = 'none';
        });
    });

    // FAQ toggle
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.classList.toggle('show');
        });
    });
});
