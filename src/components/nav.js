const navComponent = () => {
  const navbarHtml = `<div class="container-fluid">
    <a class="navbar-brand text-white" href="#">taskHero</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-white" id="home" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" id="app" href="#">App</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#" id="credit" tabindex="-1">Credit</a>
        </li>        
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>`;

  const navBar = document.createElement('nav');
  navBar.classList.add(...['navbar', 'navbar-expand-lg', 'navbar-light', 'bg-success', 'fixed-top']);

  navBar.innerHTML = navbarHtml;

  return navBar;
};

export default navComponent;