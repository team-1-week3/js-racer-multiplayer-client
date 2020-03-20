<template>
  <div>
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
      </div>
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
</style>
