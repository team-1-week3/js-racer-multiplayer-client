<template>
  <div>
    <!-- <audio controls autoplay loop hidden>
      <source src=".././assets/ck.mp3" type="audio/wav">
    </audio> -->
    <audio id="audio" hidden>
      <source src=".././assets/speeding-truck-1-sound-effect-69406128.mp3" type="audio/wav">
    </audio>
    <div class="container" style="margin:0;padding:0">
      <div class="row">
        <div class="col-sm-8">
          <div class="bg">
            <img class="mobil" src=".././assets/car.png" :style="`top:${topMobil1}%`" />
            <img class="mobil2" src=".././assets/jsracer-mobil2.png" :style="`top:${topMobil2}%`" />
            <button class="btn btn-danger console"  @click="move()">MOVE</button>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="w3-container ml-5">
            <h2>Players</h2>
            <ul class="w3-ul w3-card-4">
              <li class="w3-bar w3-bar-1">
                <img src="https://www.w3schools.com/w3css/img_avatar2.png" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
                <div class="w3-bar-item mt-2">
                  <span>{{playerName}}</span>
                </div>
              </li>
              <li class="w3-bar w3-bar-2">
                <img src="https://www.w3schools.com/w3css/img_avatar5.png" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
                <div class="w3-bar-item mt-2">
                  <span>Other Player</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
import { mapState } from 'vuex'
import swal from 'sweetalert'

export default {
  name: 'Game',
  data () {
    return {
      id: '',
      winner: false,
      winnerName: '',
      topMobil1: 80,
      topMobil2: 80,
      otherPlayer: ''
    }
  },
  created () {
    this.socket = io('http://localhost:3000')
  },
  mounted () {
    this.socket.on('positions', data => {
      this.topMobil1 = data[0].top
      this.topMobil2 = data[1].top
    })

    this.socket.on('winner', data => {
      if (data) {
        this.winner = true
        this.winnerName = data
        swal('CONGRATULATION', '' + this.winnerName + ' You Win the Game !')
      }
    })
  },
  methods: {
    move () {
      const audio = document.getElementById('audio')
      audio.play()
      if (!this.winner) {
        const payload = {
          id: this.socket.id,
          name: this.playerName
        }
        this.socket.emit('move', payload)
        this.dice = 0
      }
    }
  },
  computed: {
    ...mapState(['playerName'])
  }
}
</script>

<style scoped>
.swal-text {
  font-weight: bold
}
.w3-bar-1 {
  position: relative;
  animation: myfirst 1s 1;
  animation-direction: normal;
  /* top: 77px; */
}
/* .w3-bar-1{
  -webkit-transition: 3s;
  -moz-transition: 3s;
  -ms-transition: 3s;
  -o-transition: 3s;
  transition: 3s;
  top: 77px;
} */
/* @keyframes myfirst {
  0%   {background: red; left: 0px; top: 0px;}
  100%  {background: green; left: 0px; top: 77px;}
} */
.w3-bar-2 {
  position: relative;
  animation: myfirst2 1s 1;
  animation-direction: normal;
  /* top:-77px */
}
/* @keyframes myfirst2 {
  0%   {background: red; left: 0px; top: 0px;}
  100%  {background: green; left: 0px; top: -77px;}
} */
/* .w3-bar-2{
  -webkit-transition: 3s;
  -moz-transition: 3s;
  -ms-transition: 3s;
  -o-transition: 3s;
  transition: 3s;
  top: -77px;
} */
.console {
  border-radius: 50%;
  position: absolute;
  top: 82%;
  left: 45%;
  height: 75px;
}
.bg {
  background: url("https://ak0.picdn.net/shutterstock/videos/1028600570/thumb/1.jpg");
  background-position: 50%;
  height: 100vh;
}
.mobil {
  top: 80%;
  left: 27%;
  height: 120px;
  width: 80px;
  z-index: 0;
  position: absolute;
}
.mobil2 {
  top: 80%;
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
  width: 40vw;
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
