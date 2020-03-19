<template>
  <div id="app">
    <div class="container" style="margin:0;padding:0">
      <div class="row">
        <div class="col-sm-8">
          <div class="bg">
            <img class="mobil" src="https://lh3.googleusercontent.com/proxy/8AIuYfbaWRVqWbP3W8r6tB4hC2xCvv_GINqo1zPaQb8otXqDhmKIhIepx6AtAPdiS_GCvgU2f3jXi9Owzu5kl_oljYUGKEcPgoM0PrkxYNVN" />
            <img class="mobil2" src="https://lh3.googleusercontent.com/proxy/8AIuYfbaWRVqWbP3W8r6tB4hC2xCvv_GINqo1zPaQb8otXqDhmKIhIepx6AtAPdiS_GCvgU2f3jXi9Owzu5kl_oljYUGKEcPgoM0PrkxYNVN" />
          </div>
        </div>
        <div class="col-sm-4">
          <h1>Hello World</h1>
          <button class="btn btn-primary ml-5">MOVE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bg {
  background: url("https://ak0.picdn.net/shutterstock/videos/1028600570/thumb/1.jpg");
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  background-position: 50%;
  height: 100vh;
}
.mobil {
  top: 80%; /*tinggal mainan top*/
  left: 27%;
  height: 120px;
  width: 80px;
  z-index: 0;
  position: absolute;
}
.mobil2 {
  top: 80%; /*tinggal mainan top*/
  left: 62%;
  height: 120px;
  width: 80px;
  z-index: 0;
  position: absolute;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
