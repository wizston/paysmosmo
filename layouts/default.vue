<template>
  <div>
    <div
      class="d-flex flex-column flex-md-row align-items-center pb-3 pt-3 mb-4 bg-white border-bottom shadow-sm container-main"
    >
      <h5 class="my-0 mr-md-auto font-weight-normal" />
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="#">How it works</a>
        <a class="p-2 text-dark" href="#">Log In</a>
      </nav>
      <a class="btn-link text-success _margin-left" href="#">Sign Up</a>
    </div>

    <div class="div container-main pt-2">
      <div class="row">
        <div style="width: 280px;">
          <img src="paysmosmo-logo.png" width="200px" alt>
        </div>
        <div class="col">
          <form>
            <div class="input-group mb-3 input-group-lg">
              <font-awesome-icon class="nav-search-icon" size="2x" icon="search" />
              <input
                type="text"
                class="form-control main-search-box"
                placeholder="Search for products"
                aria-label="Search for products"
                aria-describedby="button-addon2"
              >
              <div class="input-group-append">
                <button
                  id="button-addon2"
                  class="btn btn-warning main-search-button text-white"
                  type="button"
                >
                  SEARCH
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="w-3">
          <nav class="my-2 my-md-0 mr-md-3 text-right" style="padding: 15px;">
            <a class="p-2 text-dark ml-5" href="#">
              <span class="fa-layers fa-fw">
                <font-awesome-icon size="2x" icon="cart-plus" />
                <span class="fa-layers-counter" style="background:Tomato;top: -8px;left: -11px;font-size: 25px;" />
                <span class="fa-layers-text nav-icon-text" style="fon">Cart</span>
              </span>
            </a>
            <a class="p-2 text-dark ml-5" href="#">
              <span class="fa-layers fa-fw">
                <font-awesome-icon size="2x" icon="heart" />
                <span class="fa-layers-counter" style="background:Tomato;top: -8px;left: -3px;font-size: 25px;" />
                <span class="fa-layers-text nav-icon-text" style="fon">Wishlist</span>
              </span>
            </a>
            <a class="p-2 text-dark ml-5" href="#">
              <span class="fa-layers fa-fw">
                <font-awesome-icon size="2x" :icon="['far', 'bell']" />
                <span class="fa-layers-counter" style="background:Tomato;top: -8px;left: -11px;font-size: 25px;" />
                <span class="fa-layers-text nav-icon-text" style="fon">Notification</span>
              </span>
            </a>
          </nav>
        </div>
      </div>
    </div>

    <nuxt />

    <footer class="base-foot border-top">
      <div class="container-main" style="color:#8d9091">
        <div class="row">
          <div class="col-12 col-md">
            <h3 style="margin-bottom: 15px">PAYSMOSMO</h3>
            <small class="d-block mb-3 text-muted">Help give out inventory loans to <br>  cooperative members with ease.</small>
          </div>
          <div class="col-6 col-md">
            <h5>Contact</h5>
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="#">Registration</a>
              </li>
              <li>
                <a class="text-muted" href="#">About Us</a>
              </li>
              <li>
                <a class="text-muted" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Help</h5>
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="#">Privacy Policy</a>
              </li>
              <li>
                <a class="text-muted" href="#">How it works</a>
              </li>
              <li>
                <a class="text-muted" href="#">Terms and conditions</a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Stay Connected</h5>
            <ul class="list-unstyled text-small">
              <li>
                <span class="fa-layers fa-fw mr-4">
                <font-awesome-icon size="1x" class="ml-2" :icon="['fab', 'facebook-f']" />
                <font-awesome-icon size="2x" data-fa-transform="shrink-6" :icon="['far', 'circle']" />
                </span>

                <span class="fa-layers fa-fw mr-4">
                <font-awesome-icon size="1x" class="ml-2" :icon="['fab', 'twitter']" />
                <font-awesome-icon size="2x" data-fa-transform="shrink-6" :icon="['far', 'circle']" />
                </span>

                <span class="fa-layers fa-fw mr-4">
                <font-awesome-icon size="1x" class="ml-2" :icon="['fab', 'instagram']" />
                <font-awesome-icon size="2x" data-fa-transform="shrink-6" :icon="['far', 'circle']" />
                </span>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md">
            <h5>Back to top ^ </h5>
            <small class="d-block mb-3 text-muted">© 2017-2018</small>
          </div>
        </div>
      </div>
    </footer>

    <div class="clearfix" />
    <footer class="footer text-center">
      <span class="text-muted align-middle">&copy; 2018 PAYSMOSMO.</span>
    </footer>
  </div>
</template>

<script>
export default {}
</script>


<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

._margin-left {
  padding-left: 20px;
  border-left: solid 2px #bfbfbf;
}

.main-search-button {
  border-radius: 0 2px 2px 0 !important;
  padding-left: 35px !important;
  padding-right: 35px !important;
}

.main-search-box {
  border-radius: 2px 0 0 2px !important;
  height: 60px !important;
  background: #f2f2f2;
  border: none;
  padding-left: 65px !important;
}
</style>
