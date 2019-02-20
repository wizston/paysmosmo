<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" />
      <li data-target="#carouselExampleIndicators" data-slide-to="1" />
      <li data-target="#carouselExampleIndicators" data-slide-to="2" />
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          class="d-block w-100"
          src="https://res.cloudinary.com/anelda/image/upload/c_scale,w_1920/v1550689447/suede-shoes-photo-1503009_e4muoi.jpg"
          alt="First slide"
        >
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="https://via.placeholder.com/800x320?auto=yes&bg=666&fg=444&text=Second slide"
          alt="Second slide"
        >
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="https://via.placeholder.com/800x320?auto=yes&bg=555&fg=333&text=Third slide"
          alt="Third slide"
        >
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<style>
</style>
