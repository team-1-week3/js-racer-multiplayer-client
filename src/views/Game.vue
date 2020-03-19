<template>
  <div>
      <h1>JS Racer</h1>
      <p>{{ playerName }}</p>
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
      </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  name: 'Game',
  data () {
    return {
      winner: false,
      socket: {},
      context: {}
    }
  },
  created () {
    this.socket = io('http://localhost:3000')
  },
  mounted () {
    const posx = this.$store.state.position.x
    const posy = this.$store.state.position.y
    this.context = this.$refs.game.getContext('2d')
    this.context.clearRect(0, 0, this.$refs.game.width, this.$refs.game.height)
    this.context.fillRect(posx, posy, 20, 20)
  },
  methods: {
    move () {
      console.log(this.winner);
      this.socket.on('winner', data => {
        if(data){
          this.winner = true
          console.log(this.winner);
        }
      })
      console.log(this.winner);
      if (!this.winner) {
        this.$store.commit('SET_POSY', 20)
        const posx = this.$store.state.position.x
        const posy = this.$store.state.position.y
        this.context = this.$refs.game.getContext('2d')
        this.context.clearRect(0, 0, this.$refs.game.width, this.$refs.game.height)
        this.context.fillRect(posx, posy, 20, 20)
        const position = this.$store.state.position
        this.socket.emit('move', position)
      }
    }
  },
  computed: {
    playerName () {
      return this.$store.state.playerName
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
