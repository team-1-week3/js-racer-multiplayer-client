<template>
  <div>
    <div class="container" style="margin:0;padding:0">
      <div class="row">
        <div class="col-sm-8">
          <div class="bg">
            <img class="mobil" src=".././assets/car.png" />
            <img class="mobil2" src=".././assets/car.png" />
            <button class="btn btn-danger console">MOVE</button>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="w3-container ml-5">
            <h2>Rank</h2>
            <ul class="w3-ul w3-card-4">
              <li class="w3-bar w3-bar-1">
                <img src="https://www.w3schools.com/w3css/img_avatar2.png" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
                <div class="w3-bar-item mt-2">
                  <span>Player1</span>
                </div>
              </li>
              <li class="w3-bar w3-bar-2">
                <img src="https://www.w3schools.com/w3css/img_avatar5.png" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
                <div class="w3-bar-item mt-2">
                  <span>Player2</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      <!-- <h1>JS Racer</h1>
      <h1>JS Racer</h1>
      <p>{{ playerName }}</p>
      <p v-if="winner">we have a winner</p>
      <p v-if="winnerName"> {{ winnerName }}</p>
      <div>
        <canvas
          ref="game"
          width="480px"
          height="640px"
          style="border: 1px solid black">
        </canvas>
        <p>
          <button @click="move()">GO!</button>
        </p>
      </div> -->
  </div>
</template>

<script>
import io from 'socket.io-client'
import { mapState } from 'vuex'

export default {
  name: 'Game',
  data () {
    return {
      id: '',
      winner: false,
      dice: 0,
      winnerName: ''
    }
  },
  created () {
    this.socket = io('http://localhost:3000')
  },
  mounted () {
    this.context = this.$refs.game.getContext('2d')

    this.socket.on('positions', data => {
      this.$store.state.positions = data

      this.context.clearRect(0, 0, this.$refs.game.width, this.$refs.game.height)
      this.context.fillRect(this.$store.state.positions[0].x, this.$store.state.positions[0].y, 20, 20)
      this.context.fillRect(this.$store.state.positions[1].x, this.$store.state.positions[1].y, 20, 20)
    })

    this.socket.on('winner', data => {
      if (data) {
        this.winner = true
        this.winnerName = data
      }
    })
  },
  methods: {
    move () {
      if (!this.winner) {
        const payload = {
          id: this.socket.id,
          dice: this.dice + 20,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.w3-bar-1 {
  position: relative;
  animation: myfirst 1s 1;
  animation-direction: normal;
  top: 77px;
}
/* .w3-bar-1{
  -webkit-transition: 3s;
  -moz-transition: 3s;
  -ms-transition: 3s;
  -o-transition: 3s;
  transition: 3s;
  top: 77px;
} */
@keyframes myfirst {
  0%   {background: red; left: 0px; top: 0px;}
  100%  {background: green; left: 0px; top: 77px;}
}
.w3-bar-2 {
  position: relative;
  animation: myfirst2 1s 1;
  animation-direction: normal;
  top:-77px
}
@keyframes myfirst2 {
  0%   {background: red; left: 0px; top: 0px;}
  100%  {background: green; left: 0px; top: -77px;}
}
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
