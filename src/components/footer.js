const footerComponent = () => {
  const footer = document.createElement('footer');
  footer.id = 'footer';
  footer.classList.add('container-fluid', 'bg-success', 'text-white', 'py-3', 'fixed-bottom');

  const authorLink = document.createElement('a');
  authorLink.classList.add('text-decoration-none', 'text-white', 'fw-bolder');
  authorLink.href = 'https://github.com/Moreneecoder';
  authorLink.textContent = "Made with love by Mo' Bello";

  footer.appendChild(authorLink);

  return footer;
};

export default footerComponent;