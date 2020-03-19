<template>
  <div>
      <h1>JS Racer</h1>
      <p v-if="winner">we have a winner</p>
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
        <p>
          <button @click="step()">Roll dice!</button>
        </p>
      </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  name: 'Game',
  data () {
    return {
      index: 0,
      winner: false,
      dice: 0,
      socket: {},
      context1: {},
      context2: {},
      positions: [
        {
          x: 0,
          y: 0
        },
        {
          x: 0,
          y: 0
        }
      ]
    }
  },
  created () {
    this.socket = io('http://localhost:3000')
  },
  mounted () {
    this.socket.on('index', data => {
      this.index = data
    })
    this.context = this.$refs.game.getContext('2d')
    this.socket.on('positions', data => {
      this.positions = data
      this.socket.on('index', data => {
        this.index = data
      })
      this.context.clearRect(0, 0, this.$refs.game.width, this.$refs.game.height)
      this.context.fillRect(this.positions[0].x, this.positions[0].y, 20, 20)
      this.context.fillRect(this.positions[1].x, this.positions[1].y, 20, 20)
    })
    this.socket.on('winner', data => {
      if (data) {
        this.winner = true
      }
    })
  },
  methods: {
    move () {
      const payload = {
        index: this.index,
        dice: this.dice * 40
      }
      this.socket.emit('move', payload)
      this.dice = 0
    },
    step () {
      const step = 3
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
