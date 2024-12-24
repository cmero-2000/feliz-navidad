document.addEventListener('DOMContentLoaded', () => {
    const mensaje = document.querySelector('#mensaje');
    const padoru = document.querySelector('#padoru');

    padoru.addEventListener('click', () => {
        mensaje.textContent = "¡Feliz Navidad!";
        mensaje.style.opacity = 1;
        mensaje.style.transition = "opacity 1s"; // Animación suave
    });
});
