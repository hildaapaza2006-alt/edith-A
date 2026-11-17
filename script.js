// Actualizar año automáticamente en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Alternar Modo Claro / Oscuro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Simulación de envío de formulario de contacto
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    formStatus.textContent = `¡Gracias ${nombre}! Tu mensaje ha sido registrado correctamente.`;
    contactForm.reset();
});
