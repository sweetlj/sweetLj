<template>
  <div class="home">
    <Sidebar @folded="folded" @jump="jump"></Sidebar>
    <Header :fold-val="side"></Header>
    <div class="content">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>

import Sidebar from '../components/Sidebar.vue';
import Header from '../components/Header.vue'

export default {
  name: "Home",
  components: {
    Sidebar,
    Header
  },
  data() {
    return{
      side:270,
      mainwidth:0,
    }
  },
  
  methods:{
    folded() {
      if(this.side == 270) {
        this.side = 88;
      } else {
        this.side = 270;
      }

      var content = document.querySelector('.content');
      
      var winwidth = window.innerWidth;
      content.style.setProperty("--set-width", (winwidth - this.side - 50)+"px");
      content.style.setProperty("--move", this.side +"px");
    },
    jump(target) {
      console.log(target);
      this.$router.push(target);
    }
  },
  mounted() {
    this.$router.push("Dashboard");
  }
};
</script>

<style scoped>
.content {
  --set-width: 1820px;
  --move: 270px;

  margin-left: var(--move);
  width: var(--set-width);
}
</style>
