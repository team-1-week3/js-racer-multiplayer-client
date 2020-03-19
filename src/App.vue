<template>
  <div id="app">
    <LandingPage></LandingPage>
    <!-- <Game /> -->
    <!-- <div class="container" style="margin:0;padding:0">
      <div class="row">
        <div class="col-sm-8">
          <div class="bg">
            <img class="mobil" src="./assets/car.png" />
            <img class="mobil2" src="./assets/car.png" />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="w3-container ml-5">
            <h2>Rank</h2>
            <ul class="w3-ul w3-card-4">
              <li class="w3-bar">
                <img src="https://www.w3schools.com/w3css/img_avatar2.png" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
                <div class="w3-bar-item mt-2">
                  <span>Player1</span>
                </div>
              </li>
              <li class="w3-bar">
                <img src="https://www.w3schools.com/w3css/img_avatar5.png" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
                <div class="w3-bar-item mt-2">
                  <span>Player2</span>
                </div>
              </li>
            </ul>
          </div>
          <br/>
          <button class="btn btn-primary ml-5">MOVE</button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
// import Game from './components/Game.vue'
import LandingPage from './views/LandingPage.vue'
export default {
  name: 'JSRacer',
  components: {
    // Game,
    LandingPage
  }
}
</script>

<style>
.bg {
  background: url("https://ak0.picdn.net/shutterstock/videos/1028600570/thumb/1.jpg");
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
.w3 {
  width: 400px;
}
.w3-container, .w3-panel {
  padding: 0.01em 16px;
}
.w3-card-4, .w3-hover-shadow:hover{
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19);
  width: 600px;
}
.w3-ul {
  list-style-type: none;
  padding:0;
  margin: 0;
}
.w3-ul li {
  padding:8px 16px;
  border-bottom:1px solid #ddd;
}
.w3-bar {
  width: 100%;
  overflow: hidden;
}
.w3-bar .w3-button {
  padding: 8px 16px;
  width: auto;
  border: auto;
  display: block;
  outline:0;
}
.w3-white, .w3-hover-white:hover {
  color: #000 !important;
  background-color: #fff !important;
}
.w3-circle {
  height: 60px;
}
.w3-bar .w3-bar-item {
  padding: 8px 16px;
  float: left;
  border: none;
  display: block;
  outline: 0;
}
</style>
