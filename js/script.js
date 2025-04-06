// Navbar code Section //
const toggleButton = document.querySelector('label[for="menu-toggle"]');
const navbarDefault = document.querySelector('.peer-checked + div');

toggleButton.addEventListener('click', () => {
  navbarDefault.classList.toggle('hidden');
});


// Video code Section //
const previewImage = document.getElementById('preview-image');
const video = document.getElementById('my-video');

previewImage.addEventListener('click', () => {
    previewImage.style.display = 'none'; // hide image
    video.classList.remove('hidden'); // show video
    video.play(); // play video
});


// Accordion section 7 
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;
    const icon = header.querySelector('.accordion-icon');

    // Toggle accordion body
    body.classList.toggle('hidden');

    // Toggle icon rotation
    icon.classList.toggle('rotate-180');
  });
});