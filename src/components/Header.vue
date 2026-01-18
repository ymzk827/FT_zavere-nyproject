<template>
  <header id="header" class="site-header">
    <!-- Top Info Bar -->
    <div class="top-info border-bottom d-none d-md-block mb-3">
      <div class="container-fluid">
        <div class="row g-0">
          <div class="col-md-4">
            <p class="fs-6 my-2 text-center">
              Need any help? Call us <a href="#">112233344455</a>
            </p>
          </div>
          <div class="col-md-4 border-start border-end">
            <p class="fs-6 my-2 text-center">
              Summer sale discount off 60% off! 
              <a class="text-decoration-underline" href="index.html">Shop Now</a>
            </p>
          </div>
          <div class="col-md-4">
            <p class="fs-6 my-2 text-center">
              2-3 business days delivery & free returns
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navbar -->
    <nav id="header-nav" class="navbar navbar-expand-lg py-3">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <img src="@/assets/images/main-logo.png" class="logo" alt="Logo">
        </a>

        <button 
          class="navbar-toggler d-flex d-lg-none order-3 p-2" 
          type="button" 
          data-bs-toggle="offcanvas"
          data-bs-target="#bdNavbar" 
          aria-controls="bdNavbar" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <svg class="navbar-icon">
            <use xlink:href="#navbar-icon"></use>
          </svg>
        </button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
          <div class="offcanvas-header px-4 pb-0">
            <a class="navbar-brand" href="index.html">
              <img src="@/assets/images/main-logo.png" class="logo" alt="Logo">
            </a>
            <button type="button" class="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div class="offcanvas-body">
            <ul id="navbar"
                class="navbar-nav text-uppercase justify-content-start justify-content-lg-center align-items-start align-items-lg-center flex-grow-1">
                <li class="nav-item">
                <router-link class="nav-link me-4" to="/" exact-active-class="active">Home</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link me-4" to="/about" exact-active-class="active">About</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link me-4" to="/shop" exact-active-class="active">Shop</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link me-4" to="/blogs" exact-active-class="active">Blogs</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link me-4" to="/contact" exact-active-class="active">Contact</router-link>
                </li>
            </ul>

            <!-- User items: search & profile -->
            <div class="user-items d-flex">
                <ul class="d-flex justify-content-end list-unstyled mb-0">
                <li class="search-item pe-3">
                    <a href="#" class="search-button">
                    <svg class="search"><use xlink:href="#search"></use></svg>
                    </a>
                </li>
                <li class="pe-3">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <svg class="user"><use xlink:href="#user"></use></svg>
                    </a>
                </li>
                </ul>
            </div>
            </div>

        </div>
      </div>
    </nav>
  </header>
</template>
