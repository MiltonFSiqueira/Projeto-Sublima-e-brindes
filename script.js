// Rolagem suave para links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação dos cartões de produtos ao rolar
const productCards = document.querySelectorAll('.product-card');
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

productCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Modal para detalhes do produto
function openModal(title, description) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('product-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

// Envio do formulário de contato com mensagem de feedback
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aqui, adicione a lógica para enviar o formulário, como AJAX ou fetch
    document.getElementById('form-message').innerText = "Mensagem enviada com sucesso!";
    document.getElementById('contact-form').reset();
});

// Menu hamburger
const mobileMenu = document.getElementById('mobile-menu');
const menu = document.querySelector('.menu');

mobileMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Animação ao rolar a página
const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

const observerScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

animateOnScrollElements.forEach(element => {
    observerScroll.observe(element);
});
