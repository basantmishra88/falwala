<template>
    <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="/">FALWALA</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="/Fruits">Fruits</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="/vege">Vegetables</a>
              </li>
            </ul>
            <form class="d-flex search" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-light btn-outline-success text-" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
</template>
<script>
export default{
    name:"NavbarComp"
}
</script>
<style scoped>
.navbar{
    position: fixed;
    width: 100vw;
    z-index: 10;
}
.search{
  margin-right: 40px;
}

</style>