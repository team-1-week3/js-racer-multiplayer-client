<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>
export default {
  name: 'JSRacer',
  components: {}
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
