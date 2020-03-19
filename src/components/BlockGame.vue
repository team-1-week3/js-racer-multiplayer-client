<template>
  <div>
    <h1>IO GAME</h1>
    <div>
      <canvas
        ref="game"
        width="640px"
        height="480px"
        style="border: 1px solid black">
      </canvas>
      <p>
        <button @click="move()">GO!</button>
      </p>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
const URL = 'http://localhost:3000'
export default {
  name: 'BlockGame',
  data () {
    return {
      socket: {},
      context: {},
      position: {
        x: 0,
        y: 0
      }
    }
  },
  props: {},
  methods: {
    move () {
      const step = Math.ceil(Math.random()* 6) + 10
      console.log(step)
      this.socket.emit('move', step)
    }
  },
  created () {
    this.socket = io(URL)
  },
  mounted () {
    this.context = this.$refs.game.getContext('2d')
    this.socket.on('position', data => {
      this.position = data
      this.context.clearRect(0, 0, this.$refs.game.width, this.$refs.game.height)
      this.context.fillRect(this.position.x, this.position.y, 20, 20)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
